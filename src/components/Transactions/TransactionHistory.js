import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  const headNamesArray = [
    Object.keys(items[0])[1].charAt(0).toUpperCase() +
      Object.keys(items[0])[1].slice(1),
    Object.keys(items[0])[2].charAt(0).toUpperCase() +
      Object.keys(items[0])[2].slice(1),
    Object.keys(items[0])[3].charAt(0).toUpperCase() +
      Object.keys(items[0])[3].slice(1),
  ];
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableHead}>
        <tr>
          {headNamesArray.map(item => (
            <th key={item} className={s.headCell}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {items.map(item => (
          <tr key={item.id} className={s.tableRaw}>
            <td
              className={[
                s.bodyCell,
                item.type === 'invoice' && s.bodyCellInvoice,
                item.type === 'payment' && s.bodyCellPayment,
                item.type === 'withdrawal' && s.bodyCellWithdrawal,
                item.type === 'deposit' && s.bodyCellDeposit,
              ]
                .filter(e => !!e)
                .join(' ')}
            >
              {item.type}
            </td>
            <td className={s.bodyCell}>{item.amount}</td>
            <td className={s.bodyCell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
