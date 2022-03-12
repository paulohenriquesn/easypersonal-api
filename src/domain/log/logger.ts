/* eslint-disable @typescript-eslint/no-var-requires */

import chalk from 'chalk';

class ServicesLogger {
  error(message: string) {
    console.log(
      chalk.red(`[ERROR] [${new Date().toLocaleTimeString()}]: `) +
        chalk.yellow(message),
    );
  }

  success(message: string) {
    console.log(
      chalk.green(`[SUCCESS] [${new Date().toLocaleTimeString()}]: `) +
        chalk.yellow(message),
    );
  }

  info(message: string) {
    console.log(
      chalk.blue(`[INFO] [${new Date().toLocaleTimeString()}]: `) +
        chalk.yellow(message),
    );
  }

  stripe(message: string) {
    console.log(
      chalk.blue(`[STRIPE] [${new Date().toLocaleTimeString()}]: `) +
        chalk.yellow(message),
    );
  }

  db(message: string) {
    console.log(
      chalk.white(`[DATABASE] [${new Date().toLocaleTimeString()}]: `) +
        chalk.yellow(message),
    );
  }
}
export default new ServicesLogger();
