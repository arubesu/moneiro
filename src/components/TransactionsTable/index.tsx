import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td>U$ 15000,00</td>
            <td>Development</td>
            <td>10/01/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Website development</td>
            <td>U$ 15000,00</td>
            <td>Development</td>
            <td>10/01/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Website development</td>
            <td>U$ 15000,00</td>
            <td>Development</td>
            <td>10/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
