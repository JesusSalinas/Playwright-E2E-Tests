import { test, expect } from '../../fixtures/pm.fixture';
import { TODO_ITEMS } from '../../data/test-data';
import { APP_BASE_URL } from '../../config/env';

test.beforeEach(async ({ pm }) => {
  await pm.todoPage.navigateTo(APP_BASE_URL);
});

test.describe('New Todo', { tag: '@smoke' }, () => {
  test('should allow me to add todo items', async ({ pm }) => {
    await pm.todoPage.addTodoItem(TODO_ITEMS[0]);
    await expect(await pm.todoPage.getTodoLabel(0)).toHaveText(TODO_ITEMS[0]);

    await pm.todoPage.addTodoItem(TODO_ITEMS[1]);
    await expect(await pm.todoPage.getTodoLabels()).toHaveText([TODO_ITEMS[0], TODO_ITEMS[1]]);

    //await checkNumberOfTodosInLocalStorage(page, 2);
  });

  test('should clear text input field when an item is added', async ({ pm }) => {
    await pm.todoPage.addTodoItem(TODO_ITEMS[0]);
    await expect(await pm.todoPage.getNewTodoInput()).toHaveValue('');
  });

  test('should append new items to the bottom of the list', async ({ pm }) => {
    await pm.todoPage.addDefaultTodos();
    await expect(await pm.todoPage.getTodoCount()).toBe('3 items left');
    await expect(await pm.todoPage.getTodoLabels()).toHaveText(TODO_ITEMS);
  });

  test('should show #main and #footer when items added', { tag: '@ci_gh' }, async ({ pm }) => {
    await pm.todoPage.addTodoItem(TODO_ITEMS[0]);
    await expect(await pm.todoPage.getMainSection()).toBeVisible();
    await expect(await pm.todoPage.getFooter()).toBeVisible();
  });
});

test.describe('Mark all as completed', () => {
  test.beforeEach(async ({ pm }) => {
    await pm.todoPage.addDefaultTodos();
  });

  test('should allow me to mark all items as completed', async ({ pm }) => {
    await pm.todoPage.markAllAsCompleted();
    const todos = await pm.todoPage.getTodos();
    const count = await todos.count();
    for (let i = 0; i < count; i++) {
      await expect(todos.nth(i)).toHaveClass(/completed/);
    }
  });

  test('should allow me to clear the complete state of all items', async ({ pm }) => {
    await pm.todoPage.markAllAsCompleted();
    await pm.todoPage.clearCompleted();
    const todos = await pm.todoPage.getTodos();
    const count = await todos.count();
    for (let i = 0; i < count; i++) {
      await expect(todos.nth(i)).not.toHaveClass(/completed/);
    }
  });
});

test.describe('Clear completed', () => {
  test.beforeEach(async ({ pm }) => {
    await pm.todoPage.addDefaultTodos();
    await pm.todoPage.markAllAsCompleted();
  });

  test('should allow me to clear completed items', async ({ pm }) => {
    await pm.todoPage.clearCompleted();
    await expect(await pm.todoPage.getTodoCount()).toBe('0 items left');
    const todos = await pm.todoPage.getTodos();
    expect(await todos.count()).toBe(0);
  });
});
