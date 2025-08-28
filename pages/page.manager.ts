import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TodoPage } from './todo.page';

export class PageManager {
  readonly basePage: BasePage;
  readonly todoPage: TodoPage;

  constructor(public readonly page: Page) {
    this.basePage = new BasePage(page);
    this.todoPage = new TodoPage(page);
  }
}
