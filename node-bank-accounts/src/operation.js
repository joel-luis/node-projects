import inquirer from 'inquirer'
import { handleAction } from './actions'

export function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Criar Conta',
          'Consultar Saldo',
          'Depositar',
          'Sacar',
          'Transferir',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      const action = answer.action
      handleAction[action]()
    })
    .catch((error) => console.log(error.message))
}
