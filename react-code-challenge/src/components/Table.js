export default function Table({filteredTransactions, onDelete}){

return(
    <>
      <table id='mytable'>
        <tbody>
          <tr className='rows'>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Delete Transaction</th>
          </tr>
          {filteredTransactions.map(transaction => (
            <tr className='rows' key={transaction.id}>
              <th>{transaction.date}</th>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button id='btn' onClick={() => onDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
)
}