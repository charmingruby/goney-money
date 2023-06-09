import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Software development</td>
              <td>
                <PriceHighlight variant="income">R$ 1.200,00</PriceHighlight>
              </td>
              <td>Courses</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Software development</td>
              <td>
                <PriceHighlight variant="income">R$ 1.200,00</PriceHighlight>
              </td>
              <td>Courses</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Software development</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.200,00</PriceHighlight>
              </td>
              <td>Courses</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}
