import {BrowserContext, Locator, TestInfo, Page, expect } from '@playwright/test';

export class Homepage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly Navigation: Locator;
    readonly HeroBanner: Locator;
    readonly Filters: Locator;
    readonly ItemContainer: Locator;
    readonly Pagination: Locator;
    readonly Footer: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.Navigation = page.locator(`.navbar`);
        this.HeroBanner = page.locator(`.lead`);
        this.Filters = page.locator("[id='filters']");
        this.ItemContainer = page.getByPlaceholder('/html/body/app-root/div/app-overview/div[3]/div[2]');
        this.Pagination = page.locator('.pagination');
        this.Footer = page.locator('/html/body/app-root/app-footer');
    }

    async navigateToHomepage(): Promise<void> {
            await this.page.goto("https://practicesoftwaretesting.com/#/");
    }

    async verifyNavigationVisibility(): Promise<void> {
            await expect(this.Navigation).toBeVisible();
    }

    async verifyHeroVisibility(): Promise<void> {
                await expect(this.HeroBanner).toBeVisible();
    }

    async verifyFiltersVisibility(): Promise<void> {
                await expect(this.Filters).toBeVisible();
    }
}