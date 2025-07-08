const fs = require('fs');

/**
 * Checks for the presence of various lock files and ensures only NPM (`package-lock.json`) is used.
 *
 * @returns {Object} An object containing a boolean `invalid` indicating if an invalid lock file is found,
 * and a string `error` with the corresponding error message.
 * @throws {Error} If an invalid lock file is found.
 */
function checkLockFiles() {
  if (fs.existsSync('pnpm-lock.yaml')) {
    throw new Error(
      'Invalid occurrence of "pnpm-lock.yaml" file. Please remove it and use only "package-lock.json"',
    );
  } else if (fs.existsSync('bun.lockb')) {
    throw new Error(
      'Invalid occurrence of "bun.lockb" file. Please remove it and use only "package-lock.json"',
    );
  } else if (fs.existsSync('yarn.lock')) {
    throw new Error(
      'Invalid occurrence of "yarn.lock" file. Please remove it and use only "package-lock.json"',
    );
  } else if (!fs.existsSync('package-lock.json')) {
    throw new Error(
      'Missing "package-lock.json" file. Please run "npm install" to generate it',
    );
  }
  return { invalid: false, error: null };
}

// biome-ignore lint/suspicious/noConsoleLog: feedback
console.log('🔒🔒🔒 Validating lock file 🔒🔒🔒\n');

try {
  checkLockFiles();
  // biome-ignore lint/suspicious/noConsoleLog: feedback
  console.log('Lock file is valid 👍');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
