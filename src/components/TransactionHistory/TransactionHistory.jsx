import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.headerRow}>
          <th className={css.headerItems}>Type</th>
          <th className={css.headerItems}>Amount</th>
          <th className={css.headerItems}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr className={css.mainRow} key={item.id}>
              <td className={css.mainItems}>{item.type}</td>
              <td className={css.mainItems}>{item.amount}</td>
              <td className={css.mainItems}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTyes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
