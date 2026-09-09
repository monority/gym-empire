import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const criticalRoutes = [
  "/",
  "/en/",
  "/login/",
  "/en/login/",
  "/sessions/create/",
  "/en/sessions/create/",
  "/sessions/quick/",
  "/en/sessions/quick/",
  "/progression/",
  "/en/progression/",
  "/settings/",
  "/en/settings/",
];

const failures = [];

for (const route of criticalRoutes) {
  const file = join(dist, route, "index.html");
  if (!existsSync(file)) {
    failures.push(`${route}: missing index.html`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  if (!/<html\b/i.test(html)) failures.push(`${route}: missing html root`);
  if (!/<title>[^<]+<\/title>/i.test(html)) failures.push(`${route}: missing title`);
}

const serviceWorker = join(dist, "sw.js");
if (!existsSync(serviceWorker)) failures.push("/sw.js: missing service worker");

if (failures.length > 0) {
  console.error("Route smoke test failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Route smoke test passed (${criticalRoutes.length} routes + service worker).`);
}
