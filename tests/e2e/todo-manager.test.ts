import { expect, test } from '../fixtures';

const tasks: string[] = ['do not touch', 'complete me', 'filler task'];

test.describe('Feature: Todo Manager', () => {
  test('Scenario: Add an item to the todo list', async ({ todoManagerPage }) => {
    // Given the user is on the todo manager page
    await todoManagerPage.goto();

    // When the user add "test" to the todo list using the input field
    await todoManagerPage.addTask('test');

    // The the card "test" should be displayed in the todo list
    const taskLocator = await todoManagerPage.getTaskLocator('test');
    await expect(taskLocator).toBeVisible();
  });

  test('Scenario: Mark an existing task item as completed', async ({ todoManagerPage }) => {
    // Given the user is on the todo manager page
    await todoManagerPage.goto();

    // And the page contains the following tasks:
    // - do not touch
    // - complete me
    // - filler task
    for (const task of tasks) {
      await todoManagerPage.addTask(task);
    }

    // When the user marks "complete me" as completed
    await todoManagerPage.toggleTask('complete me');

    // Then the the task labeled "complete me" should be displayed as completed
    let checkbox = await todoManagerPage.getTaskCheckbox('complete me', true);
    await expect(checkbox).toBeChecked();

    // And the the task labeled "do not touch" should not be displayed as completed
    checkbox = await todoManagerPage.getTaskCheckbox('do not touch', false);
    await expect(checkbox).not.toBeChecked();

    // And the the task labeled "filler task" should not be displayed as completed
    checkbox = await todoManagerPage.getTaskCheckbox('filler task', false);
    await expect(checkbox).not.toBeChecked();
  });

  test.skip('Scenario: Delete an existing task', async ({ todoManagerPage }) => {
    // Given the user is on the todo manager page
    await todoManagerPage.goto();

    // And the page contains the following tasks:
    // - do not touch
    // - complete me
    // - filler task
    for (const task of tasks) {
      await todoManagerPage.addTask(task);
    }

    // When the user clicks the delete button for the task labeled "filler task"
    const deleteButton = await todoManagerPage.getTaskDeleteButton('filler task');
    await deleteButton.click();

    // Then card "filler task" should be removed from the todo list
    let taskLocator = await todoManagerPage.getTaskLocator('filler task');
    await expect(taskLocator).not.toBeVisible();

    // And card "do not touch" should be displayed in the todo list
    taskLocator = await todoManagerPage.getTaskLocator('do not touch');
    await expect(taskLocator).toBeVisible();

    // And card "complete me" should be displayed in the todo list
    taskLocator = await todoManagerPage.getTaskLocator('complete me');
    await expect(taskLocator).toBeVisible();
  });
});
