const fs = require('fs');

/**
 * Checks for the presence of various lock files and ensures only NPM (`package-lock.json`) is used.
 *
 * @returns {Object} An object containing a boolean `invalid` indicating if an invalid lock file is found,
 * and a string `error` with the corresponding error message.
 */
function checkLockFiles() {
  let error = '';

  if (fs.existsSync('pnpm-lock.yaml')) {
    error =
      'Invalid occurrence of "pnpm-lock.yaml" file. Please remove it and use only "package-lock.json"';
  } else if (fs.existsSync('bun.lockb')) {
    error =
      'Invalid occurrence of "bun.lockb" file. Please remove it and use only "package-lock.json"';
  } else if (fs.existsSync('yarn.lock')) {
    error =
      'Invalid occurrence of "yarn.lock" file. Please remove it and use only "package-lock.json"';
  } else if (!fs.existsSync('package-lock.json')) {
    error = 'Missing "package-lock.json" file. Please run "npm install" to generate it';
  }

  return { invalid: !!error.length, error };
}

// biome-ignore lint/suspicious/noConsoleLog: feedback
console.log('🔒🔒🔒 Validating lock file 🔒🔒🔒\n');
const { invalid, error } = checkLockFiles();

if (invalid) {
  console.error(error);
  process.exit(1);
} else {
  // biome-ignore lint/suspicious/noConsoleLog: feedback
  console.log('Lock file is valid 👍');
  process.exit(0);
}
