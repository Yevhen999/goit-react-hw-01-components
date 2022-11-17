import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHeaderRow,
  HeaderItem,
  TableMainRow,
  TableMainItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <TableHeaderRow>
          <HeaderItem>Type</HeaderItem>
          <HeaderItem>Amount</HeaderItem>
          <HeaderItem>Currency</HeaderItem>
        </TableHeaderRow>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <TableMainRow key={item.id}>
              <TableMainItem>{item.type}</TableMainItem>
              <TableMainItem>{item.amount}</TableMainItem>
              <TableMainItem>{item.currency}</TableMainItem>
            </TableMainRow>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
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
