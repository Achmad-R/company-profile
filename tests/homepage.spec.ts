import { expect, test } from "@playwright/test";
import {
  aboutContent,
  anchorTargets,
  capabilitiesContent,
  careersContent,
  conceptConfig,
  contactContent,
  footerContent,
  headerContent,
  heroContent,
  navigationLinks,
  processContent,
  talentContent,
  whyContent,
  workContent,
} from "../src/content/site-content";

test("homepage baseline loads", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    heroContent.heading,
  );
});

test("homepage loads without failed resources or console errors", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const failedResources: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("response", (response) => {
    if (response.status() >= 400) {
      failedResources.push(`${response.status()} ${response.url()}`);
    }
  });
  page.on("requestfailed", (request) => {
    failedResources.push(
      `FAILED ${request.url()}: ${request.failure()?.errorText ?? "unknown error"}`,
    );
  });

  await page.goto("/");
  await page.waitForLoadState("networkidle");

  expect(failedResources).toEqual([]);
  expect(consoleErrors).toEqual([]);
});

test("the page declares a loadable browser icon", async ({ page }) => {
  await page.goto("/");

  const icon = page.locator('link[rel~="icon"]');
  await expect(icon).toHaveCount(1);
  const href = await icon.getAttribute("href");
  expect(href).not.toBeNull();

  const response = await page.request.get(href!);

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("image/");
});

test("homepage declares a loadable fictional-concept Open Graph image", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
  const image = page.locator('meta[property="og:image"]');
  await expect(image).toHaveCount(1);
  await expect(page.locator('meta[property="og:image:type"]')).toHaveAttribute(
    "content",
    "image/png",
  );
  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
    "content",
    "1200",
  );
  await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute(
    "content",
    "630",
  );
  await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute(
    "content",
    "STRATALYN / SYSTEMS — Fictional portfolio concept",
  );

  const href = await image.getAttribute("content");
  expect(href).not.toBeNull();
  const declaredUrl = new URL(href!, page.url());
  const response = await page.request.get(
    `${new URL(page.url()).origin}${declaredUrl.pathname}${declaredUrl.search}`,
  );

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("image/png");
});

test("concept disclosures are visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText(conceptConfig.conceptLabel)).toBeVisible();
  await expect(page.getByText(conceptConfig.footerDisclosure)).toBeVisible();
});

test("skip link moves focus to main content", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("robots metadata disables indexing and no JSON-LD is rendered", async ({
  page,
}) => {
  await page.goto("/");

  const robots = await page
    .locator('meta[name="robots"]')
    .getAttribute("content");
  expect(robots).toContain("noindex");
  expect(robots).toContain("nofollow");
  expect(robots).toContain("noarchive");
  await expect(
    page.locator('script[type="application/ld+json"]'),
  ).toHaveCount(0);
});

test("robots.txt allows crawlers to read the noindex directive", async ({
  request,
}) => {
  const response = await request.get("/robots.txt");

  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain("User-Agent: *");
  expect(body).toContain("Allow: /");
  expect(body).not.toContain("Disallow: /");
  expect(body).not.toContain("Sitemap:");
});

test("demonstration sitemap uses the canonical concept URL", async ({
  request,
}) => {
  const response = await request.get("/sitemap.xml");

  expect(response.status()).toBe(200);
  expect(await response.text()).toContain(
    "<loc>https://stratalyn.example</loc>",
  );
});

test("foundation reflows at 320px without horizontal scrolling", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");

  await expect(page.getByText(conceptConfig.conceptLabel)).toBeVisible();
  await expect(page.getByText(conceptConfig.footerDisclosure)).toBeVisible();
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);
});

