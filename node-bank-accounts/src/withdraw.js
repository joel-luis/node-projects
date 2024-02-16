import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'

import { checkAccount } from './checkAccount'
import { operation } from './operation'
import { getAccount } from './getAccount'

export function withdraw() {
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
        return withdraw()
      }
      removeAmount(accountName)
    })
    .catch((error) => console.log(chalk.red(error.message)))
}

function removeAmount(accountName) {
  const accountData = getAccount(accountName)

  inquirer
    .prompt([
      {
        name: 'amount',
        message: 'Quanto você deseja sacar?',
      },
    ])
    .then((answer) => {
      const amount = answer.amount

      if (!amount) {
        console.log(
          chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'),
        )
        return withdraw()
      }

      if (accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return withdraw()
      }

      accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (error) => {
          console.log(chalk.red(error.message))
        },
      )

      console.log(
        chalk.green(`Foi realizado um saque de ${amount} da sua conta`),
      )
      operation()
    })
    .catch((error) => console.log(chalk.red(error)))
}
