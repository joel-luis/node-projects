import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'

import { checkAccount } from './checkAccount'
import { getAccount } from './getAccount'
import { operation } from './operation'

export function transfer() {
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
        return transfer()
      }
      transferToAnotherAccount(accountName)
    })
    .catch((error) => console.log(chalk.red(error.message)))
}

function transferToAnotherAccount(accountName) {
  const accountData = getAccount(accountName)

  inquirer
    .prompt([
      {
        name: 'amount',
        message: 'Qual o valor que deseja tranferir?',
      },
    ])
    .then((answer) => {
      const amount = answer.amount

      if (!amount || amount <= 0) {
        console.log(chalk.bgRed.black('Por favor, insira um valor válido.'))
        return transferToAnotherAccount(accountName)
      }

      if (accountData.balance < amount) {
        console.log(
          chalk.bgRed.black('Saldo insuficiente para a transferência.'),
        )
        return transferToAnotherAccount(accountName)
      }

      transferToSelectedAccount(accountName, accountData, amount)
    })
    .catch((error) => console.log(chalk.red(error.message)))
}

function transferToSelectedAccount(
  senderAccountName,
  senderAccountData,
  amount,
) {
  inquirer
    .prompt([
      {
        name: 'receiverAccountName',
        message: 'Para qual conta deseja efetuar a transferência?',
      },
    ])
    .then((answer) => {
      const receiverAccountName = answer.receiverAccountName
      const receiverAccountData = getAccount(receiverAccountName)

      if (!checkAccount(receiverAccountName)) {
        console.log(
          chalk.bgRed.black(
            'Conta de destino não encontrada. Por favor, tente novamente.',
          ),
        )
        return transferToAnotherAccount(senderAccountName)
      }
      if (receiverAccountName === senderAccountName) {
        console.log(
          chalk.bgRed.black('Você não pode transferir para a mesma conta.'),
        )
        return transferToAnotherAccount(senderAccountName)
      }

      senderAccountData.balance =
        parseFloat(senderAccountData.balance) - parseFloat(amount)
      receiverAccountData.balance =
        parseFloat(receiverAccountData.balance) + parseFloat(amount)

      fs.writeFileSync(
        `accounts/${senderAccountName}.json`,
        JSON.stringify(senderAccountData),
        (error) => {
          console.log(chalk.red(error.message))
        },
      )

      fs.writeFileSync(
        `accounts/${receiverAccountName}.json`,
        JSON.stringify(receiverAccountData),
        (error) => {
          console.log(chalk.red(error.message))
        },
      )
      console.log(
        chalk.green(
          `Transferência de ${amount} realizada com sucesso para a conta "${receiverAccountName}".`,
        ),
      )
      operation()
    })
    .catch((error) => console.log(chalk.red(error.message)))
}
