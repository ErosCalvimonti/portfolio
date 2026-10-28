import { test, expect } from "@playwright/test";

// Sites that block bots answer with these; they don't mean the link is broken.
const BOT_BLOCKED = new Set([401, 403, 429, 999]);

test("external links are not broken @external", async ({ page, request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Run once");
  test.setTimeout(120_000);
  await page.goto("/");
  const urls = await page.evaluate(() =>
    [...document.querySelectorAll("a[href^='http']")].map((a) => (a as HTMLAnchorElement).href),
  );
  for (const url of new Set(urls)) {
    const res = await request.get(url, { maxRedirects: 10, timeout: 20_000, failOnStatusCode: false });
    const status = res.status();
    expect(status < 400 || BOT_BLOCKED.has(status), `${url} → ${status}`).toBe(true);
  }
});
