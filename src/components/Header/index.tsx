import * as Dialog from '@radix-ui/react-dialog'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NewTransactionButton,
} from './styles'
import logoImage from './../../assets/logo.svg'
import { NewTransactionsModal } from '../NewTransactionsModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src={logoImage} alt="" />
          <span>Goney Money</span>
        </Logo>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