test("header and hero expose the navigation and CTA contracts", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const header = page.getByRole("banner");
  await expect(header).toBeVisible();
  await expect(
    header.getByRole("link", { name: /stratalyn systems/i }),
  ).toBeVisible();

  const desktopNav = header.getByRole("navigation", { name: "Primary" });
  await expect(desktopNav).toBeVisible();
  for (const link of navigationLinks) {
    await expect(
      desktopNav.getByRole("link", { name: link.label, exact: true }),
    ).toHaveAttribute("href", link.href);
  }

  await expect(
    header.getByRole("link", {
      name: headerContent.cta.label,
      exact: true,
    }),
  ).toHaveAttribute("href", headerContent.cta.href);
  await expect(
    page.getByRole("button", { name: "Menu", exact: true }),
  ).toBeHidden();

  await expect(page.getByText(heroContent.eyebrow)).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: heroContent.heading }),
  ).toBeVisible();
  await expect(page.getByText(heroContent.supporting)).toBeVisible();
  const heroCtas = page.getByRole("main");
  await expect(
    heroCtas.getByRole("link", {
      name: heroContent.primaryCta.label,
      exact: true,
    }),
  ).toHaveAttribute("href", anchorTargets.careers);
  await expect(
    heroCtas.getByRole("link", {
      name: heroContent.secondaryCta.label,
      exact: true,
    }),
  ).toHaveAttribute("href", anchorTargets.work);
  await expect(page.getByText(heroContent.trustCue)).toBeVisible();
});

test("hero CTAs fit inside common initial viewports", async ({ page }) => {
  const viewports = [
    { width: 320, height: 800 },
    { width: 375, height: 812 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const main = page.getByRole("main");
    const ctas = [
      main.getByRole("link", {
        name: heroContent.primaryCta.label,
        exact: true,
      }),
      main.getByRole("link", {
        name: heroContent.secondaryCta.label,
        exact: true,
      }),
    ];

    for (const cta of ctas) {
      const box = await cta.boundingBox();

      expect(box).not.toBeNull();
      expect
        .soft(
          box!.y + box!.height,
          `${viewport.width}x${viewport.height} CTA bottom edge`,
        )
        .toBeLessThanOrEqual(viewport.height);
    }
  }
});

test("desktop header CTA focuses the Careers heading", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await page
    .getByRole("banner")
    .getByRole("link", { name: headerContent.cta.label, exact: true })
    .click();

  const heading = page.getByRole("heading", {
    level: 2,
    name: careersContent.listHeading,
  });
  await expect(heading).toBeFocused();
  expect(new URL(page.url()).hash).toBe(anchorTargets.careers);
});

test("hero primary CTA focuses the Careers heading", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await page
    .getByRole("main")
    .getByRole("link", { name: heroContent.primaryCta.label, exact: true })
    .click();

  const heading = page.getByRole("heading", {
    level: 2,
    name: careersContent.listHeading,
  });
  await expect(heading).toBeFocused();
  expect(new URL(page.url()).hash).toBe(anchorTargets.careers);
});

test("mobile menu opens, traps focus, and closes with Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  await page.evaluate(() => window.scrollTo(0, 200));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(8);

  const menuButton = page.getByRole("button", { name: "Menu", exact: true });
  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");

  await menuButton.click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect
    .poll(async () => {
      const box = await dialog.boundingBox();
      return (
        box !== null &&
        box.x <= 0 &&
        box.y <= 0 &&
        box.x + box.width >= 375 &&
        box.y + box.height >= 812
      );
    })
    .toBe(true);
  await expect(page.locator("header")).toHaveAttribute("inert", "");

  const closeButton = dialog.getByRole("button", { name: "Close menu" });
  await expect(closeButton).toBeFocused();

  for (const link of navigationLinks) {
    await expect(
      dialog.getByRole("link", { name: link.label, exact: true }),
    ).toHaveAttribute("href", link.href);
  }

  const focusableCount = await dialog.evaluate((root) => {
    const selectors =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return root.querySelectorAll(selectors).length;
  });
  for (let i = 0; i < focusableCount + 1; i += 1) {
    await page.keyboard.press("Tab");
  }
  const trapped = await dialog.evaluate((root) => root.contains(document.activeElement));
  expect(trapped).toBe(true);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toBeFocused();
});

test("mobile menu closes with its close button and returns focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Menu", exact: true });
  await menuButton.click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();

  await dialog.getByRole("button", { name: "Close menu" }).click();
  await expect(dialog).toBeHidden();
  await expect(menuButton).toBeFocused();
});

