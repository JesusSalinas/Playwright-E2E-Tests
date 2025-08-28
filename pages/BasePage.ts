import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForSelector(selector: string): Promise<void> {
        await this.page.waitForSelector(selector);
    }

    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fill(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }

    async getText(selector: string): Promise<string | null> {
        return await this.page.textContent(selector);
    }
}