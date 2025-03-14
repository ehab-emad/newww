import * as React from "react";

const styles = {
  paymentFilter: {
    justifyContent: 'end',
    alignSelf: 'stretch',
    borderRadius: '16px',
    background: 'var(--White, #fff)',
    display: 'flex',
    gap: '24px',
    color: 'var(--Paragraph, #736e67)',
    textAlign: 'right',
    flexWrap: 'wrap',
    padding: '8px 16px',
    font: '400 14px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif',
  },
  approvalDate: {
    flex: 1,
  },
  creationDate: {
    flex: 1,
  },
  amount: {
    flex: 1,
    whiteSpace: 'nowrap',
  },
  transactionStatus: {
    flex: 1,
  },
  clientName: {
    width: '180px',
  },
  requestNumber: {
    width: '116px',
    padding: '0 4px',
  },
  mediaQueries: {
    '@media (max-width: 991px)': {
      amount: {
        whiteSpace: 'initial',
      },
    },
  },
};

const filterItems = [
  { id: 'approval-date', label: 'تاريخ الموافقة', className: styles.approvalDate },
  { id: 'creation-date', label: 'تاريخ الإنشاء', className: styles.creationDate },
  { id: 'amount', label: 'المبلغ', className: styles.amount },
  { id: 'transaction-status', label: 'حالة المعاملة', className: styles.transactionStatus },
  { id: 'client-name', label: 'اسم العميل', className: styles.clientName },
  { id: 'request-number', label: 'رقم الطلب', className: styles.requestNumber },
];

function BankTransferHeader() {
  return (
    <div style={styles.paymentFilter} role="navigation" aria-label="Payment filters">
      {filterItems.map(item => (
        <div
          key={item.id}
          style={item.className}
          tabIndex="0"
          role="button"
          aria-label={item.label}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default BankTransferHeader;