test("mobile menu closes when a navigation link is selected", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Menu", exact: true });
  await menuButton.click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();

  // This case isolates menu closure; target-heading focus is covered below.
  await dialog
    .getByRole("link", { name: navigationLinks[0].label, exact: true })
    .click();
  await expect(dialog).toBeHidden();
});

test("mobile menu closes when the viewport grows to desktop", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Menu", exact: true });
  await menuButton.click();
  await expect(
    page.getByRole("dialog", { name: "Site navigation" }),
  ).toBeVisible();

  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(
    page.getByRole("dialog", { name: "Site navigation" }),
  ).toBeHidden();
  await expect(menuButton).toBeHidden();

  const visibleFocus = await page.evaluate(() => {
    const active = document.activeElement as HTMLElement | null;
    if (!active || active === document.body) return "body";
    const rect = active.getBoundingClientRect();
    const style = window.getComputedStyle(active);
    const visible =
      rect.width > 0 &&
      rect.height > 0 &&
      style.visibility !== "hidden" &&
      style.display !== "none";
    return visible
      ? (active.getAttribute("aria-label") ??
        active.textContent?.trim().slice(0, 40) ??
        active.tagName)
      : `hidden:${active.tagName}`;
  });
  expect(visibleFocus.startsWith("hidden")).toBe(false);
});

test("hero content stays readable under reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: heroContent.heading }),
  ).toBeVisible();
  await expect(page.getByText(heroContent.supporting)).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("link", {
      name: heroContent.primaryCta.label,
      exact: true,
    }),
  ).toBeVisible();
});

test("About, Capabilities, and Method sections render their content", async ({
  page,
}) => {
  await page.goto("/");

  for (const paragraph of aboutContent.paragraphs) {
    await expect(page.getByText(paragraph)).toBeVisible();
  }
  for (const principle of aboutContent.principles) {
    await expect(
      page.getByRole("heading", {
        level: 3,
        name: principle.title,
        exact: true,
      }),
    ).toBeVisible();
  }
  for (const item of capabilitiesContent.items) {
    await expect(
      page.getByRole("heading", { level: 3, name: item.title, exact: true }),
    ).toBeVisible();
  }
  for (const step of processContent.steps) {
    await expect(
      page.getByRole("heading", { level: 3, name: step.title, exact: true }),
    ).toBeVisible();
  }
});

test("desktop navigation reaches About with offset and heading focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const header = page.getByRole("banner");
  await header
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "About", exact: true })
    .click();

  const heading = page.getByRole("heading", {
    level: 2,
    name: aboutContent.heading,
  });
  await expect(heading).toBeFocused();
  await expect(heading).toBeVisible();
  expect(new URL(page.url()).hash).toBe(anchorTargets.about);

  const headerBottom = await header.evaluate(
    (element) => element.getBoundingClientRect().bottom,
  );
  const headingTop = await heading.evaluate(
    (element) => element.getBoundingClientRect().top,
  );
  expect(headingTop).toBeGreaterThanOrEqual(headerBottom - 2);
});

test("desktop navigation reaches Capabilities with offset and heading focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const header = page.getByRole("banner");
  await header
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Capabilities", exact: true })
    .click();

  const heading = page.getByRole("heading", {
    level: 2,
    name: capabilitiesContent.heading,
  });
  await expect(heading).toBeFocused();
  await expect(heading).toBeVisible();
  expect(new URL(page.url()).hash).toBe(anchorTargets.capabilities);

  const headerBottom = await header.evaluate(
    (element) => element.getBoundingClientRect().bottom,
  );
  const headingTop = await heading.evaluate(
    (element) => element.getBoundingClientRect().top,
  );
  expect(headingTop).toBeGreaterThanOrEqual(headerBottom - 2);
});

