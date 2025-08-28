import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { TODO_ITEMS } from '../fixtures/test-data';

export class TodoPage extends BasePage {
    private readonly newTodoInput: string;
    private readonly todoList: string;
    private readonly clearCompletedButton: string;
    private readonly todoItems: string;
    private readonly mainSection: string;
    private readonly footer: string;
    private readonly todoCount: string;
    private readonly toggleAll: string;

    constructor(page: Page) {
        super(page);
        this.newTodoInput = '.new-todo';
        this.todoList = '.todo-list';
        this.clearCompletedButton = '.clear-completed';
        this.todoItems = '.todo-list li';
        this.mainSection = '.main';
        this.footer = '.footer';
        this.toggleAll = '.toggle-all';
        this.todoCount = '.todo-count';
    }

    async addTodoItem(item: string): Promise<void> {
        await this.page.fill(this.newTodoInput, item);
        await this.page.press(this.newTodoInput, 'Enter');
    }

    async getTodos(): Promise<Locator> {
        return this.page.locator(this.todoItems);
    }

    async clearCompleted(): Promise<void> {
        await this.page.click(this.clearCompletedButton);
    }

    async addDefaultTodos(): Promise<void> {
        for (const item of TODO_ITEMS) {
            await this.addTodoItem(item);
        }
    }

    async getTodoCount(): Promise<Locator> {
        return this.page.locator(this.todoCount);
    }

    async getMainSection(): Promise<Locator> {
        return this.page.locator(this.mainSection);
    }

    async getFooter(): Promise<Locator> {
        return this.page.locator(this.footer);
    }

    async markAllAsCompleted(): Promise<void> {
        await this.click(this.toggleAll);
    }

    async getNewTodoInput(): Promise<Locator> {
        return this.page.locator(this.newTodoInput);
    }

    async getTodoLabel(index: number): Promise<Locator> {
        return this.page.locator(this.todoItems).nth(index).locator('label');
    }

    async getTodoLabels(): Promise<Locator> {
        return this.page.locator(`${this.todoItems} label`);
    }
}