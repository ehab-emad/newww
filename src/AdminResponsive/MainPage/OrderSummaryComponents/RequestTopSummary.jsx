
const styles = {
  nineteen: {
    alignSelf: 'stretch',
    margin: 'auto 0'
  },
  twentyTwentyFour: {
    alignSelf: 'stretch',
    margin: 'auto 0'
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '16px',
    background: 'var(--White, #fff)',
    backgroundColor: 'var(--White, #fff)',
    display: 'flex',
    gap: '40px 100px',
    textAlign: 'right',
    flexWrap: 'wrap',
    padding: '16px',
    font: '16px Expo Arabic, sans-serif'
  },
  orderNumberContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    justifyContent: 'start',
    margin: 'auto 0'
  },
  orderNumber: {
    color: 'var(--Text, #252422)',
    fontWeight: 500,
    alignSelf: 'stretch',
    margin: 'auto 0'
  },
  orderNumberLabel: {
    color: 'var(--Paragraph, #736e67)',
    fontWeight: 400,
    alignSelf: 'stretch',
    margin: 'auto 0'
  },
  dateContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    justifyContent: 'end',
    margin: 'auto 0'
  },
  dateInnerContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    justifyContent: 'end',
    margin: 'auto 0'
  },
  dateWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'var(--Text, #252422)',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    justifyContent: 'end',
    margin: 'auto 0',
    '@media (max-width: 991px)': {
      whiteSpace: 'initial'
    }
  },
  month: {
    alignSelf: 'stretch',
    margin: 'auto 0'
  },
  dateLabel: {
    color: 'var(--Paragraph, #736e67)',
    fontWeight: 400,
    alignSelf: 'stretch',
    margin: 'auto 0'
  },
  icon: {
    aspectRatio: '1',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '24px',
    alignSelf: 'stretch',
    margin: 'auto 0'
  }
};

function RequestTopSummary() {
  return (
    <div style={styles.container}>
      <div style={styles.orderNumberContainer}>
        <div style={styles.orderNumber}>NEGG80043015334</div>
        <div style={styles.orderNumberLabel}>رقم الطلب:</div>
      </div>
      <div style={styles.dateContainer}>
        <div style={styles.dateInnerContainer}>
          <div style={styles.dateWrapper}>
            <div style={styles.twentyTwentyFour}>2024</div>
            <div style={styles.month}>نوفمبر</div>
            <div style={styles.nineteen}>19</div>
          </div>
          <div style={styles.dateLabel}>تاريخ الطلب:</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62638cfd2734836940236ff1a74195a1ff74772d97af0c3335b5a40f63bc5346?placeholderIfAbsent=true&apiKey=d450998b662b4d7f9d8aea2e6e480818"
          style={styles.icon}
          alt=""
        />
      </div>
    </div>
  );
}

export default RequestTopSummary;