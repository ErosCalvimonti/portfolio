import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  { path: "/", lang: "en", heading: "Experience" },
  { path: "/es/", lang: "es", heading: "Experiencia" },
];

for (const p of pages) {
  test.describe(`${p.lang} page`, () => {
    test("loads without console errors", async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto(p.path);
      await expect(page).toHaveTitle(/Eros Calvimonti/);
      await expect(page.locator("html")).toHaveAttribute("lang", p.lang);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText("Eros Calvimonti");
      await expect(page.getByRole("heading", { level: 2, name: p.heading })).toBeVisible();
      expect(errors).toEqual([]);
    });

    test("has no accessibility violations (light and dark)", async ({ page }) => {
      for (const scheme of ["light", "dark"] as const) {
        await page.goto(p.path);
        await page.evaluate((t) => (document.documentElement.dataset.theme = t), scheme);
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();
        expect(results.violations, `${scheme} mode`).toEqual([]);
      }
    });

    test("every in-page anchor points to an existing section", async ({ page }) => {
      await page.goto(p.path);
      const targets = await page.locator('a[href^="#"]').evaluateAll((as) =>
        as.map((a) => a.getAttribute("href")!.slice(1)),
      );
      expect(targets.length).toBeGreaterThan(0);
      for (const id of new Set(targets)) {
        await expect(page.locator(`[id="${id}"]`), `#${id}`).toHaveCount(1);
      }
    });

    test("local links and assets resolve", async ({ page, request }) => {
      await page.goto(p.path);
      const urls = await page.evaluate(() => {
        const attrs = [
          ...[...document.querySelectorAll("a[href]")].map((e) => (e as HTMLAnchorElement).href),
          ...[...document.querySelectorAll("img[src], script[src]")].map((e) => (e as HTMLImageElement).src),
          ...[...document.querySelectorAll('link[rel="stylesheet"], link[rel="icon"]')].map((e) => (e as HTMLLinkElement).href),
        ];
        return attrs.filter((u) => u.startsWith(location.origin)).map((u) => u.split("#")[0]);
      });
      for (const url of new Set(urls)) {
        const res = await request.get(url);
        expect(res.status(), url).toBe(200);
      }
    });

    test("CV downloads as a PDF", async ({ page }) => {
      await page.goto(p.path);
      const download = page.waitForEvent("download");
      await page.locator(".hero a[download]").click();
      expect((await download).suggestedFilename()).toMatch(/\.pdf$/);
    });

    test("images keep their aspect ratio", async ({ page }) => {
      await page.goto(p.path);
      const imgs = page.locator("img");
      for (let i = 0; i < (await imgs.count()); i++) {
        const img = imgs.nth(i);
        await img.scrollIntoViewIfNeeded();
        await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        const { natural, rendered, src } = await img.evaluate((el: HTMLImageElement) => {
          // Content box: ignores borders and CSS transforms like rotate().
          return { natural: el.naturalWidth / el.naturalHeight, rendered: el.clientWidth / el.clientHeight, src: el.src };
        });
        expect(Math.abs(rendered - natural) / natural, `${src} is distorted`).toBeLessThan(0.03);
      }
    });

    test("the section menu and location are visible on every screen size", async ({ page }) => {
      await page.goto(p.path);
      const links = page.locator(".top nav a");
      await expect(links).toHaveCount(3);
      for (const link of await links.all()) await expect(link).toBeVisible();
      await expect(page.locator(".where")).toBeVisible();
    });

    test("fits the viewport without horizontal scroll", async ({ page }) => {
      await page.goto(p.path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });
  });
}

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("all content is still rendered", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Eros Calvimonti");
    await expect(page.locator(".jobs > li")).toHaveCount(5);
    await expect(page.locator(".finds > li")).toHaveCount(3);
    await expect(page.locator(".theme")).toBeHidden();
  });
});

test("language switch links both versions", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Ver en español" }).click();
  await expect(page).toHaveURL(/\/es\/$/);
  await page.getByRole("link", { name: "View in English" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("dark theme is the default and the toggle persists light", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  const toggle = page.locator("button.theme");
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(22, 21, 19)");
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
});
