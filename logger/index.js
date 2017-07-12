/**
 * Created by xiaobxia on 2017/7/12.
 */
//https://www.npmjs.com/package/chalk
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
console.log(chalk.keyword('orange')('Yay for orange colored text!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

const miles = 18;
console.log(chalk`There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${miles} feet}.
`);
console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
console.log(chalk`{bold.rgb(10,100,200) Hello!}`);