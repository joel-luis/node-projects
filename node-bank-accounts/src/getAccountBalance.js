import chalk from 'chalk'
import inquirer from 'inquirer'
import { checkAccount } from './checkAccount'
import { getAccount } from './getAccount'
import { operation } from './operation'

export function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
      },
    ])
    .then((answer) => {
      const accountName = answer.accountName
      if (!checkAccount(accountName)) {
        return getAccountBalance()
      }
      const accountData = getAccount(accountName)
      console.log(
        chalk.bgBlue.black(
          `Olá, o saldo da sua conta é de R$ ${accountData.balance}`,
        ),
      )
      operation()
    })
    .catch((error) => console.log(chalk.red(error.message)))
}
