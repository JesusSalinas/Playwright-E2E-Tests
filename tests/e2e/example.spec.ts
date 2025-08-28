import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { TODO_ITEMS } from '../fixtures/test-data';

let todoPage: TodoPage;

test.beforeEach(async ({ page }) => {
  todoPage = new TodoPage(page);
  await todoPage.navigateTo('https://demo.playwright.dev/todomvc');
});

test.describe('New Todo',{ tag: '@smoke' }, () => {
  test('should allow me to add todo items', async () => {
    await todoPage.addTodoItem(TODO_ITEMS[0]);
    await expect(await todoPage.getTodoLabel(0)).toHaveText(TODO_ITEMS[0]);

    await todoPage.addTodoItem(TODO_ITEMS[1]);
    await expect(await todoPage.getTodoLabels()).toHaveText([TODO_ITEMS[0], TODO_ITEMS[1]]);

    //await checkNumberOfTodosInLocalStorage(page, 2);
  });

  test('should clear text input field when an item is added', async () => {
    await todoPage.addTodoItem(TODO_ITEMS[0]);
    await expect(await todoPage.getNewTodoInput()).toHaveValue('');
  });

  test('should append new items to the bottom of the list', async () => {
    await todoPage.addDefaultTodos();
    await expect(await todoPage.getTodoCount()).toBe('3 items left');
    await expect(await todoPage.getTodoLabels()).toHaveText(TODO_ITEMS);
  });

  test('should show #main and #footer when items added', { tag: '@ci_gh' }, async () => {
    await todoPage.addTodoItem(TODO_ITEMS[0]);
    await expect(await todoPage.getMainSection()).toBeVisible();
    await expect(await todoPage.getFooter()).toBeVisible();
  });
});

test.describe('Mark all as completed', () => {
  test.beforeEach(async () => {
    await todoPage.addDefaultTodos();
  });

  test('should allow me to mark all items as completed', async () => {
    await todoPage.markAllAsCompleted();
    const todos = await todoPage.getTodos();
    const count = await todos.count();
    for (let i = 0; i < count; i++) {
      await expect(todos.nth(i)).toHaveClass(/completed/);
    }
  });

  test('should allow me to clear the complete state of all items', async () => {
    await todoPage.markAllAsCompleted();
    await todoPage.clearCompleted();
    const todos = await todoPage.getTodos();
    const count = await todos.count();
    for (let i = 0; i < count; i++) {
      await expect(todos.nth(i)).not.toHaveClass(/completed/);
    }
  });
});

test.describe('Clear completed', () => {
  test.beforeEach(async () => {
    await todoPage.addDefaultTodos();
    await todoPage.markAllAsCompleted();
  });

  test('should allow me to clear completed items', async () => {
    await todoPage.clearCompleted();
    await expect(await todoPage.getTodoCount()).toBe('0 items left');
    const todos = await todoPage.getTodos();
    expect(await todos.count()).toBe(0);
  });
});