test("mobile menu navigates to Capabilities and focuses its heading", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await page.getByRole("button", { name: "Menu", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();

  await dialog
    .getByRole("link", { name: "Capabilities", exact: true })
    .click();
  await expect(dialog).toBeHidden();

  const heading = page.getByRole("heading", {
    level: 2,
    name: capabilitiesContent.heading,
  });
  await expect(heading).toBeFocused();
  await expect(heading).toBeVisible();
});

test("Selected Work renders three concept projects with badges", async ({
  page,
}) => {
  await page.goto("/");

  const work = page.locator("section#work");
  await expect(
    page.getByRole("heading", { level: 2, name: workContent.heading }),
  ).toBeVisible();
  await expect(work.getByText("Concept project")).toHaveCount(3);

  for (const project of workContent.projects) {
    const item = work.locator("article", { hasText: project.title });
    await expect(
      item.getByRole("heading", { level: 3, name: project.title, exact: true }),
    ).toBeVisible();
    await expect(item.getByText(project.domain)).toBeVisible();
    await expect(item.getByText(project.summary)).toBeVisible();
    await expect(item.getByText(project.challenge)).toBeVisible();
    await expect(item.getByText(project.contribution)).toBeVisible();
    await expect(item.getByText(project.conceptOutcome)).toBeVisible();
    for (const technology of project.technologies) {
      await expect(item.getByText(technology, { exact: true })).toBeVisible();
    }
  }

  // No detail routes exist yet, so no project links or dummy targets.
  await expect(work.locator("a")).toHaveCount(0);
  await expect(work.locator('[href="#"]')).toHaveCount(0);
});

test("project visuals reserve consistent space without layout shift", async ({
  page,
}) => {
  await page.goto("/");

  const visuals = page.locator("section#work .project-visual");
  await expect(visuals).toHaveCount(3);
  const ratios = await visuals.evaluateAll((elements) =>
    elements.map(
      (element) => window.getComputedStyle(element).aspectRatio,
    ),
  );
  for (const ratio of ratios) {
    expect(ratio).toBe("16 / 9");
  }
});

test("desktop navigation reaches Work with offset and heading focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const header = page.getByRole("banner");
  await header
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Work", exact: true })
    .click();

  const heading = page.getByRole("heading", {
    level: 2,
    name: workContent.heading,
  });
  await expect(heading).toBeFocused();
  await expect(heading).toBeVisible();
  expect(new URL(page.url()).hash).toBe(anchorTargets.work);

  const headerBottom = await header.evaluate(
    (element) => element.getBoundingClientRect().bottom,
  );
  const headingTop = await heading.evaluate(
    (element) => element.getBoundingClientRect().top,
  );
  expect(headingTop).toBeGreaterThanOrEqual(headerBottom - 2);
});

test("hero secondary CTA focuses the Work heading", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await page
    .getByRole("main")
    .getByRole("link", {
      name: heroContent.secondaryCta.label,
      exact: true,
    })
    .click();

  const heading = page.getByRole("heading", {
    level: 2,
    name: workContent.heading,
  });
  await expect(heading).toBeFocused();
  expect(new URL(page.url()).hash).toBe(anchorTargets.work);
});

test("mobile menu navigates to Work and focuses its heading", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await page.getByRole("button", { name: "Menu", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toBeVisible();

  await dialog.getByRole("link", { name: "Work", exact: true }).click();
  await expect(dialog).toBeHidden();

  const heading = page.getByRole("heading", {
    level: 2,
    name: workContent.heading,
  });
  await expect(heading).toBeFocused();
  await expect(heading).toBeVisible();
});

test("Why Stratalyn and Talent sections render their content", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 2, name: whyContent.heading }),
  ).toBeVisible();
  for (const pillar of whyContent.pillars) {
    await expect(
      page.getByRole("heading", { level: 3, name: pillar.title, exact: true }),
    ).toBeVisible();
    await expect(page.getByText(pillar.copy)).toBeVisible();
  }

  await expect(
    page.getByRole("heading", { level: 2, name: talentContent.heading }),
  ).toBeVisible();
  await expect(page.getByText(talentContent.body)).toBeVisible();
  await expect(page.getByText(talentContent.candidateStatement)).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("link", {
      name: talentContent.cta.label,
      exact: true,
    }),
  ).toHaveAttribute("href", anchorTargets.careers);
});

