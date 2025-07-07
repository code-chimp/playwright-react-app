import type { Locator, Page } from '@playwright/test';

/**
 * Represents the Todo Manager page in the application.
 * Provides methods to interact with the page elements and perform actions.
 */
export class TodoManagerPage {
  readonly page: Page;
  readonly taskInput: Locator;
  readonly addButton: Locator;

  /**
   * Initializes a new instance of the TodoManagerPage class.
   * @param page - The Playwright Page object used to interact with the browser.
   */
  constructor(page: Page) {
    this.page = page;
    this.taskInput = page.getByPlaceholder('Add a new task');
    this.addButton = page.getByRole('button', { name: 'Add Task' });
  }

  /**
   * Navigates to the Todo Manager page.
   */
  async goto() {
    await this.page.goto('/');
  }

  /**
   * Adds a new task to the todo list.
   * @param task - The name of the task to add.
   */
  async addTask(task: string) {
    await this.taskInput.fill(task);
    await this.addButton.click();
  }

  /**
   * Marks a task as complete by clicking its associated checkbox.
   * **Note:** This method is brittle as it only works for unchecked checkboxes.
   * Prefer using the `toggleTask` method for better reliability.
   * @param taskName - The name of the task to mark as complete.
   */
  async markTaskComplete(taskName: string) {
    const checkbox = this.page.getByRole('checkbox', {
      name: `Mark ${taskName} as complete`,
    });
    await checkbox.click();
  }

  /**
   * Toggles the completion state of a task by clicking its label.
   * @param taskName - The name of the task to toggle.
   */
  async toggleTask(taskName: string) {
    const taskLabel = await this.getTaskLocator(taskName);
    await taskLabel.click();
  }

  /**
   * Gets the locator for a task by its name.
   * @param task - The name of the task to locate.
   * @returns A Locator object for the task.
   */
  async getTaskLocator(task: string) {
    return this.page.getByText(task, { exact: true });
  }

  /**
   * Gets the checkbox locator for a task based on its completion state.
   * @param taskName - The name of the task.
   * @param completed - Whether the task is completed. Defaults to `false`.
   * @returns A Locator object for the task's checkbox.
   */
  async getTaskCheckbox(taskName: string, completed = false) {
    const name = completed ? `Mark ${taskName} as incomplete` : `Mark ${taskName} as complete`;
    return this.page.getByRole('checkbox', { name });
  }

  /**
   * Gets the delete button for a specific task.
   * @param taskName - The name of the task for which to get the delete button.
   * @returns A Locator object for the delete button of the specified task.
   */
  async getTaskDeleteButton(taskName: string) {
    return this.page.getByRole('button', {
      name: `Delete task: ${taskName}`,
    });
  }
}
