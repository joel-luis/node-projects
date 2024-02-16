import chalk from 'chalk'
import { createAccount } from './createAccount'
import { deposit } from './deposit'
import { getAccountBalance } from './getAccountBalance'
import { withdraw } from './withdraw'
import { transfer } from './transfer'

export const handleAction = {
  'Criar Conta': createAccount,
  'Consultar Saldo': getAccountBalance,
  Depositar: deposit,
  Sacar: withdraw,
  Transferir: transfer,
  Sair: () => {
    console.log(chalk.bgBlue.black('Obrigado por usar o Accounts'))
    process.exit()
  },
}
