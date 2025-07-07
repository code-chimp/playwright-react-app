/**
 * Custom Playwright fixtures for the project.
 *
 * - Collects JavaScript code coverage using Playwright's coverage API and v8-to-istanbul.
 * - Provides a TodoManagerPage page object for use in tests.
 *
 * Import `test` and `expect` from this file in your Playwright tests to access the custom fixtures and assertions.
 *
 * @module fixtures
 */
import { type Page, test as base } from '@playwright/test';
import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import v8ToIstanbul from 'v8-to-istanbul';
import { TodoManagerPage } from './page-objects/todo-manager.page';

/**
 * Directory where Istanbul-format coverage JSON files are written.
 */
const coverageDir = path.join(process.cwd(), '.nyc_output');
/**
 * Determines if the tests are running in an end-to-end (E2E) environment.
 * This is controlled by the E2E environment variable.
 *
 * NOTE: Turning this on against live running instances of the Todo Manager
 *       will likely cause your tests to fail due to the way Angular CLI
 *       produces source maps.
 */
const captureCoverage = !!process.env['COVR'];

/**
 * Custom fixtures available to Playwright tests.
 */
type CustomFixture = {
  forEachTest: void;
  todoManagerPage: TodoManagerPage;
};

/**
 * Playwright test object extended with custom fixtures:
 * - Collects JS coverage for each test and writes it in Istanbul format.
 * - Provides a TodoManagerPage instance for E2E tests.
 */
export const test = base.extend<CustomFixture>({
  /**
   * Starts and stops JS coverage for each test, saving results to .nyc_output.
   * @param {Page} param0
   * @param {Function} use
   */
  page: [
    async ({ page }: { page: Page }, use: Function) => {
      if (captureCoverage) {
        await page.coverage.startJSCoverage({ reportAnonymousScripts: false });
      }

      await use(page);

      if (captureCoverage) {
        const coverage = await page.coverage.stopJSCoverage();
        await fs.promises.mkdir(coverageDir, { recursive: true });

        for (const entry of coverage) {
          const converter = v8ToIstanbul('', 0, {
            source: entry.source!,
          });
          await converter.load();
          converter.applyCoverage(entry.functions);
          fs.writeFileSync(
            path.join(
              coverageDir,
              `playwright_coverage_${crypto.randomBytes(16).toString('hex')}.json`,
            ),
            JSON.stringify(converter.toIstanbul(), null, 2),
          );
        }
      }
    },
    { scope: 'test' },
  ],
  /**
   * Provides a TodoManagerPage instance for use in tests.
   * @param {Page} param0
   * @param {Function} use
   */
  todoManagerPage: async ({ page }, use) => {
    await use(new TodoManagerPage(page));
  },
});

/**
 * Assertion object for use in Playwright tests.
 * @see https://playwright.dev/docs/test-assertions
 */
export const expect = test.expect;
