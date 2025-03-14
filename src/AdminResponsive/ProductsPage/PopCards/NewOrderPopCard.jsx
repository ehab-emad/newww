
const NewOrderStyle = {
    wrapper: {
      justifyContent: 'center',
      borderRadius: '16px',
      border: '0.5Px solid var(--stroke, rgba(0, 47, 54, 0.24))',
      background: 'var(--White, #fff)',
      display: 'flex',
      maxWidth: '394px',
      flexDirection: 'column',
      fontFamily: 'Expo Arabic, sans-serif',
      padding: '16px'
    },
    NewOrderStyleHeader: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      gap: '8px'
    },
    NewOrderStyleContent: {
      alignSelf: 'stretch',
      display: 'flex',
      minWidth: '240px',
      flexDirection: 'column',
      justifyContent: 'start',
      flex: '1',
      flexBasis: '0%',
      margin: 'auto 0'
    },
    NewOrderStyleStatusRow: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      gap: '40px 100px',
      fontSize: '12px',
      justifyContent: 'space-between'
    },
    timeStamp: {
      color: 'var(--Cool, #8d8883)',
      fontWeight: '400',
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    statusBadge: {
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 233, 212, 1)',
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--Orange, #ff8945)',
      fontWeight: '500',
      textAlign: 'center',
      justifyContent: 'end',
      margin: 'auto 0',
      padding: '8px'
    },
    statusIcon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '16px',
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    customerRow: {
      display: 'flex',
      marginTop: '8px',
      width: '100%',
      alignItems: 'center',
      fontSize: '14px',
      justifyContent: 'space-between'
    },
    priceContainer: {
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--Blue, #26969c)',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      justifyContent: 'start',
      margin: 'auto 0'
    },
    currency: {
      alignSelf: 'stretch',
      flex: '1',
      gap: '10px',
      width: '27px',
      margin: 'auto 0'
    },
    amount: {
      alignSelf: 'stretch',
      flex: '1',
      gap: '10px',
      width: '39px',
      margin: 'auto 0'
    },
    customerName: {
      color: 'var(--Text, #252422)',
      textAlign: 'right',
      fontWeight: '500',
      lineHeight: '1',
      alignSelf: 'stretch',
      flex: '1',
      flexBasis: '0%',
      margin: 'auto 0'
    },
    customerImage: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '60px',
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    divider: {
      backgroundColor: 'rgba(0, 47, 54, 0.24)',
      minHeight: '0px',
      marginTop: '16px',
      width: '100%',
      border: '1px solid rgba(0, 47, 54, 0.24)'
    },
    actionButtons: {
      display: 'flex',
      marginTop: '16px',
      width: '100%',
      alignItems: 'center',
      gap: '4px',
      fontSize: '14px',
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: '1',
      justifyContent: 'start'
    },
    reviewButton: {
      alignSelf: 'stretch',
      borderRadius: '50px',
      border: '1px solid var(--Blue, #27989e)',
      gap: '8px',
      color: 'var(--Blue, #26969c)',
      flex: '1',
      margin: 'auto 0',
      padding: '12px 24px',
      cursor: 'pointer'
    },
    approveButton: {
      alignSelf: 'stretch',
      borderRadius: '50px',
      background: 'var(--Blue, #27989e)',
      boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
      gap: '8px',
      color: 'rgba(255, 255, 255, 1)',
      flex: '1',
      margin: 'auto 0',
      padding: '12px 20px',
      cursor: 'pointer'
    }
  };

const NewOrderPopCard = () => {
  return (
    <div style={NewOrderStyle.wrapper}>
      <div style={NewOrderStyle.NewOrderStyleHeader}>
        <div style={NewOrderStyle.NewOrderStyleContent}>
          <div style={NewOrderStyle.NewOrderStyleStatusRow}>
            <span style={NewOrderStyle.timeStamp}>منذ ساعتين</span>
            <div style={NewOrderStyle.statusBadge}>
              <span>حجز جديد</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5fc9607a29b8d00e926d90f092ff65441df8e94f29958cea0cc2fc144a565a2?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
                alt=""
                style={NewOrderStyle.statusIcon}
              />
            </div>
          </div>
          <div style={NewOrderStyle.customerRow}>
            <div style={NewOrderStyle.priceContainer}>
              <span style={NewOrderStyle.currency}>ر.س</span>
              <span style={NewOrderStyle.amount}>5000</span>
            </div>
            <span style={NewOrderStyle.customerName}>اسم العميل لسطر واحد</span>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a6e1d72fc562466b8d97c676a5b128627136289d5da5b3b3869beba82a0840?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
          alt="Customer profile"
          style={NewOrderStyle.customerImage}
        />
      </div>
      <div style={NewOrderStyle.divider} />
      <div style={NewOrderStyle.actionButtons}>
        <button style={NewOrderStyle.reviewButton}>مراجعة الطلب</button>
        <button style={NewOrderStyle.approveButton}>الموافقة على الطلب</button>
      </div>
    </div>
  );
};

export default NewOrderPopCard;