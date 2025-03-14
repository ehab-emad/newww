
const styles = {
  rentalCard: {
    justifyContent: 'end',
    alignSelf: 'stretch',
    borderRadius: '24px',
    background: 'var(--White, #fff)',
    display: 'flex',
    overflow: 'hidden',
    fontFamily: 'Expo Arabic, sans-serif',
    flexWrap: 'wrap',
    padding: '16px',
  },
  actionButtons: {
    display: 'flex',
    minWidth: '240px',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    textAlign: 'center',
    lineHeight: '1',
    justifyContent: 'start',
    margin: 'auto 0',
  },
  actionButton: {
    alignSelf: 'stretch',
    borderRadius: '50px',
    gap: '8px',
    fontWeight: '500',
    margin: 'auto 0',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
  },
  rejectButton: {
    background: 'var(--error-shade, #fae4e4)',
    color: 'rgba(214, 27, 27, 1)',
  },
  approveButton: {
    background: 'var(--Blue, #27989e)',
    color: 'rgba(255, 255, 255, 1)',
    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
  },
  rentalInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '14px',
    textAlign: 'center',
    justifyContent: 'center',
    width: '116px',
    padding: '0 8px',
  },
  rentalLabel: {
    color: 'var(--Paragraph, #736e67)',
    fontWeight: '400',
  },
  rentalValue: {
    color: 'var(--Text, #252422)',
    fontWeight: '500',
    marginTop: '8px',
  },
  productDetails: {
    display: 'flex',
    minWidth: '240px',
    alignItems: 'center',
    gap: '8px',
    justifyContent: 'end',
    flexWrap: 'wrap',
    flex: '1',
    flexBasis: '16px',
    margin: 'auto 0',
  },
  productInfo: {
    alignSelf: 'stretch',
    display: 'flex',
    minWidth: '240px',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'start',
    margin: 'auto 0',
  },
  statusBadge: {
    justifyContent: 'end',
    alignItems: 'center',
    borderRadius: '8px',
    background: 'var(--success-shade, #e1ffc9)',
    display: 'flex',
    gap: '8px',
    fontSize: '12px',
    color: 'var(--avaliable, #10be1b)',
    fontWeight: '500',
    textAlign: 'center',
    padding: '8px',
  },
  statusText: {
    alignSelf: 'stretch',
    margin: 'auto 0',
  },
  statusIcon: {
    aspectRatio: '1',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '16px',
    alignSelf: 'stretch',
    margin: 'auto 0',
  },
  productTitle: {
    color: 'var(--Dark, #09262a)',
    textAlign: 'right',
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '8px',
  },
  productImage: {
    aspectRatio: '1',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '72px',
    borderRadius: '16px',
    alignSelf: 'stretch',
    margin: 'auto 0',
  },
  
};

const RentalDuration = ({ label, value }) => (
  <div style={styles.rentalInfo}>
    <div style={styles.rentalLabel}>{label}</div>
    <div style={styles.rentalValue}>{value}</div>
  </div>
);


const handleApprove = () => {
  console.log('Order approved');
  // Add your approval logic here
};

function RequestTopSummaryAdmin({addOrderToAnotherList,deleteOrderById}) {


  const handleReject = () => {
    deleteOrderById()
   
  };
  
  const handleApprove = () => {

    addOrderToAnotherList()

  };
  const rentalInfo = [
    { label: "مدة التأجير", value: "3 ايام" },
    { label: "تاريخ الطلب", value: "10/28/2024" }
  ];

  return (
    <div style={styles.rentalCard}>
      <div style={styles.actionButtons}>
           <button 
                style={{ ...styles.actionButton, ...styles.rejectButton }}
                tabIndex="0"
                role="button"
                onClick={handleReject}
            >
                رفض الطلب
            </button>
            <button 
                style={{ ...styles.actionButton, ...styles.approveButton }}
                tabIndex="0"
                role="button"
                onClick={handleApprove}
            >
                الموافقة على الطلب
            </button>
      </div>
      
      {rentalInfo.map((info, index) => (
        <RentalDuration 
          key={index}
          label={info.label}
          value={info.value}
        />
      ))}

      <div style={styles.productDetails}>
        <div style={styles.productInfo}>
          <div style={styles.statusBadge}>
            <span style={styles.statusText}>متاح للإيجار</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5569c7ccea0ccd12ffc61ed66c511bec4c54760cefeb7342fb46d3c3581a74a8?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
              alt=""
              style={styles.statusIcon}
            />
          </div>
          <h2 style={styles.productTitle}>
            اسم المنتج لسطر واحد فقط ثم ...
          </h2>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16ebb708587d34958ea501462b2fe9b9d1be4df023bf649da3541b1cc806f35?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          alt="Product thumbnail"
          style={styles.productImage}
        />
      </div>
    </div>
  );
}

export default RequestTopSummaryAdmin;