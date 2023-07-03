// console.log("Package.json");
// import chalk from 'chalk';
const chalk = require('chalk');
const colors = require('colors');
console.log("hello".red);
// Node js is single threaded
console.log(chalk.blue('This is a blue message'));
console.log(chalk.red.bold('This is a bold red message'));
console.log(chalk.green.inverse('This is a green message with inverse background'));
