import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem(
      "muscu-auth",
      JSON.stringify({ email: "qa@gymempire.test", name: "QA" }),
    );
  });
});

test("builder opens the exercise picker and filters exercises", async ({ page }) => {
  await page.goto("/sessions/create");

  await expect(page.locator("#ses-name")).toBeVisible();
  await page.locator("#ses-name").fill("QA Push session");
  await page.getByRole("button", { name: /ajouter un exercice|add exercise/i }).first().click();

  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  const search = dialog.locator("input[type=search]");
  await expect(search).toBeVisible();
  await search.fill("squat");
  const results = dialog.locator(".create__picker-item");
  await expect(results).not.toHaveCount(0);
  await expect(results.first()).toContainText(/squat/i);

  await search.fill("zzzz-no-match");
  await expect(results).toHaveCount(0);
});
