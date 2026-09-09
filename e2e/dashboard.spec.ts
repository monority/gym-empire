import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.clear();
    localStorage.setItem(
      "muscu-auth",
      JSON.stringify({ email: "qa@gymempire.test", name: "QA" }),
    );
  });
});

test("dashboard exposes a useful first-run state", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /bienvenue|welcome/i })).toBeVisible();
  await expect(
    page.getByRole("link", { name: /créer ma première séance|create your first session/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /voir les exercices|browse exercises/i }),
  ).toBeVisible();
});