test("concept roles expand inline with disclosure and no apply action", async ({
  page,
}) => {
  await page.goto("/");

  const careers = page.locator("section#careers");
  await expect(
    page.getByRole("heading", { level: 2, name: careersContent.listHeading }),
  ).toBeVisible();
  await expect(
    careers.getByText(careersContent.roleConceptLabel, { exact: true }),
  ).toHaveCount(3);
  await expect(careers.locator("a")).toHaveCount(0);
  await expect(careers.getByText(/apply/i)).toHaveCount(0);
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);

  for (const role of careersContent.roles) {
    const toggle = careers.getByRole("button", {
      name: `${careersContent.viewLabel}: ${role.title}`,
    });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    const panel = page.locator(`#${await toggle.getAttribute("aria-controls")}`);
    await expect(panel).toBeVisible();
    await expect(panel.getByText(role.discipline)).toBeVisible();
    await expect(panel.getByText(role.location)).toBeVisible();
    await expect(panel.getByText(role.employmentType)).toBeVisible();
    await expect(panel.getByText(role.summary)).toBeVisible();
    await expect(panel.getByText(careersContent.detailClosing)).toBeVisible();
    await expect(toggle).toBeFocused();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(panel).toBeHidden();
  }
});

test("concept role details toggle with the keyboard", async ({ page }) => {
  await page.goto("/");

  const careers = page.locator("section#careers");
  for (const role of careersContent.roles) {
    const toggle = careers.getByRole("button", {
      name: `${careersContent.viewLabel}: ${role.title}`,
    });
    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    const panel = page.locator(`#${await toggle.getAttribute("aria-controls")}`);
    await expect(panel).toBeVisible();
    await expect(panel.getByText(careersContent.detailClosing)).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(panel).toBeHidden();
  }
});

test("contact copy buttons copy the right demo address", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");

  const contact = page.locator("section#contact");
  await expect(contact.getByText(contactContent.projectEmail)).toBeVisible();
  await expect(contact.getByText(contactContent.careersEmail)).toBeVisible();
  await expect(contact.getByText(contactContent.demoNote)).toBeVisible();
  await expect(contact.locator("a")).toHaveCount(0);
  await expect(contact.locator("form")).toHaveCount(0);

  await contact
    .getByRole("button", { name: contactContent.copyProjectDescription })
    .click();
  await expect(contact.getByText(contactContent.copySuccess)).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    contactContent.projectEmail,
  );

  await contact
    .getByRole("button", { name: contactContent.copyCareersDescription })
    .click();
  await expect(contact.getByText(contactContent.copySuccess)).toHaveCount(2);
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    contactContent.careersEmail,
  );
});

test("contact copy failure falls back to manual instructions", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window.navigator, "clipboard", {
      value: {
        writeText: () =>
          Promise.reject(new DOMException("Denied", "NotAllowedError")),
      },
      configurable: true,
    });
  });
  await page.goto("/");

  const contact = page.locator("section#contact");
  await contact
    .getByRole("button", { name: contactContent.copyProjectDescription })
    .click();
  await expect(contact.getByText(contactContent.copyFailure)).toBeVisible();
  await expect(contact.getByText(contactContent.copySuccess)).toHaveCount(0);
});

test("footer exposes navigation, identity, and disclosure", async ({
  page,
}) => {
  await page.goto("/");

  const footer = page.getByRole("contentinfo");
  await expect(footer.getByText("STRATALYN / SYSTEMS")).toBeVisible();
  await expect(
    footer.getByText("Applied AI and software engineering for complex operations."),
  ).toBeVisible();
  for (const link of footerContent.nav) {
    await expect(
      footer.getByRole("link", { name: link.label, exact: true }),
    ).toHaveAttribute("href", link.href);
  }
  await expect(footer.getByText("© 2026 Stratalyn Systems concept.")).toBeVisible();
  await expect(footer.getByText(conceptConfig.footerDisclosure)).toBeVisible();
  await expect(footer.locator('a[href^="http"]')).toHaveCount(0);
});

