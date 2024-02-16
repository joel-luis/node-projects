import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'

import { checkAccount } from './checkAccount'
import { operation } from './operation'
import { getAccount } from './getAccount'

export function deposit() {
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
        return deposit()
      }
      addAmount(accountName)
    })
    .catch((error) => console.log(chalk.red(error.message)))
}

function addAmount(accountName) {
  const accountData = getAccount(accountName)

  inquirer
    .prompt([
      {
        name: 'amount',
        message: 'Quanto você deseja depositar?',
      },
    ])
    .then((answer) => {
      const amount = answer.amount

      if (!amount) {
        console.log(
          chalk.bgRed.black('Ocorreu algum erro, tente novamente mais tarde!'),
        )
        return deposit()
      }

      accountData.balance = parseFloat(accountData.balance) + parseFloat(amount)

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (error) => {
          console.log(chalk.red(error.message))
        },
      )

      console.log(
        chalk.green(`Foi depositado o valor de ${amount} na sua conta`),
      )
      operation()
    })
    .catch((error) => console.log(chalk.red(error.message)))
}
