import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'

import { operation } from './operation'

export function createAccount() {
  console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))
  buildAccount()
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: 'accountName',
        message: 'Digite um nome para sua conta',
      },
    ])
    .then((answers) => {
      const accountName = answers.accountName
      console.info(accountName)

      if (!fs.existsSync('accounts')) {
        fs.mkdirSync('accounts')
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black('Esta conta já existe, escolha outro nome'),
        )
        buildAccount()
      } else {
        fs.writeFileSync(
          `accounts/${accountName}.json`,
          '{"balance": 0}',
          (error) => {
            console.log(chalk.red(error.message))
          },
        )
        console.log(chalk.green('Parabéns, a sua conta foi criada!'))
        operation()
      }
    })
    .catch((error) => console.log(chalk.bgRed(error.message)))
}