test("footer navigation reaches Contact with offset and heading focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const footer = page.getByRole("contentinfo");
  await footer.getByRole("link", { name: "Contact", exact: true }).click();

  const heading = page.getByRole("heading", {
    level: 2,
    name: contactContent.heading,
  });
  await expect(heading).toBeFocused();
  await expect(heading).toBeVisible();
  expect(new URL(page.url()).hash).toBe(anchorTargets.contact);

  const header = page.getByRole("banner");
  const headerBottom = await header.evaluate(
    (element) => element.getBoundingClientRect().bottom,
  );
  const headingTop = await heading.evaluate(
    (element) => element.getBoundingClientRect().top,
  );
  expect(headingTop).toBeGreaterThanOrEqual(headerBottom - 2);
});

test("Talent CTA focuses the Careers heading", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await page
    .getByRole("main")
    .getByRole("link", { name: talentContent.cta.label, exact: true })
    .click();

  await expect(
    page.getByRole("heading", { level: 2, name: careersContent.listHeading }),
  ).toBeFocused();
  expect(new URL(page.url()).hash).toBe(anchorTargets.careers);
});

test("section content reveals on scroll and stays put", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const target = page.locator("section#capabilities ol");
  await target.scrollIntoViewIfNeeded();
  await expect
    .poll(async () => target.evaluate((element) => getComputedStyle(element).opacity))
    .toBe("1");
});

test("content is fully visible without scrolling under reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const target = page.locator("section#capabilities ol");
  expect(
    await target.evaluate((element) => getComputedStyle(element).opacity),
  ).toBe("1");
});

test("active navigation follows the visible section", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const primaryNav = page
    .getByRole("banner")
    .getByRole("navigation", { name: "Primary" });
  const workLink = primaryNav.getByRole("link", { name: "Work", exact: true });
  const aboutLink = primaryNav.getByRole("link", {
    name: "About",
    exact: true,
  });
  const capabilitiesLink = primaryNav.getByRole("link", {
    name: "Capabilities",
    exact: true,
  });
  const careersLink = primaryNav.getByRole("link", {
    name: "Careers",
    exact: true,
  });
  await expect(workLink).not.toHaveAttribute("aria-current", "true");

  await page.locator("section#work").scrollIntoViewIfNeeded();
  await expect(workLink).toHaveAttribute("aria-current", "true");
  await expect(aboutLink).not.toHaveAttribute("aria-current", "true");

  await page.locator("section#about").scrollIntoViewIfNeeded();
  await expect(aboutLink).toHaveAttribute("aria-current", "true");
  await expect(workLink).not.toHaveAttribute("aria-current", "true");

  await page.locator("section#capabilities").scrollIntoViewIfNeeded();
  await expect(capabilitiesLink).toHaveAttribute("aria-current", "true");
  await page
    .locator('section[aria-labelledby="method-heading"]')
    .evaluate((section) => section.scrollIntoView({ block: "center" }));
  await expect(capabilitiesLink).toHaveAttribute("aria-current", "true");

  await page
    .locator('section[aria-labelledby="why-heading"]')
    .evaluate((section) => section.scrollIntoView({ block: "center" }));
  await expect.soft(careersLink).toHaveAttribute("aria-current", "true");
  await page
    .locator('section[aria-labelledby="talent-heading"]')
    .evaluate((section) => section.scrollIntoView({ block: "center" }));
  await expect.soft(careersLink).toHaveAttribute("aria-current", "true");
});

test("every header destination resolves to a real section", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  // Careers and Contact close the last Phase 2 navigation dependencies.
  const expectedHeadings: Record<string, string> = {
    About: aboutContent.heading,
    Capabilities: capabilitiesContent.heading,
    Work: workContent.heading,
    Careers: careersContent.listHeading,
    Contact: contactContent.heading,
  };
  const header = page.getByRole("banner");
  for (const link of navigationLinks) {
    await header
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: link.label, exact: true })
      .click();
    await expect(
      page.getByRole("heading", { level: 2, name: expectedHeadings[link.label] }),
    ).toBeFocused();
    expect(new URL(page.url()).hash).toBe(link.href);
  }
});

test("middle sections share one restrained signal rail", async ({ page }) => {
  await page.goto("/");

  const dividers = page.locator("[data-signal-divider]");
  await expect(dividers).toHaveCount(3);
  for (let i = 0; i < 3; i += 1) {
    await expect(dividers.nth(i)).toHaveAttribute("aria-hidden", "true");
    expect(((await dividers.nth(i).textContent()) ?? "").trim()).toBe("");
  }

  await expect(page.locator("[data-heading-node]")).toHaveCount(4);
  for (const id of [
    "about-heading",
    "capabilities-heading",
    "method-heading",
    "why-heading",
  ]) {
    const label = page.locator(`div:has(> #${id}) > p`);
    await expect(label.locator("[data-heading-node]")).toHaveCount(1);
  }
});

test("About principles follow a vertical signal path", async ({ page }) => {
  await page.goto("/");

  const about = page.locator("section#about");
  const path = about.locator("[data-signal-path]");
  await expect(path).toHaveCount(1);
  await expect(path).toHaveAttribute("aria-hidden", "false");
  await expect(path.locator(":scope > li")).toHaveCount(
    aboutContent.principles.length,
  );
  for (const principle of aboutContent.principles) {
    await expect(
      path.getByRole("heading", {
        level: 3,
        name: principle.title,
        exact: true,
      }),
    ).toBeVisible();
    await expect(path.getByText(principle.copy)).toBeVisible();
  }
});

test("Why pillars read as statements without index markers", async ({
  page,
}) => {
  await page.goto("/");

  const why = page.locator("section:has(#why-heading)");
  const items = why.locator("ol > li");
  await expect(items).toHaveCount(whyContent.pillars.length);
  for (let i = 0; i < whyContent.pillars.length; i += 1) {
    const item = items.nth(i);
    await expect(
      item.getByRole("heading", {
        level: 3,
        name: whyContent.pillars[i].title,
        exact: true,
      }),
    ).toBeVisible();
    await expect(item.getByText(whyContent.pillars[i].copy)).toBeVisible();
    await expect(item.locator("span")).toHaveCount(0);
  }
});

test("Talent pairs narrative with a violet statement panel", async ({
  page,
}) => {
  await page.goto("/");

  const talent = page.locator('section[aria-labelledby="talent-heading"]');
  const panel = talent.locator("[data-talent-statement]");
  await expect(panel).toHaveCount(1);
  await expect(panel.getByText(talentContent.candidateStatement)).toBeVisible();
  expect((await panel.getAttribute("class")) ?? "").toContain(
    "signal-violet",
  );

  await expect(
    talent.getByRole("link", { name: talentContent.cta.label, exact: true }),
  ).toHaveAttribute("href", anchorTargets.careers);
});

test("Careers peak carries the violet human language", async ({ page }) => {
  await page.goto("/");

  const careers = page.locator("section#careers");
  const node = careers.locator("[data-careers-node]");
  await expect(node).toHaveCount(1);
  await expect(node).toHaveAttribute("aria-hidden", "true");
  expect((await node.getAttribute("class")) ?? "").toContain("signal-violet");

  const indices = careers.locator("[data-role-index]");
  await expect(indices).toHaveCount(3);
  for (const [i, want] of ["01", "02", "03"].entries()) {
    await expect(indices.nth(i)).toHaveText(want);
    expect((await indices.nth(i).getAttribute("class")) ?? "").toContain(
      "signal-violet",
    );
  }

  const badges = careers.getByText(careersContent.roleConceptLabel, {
    exact: true,
  });
  await expect(badges).toHaveCount(3);
  for (let i = 0; i < 3; i += 1) {
    expect((await badges.nth(i).getAttribute("class")) ?? "").toContain(
      "signal-violet",
    );
  }

  await careers
    .getByRole("button", {
      name: `${careersContent.viewLabel}: ${careersContent.roles[0].title}`,
      exact: true,
    })
    .click();
  const panel = careers.locator("#role-senior-product-engineer");
  await expect(panel).toBeVisible();
  expect((await panel.getAttribute("class")) ?? "").toContain("signal-violet");
  await expect(panel.getByText(careersContent.detailClosing)).toBeVisible();
});
