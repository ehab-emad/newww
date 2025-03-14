
const styles = {
  installment: {
    justifyContent: "end",
    alignItems: "start",
    borderRadius: "24px",
    border: "2px solid var(--line-saperator, rgba(0, 47, 54, 0.08))",
    background: "var(--White, #fff)",
    display: "flex",
    flex: '1 1 0%',
    gap: "16px",
    fontFamily: "Expo Arabic, sans-serif",
    flexWrap: "wrap",
    padding: "16px",
    flexDirection : 'column-inverse',
    width : '90%'
  },
  deactivateButton: {
    alignSelf: "stretch",
    borderRadius: "50px",
    background: "var(--error-shade, #fae4e4)",
    gap: "8px",
    overflow: "hidden",
    fontSize: "12px",
    color: "var(--Error-color, #d61b1b)",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "1",
    padding: "8px 17px",
    cursor: "pointer",
    border: "none"
  },
  activateButton: {
    alignSelf: "stretch",
    borderRadius: "50px",
    background: "var(--Light, #e5f2f3)",
    gap: "8px",
    overflow: "hidden",
    fontSize: "12px",
    color: "var(--Blue, #26969c)",
    fontWeight: "600",
    whiteSpace: "nowrap",
    textAlign: "center",
    lineHeight: "1",
    padding: "8px 17px",
    border: "none",
    cursor: "pointer"
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    flexBasis: "48px"
  },
  titleContainer: {
    alignSelf: "end",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "end"
  },
  accountBadge: {
    alignSelf: "stretch",
    borderRadius: "8px",
    background: "var(--very-light, #f2fbfa)",
    gap: "10px",
    fontSize: "12px",
    color: "var(--Dark, #09262a)",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "1",
    margin: "auto 0",
    padding: "4px"
  },
  title: {
    color: "var(--Text, #252422)",
    textAlign: "right",
    fontSize: "20px",
    fontWeight: "600",
    alignSelf: "stretch",
    margin: "auto 0"
  },
  description: {
    color: "var(--Gray, #8c8b8a)",
    textAlign: "right",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    marginTop: "16px"
  },
  websiteContainer: {
    display: "flex",
    marginTop: "16px",
    width: "100%",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    textAlign: "right",
    justifyContent: "end"
  },
  websiteLink: {
    color: "var(--Blue, #26969c)",
    fontWeight: "600",
    textDecorationLine: "underline",
    alignSelf: "stretch",
    margin: "auto 0"
  },
  websiteLabel: {
    color: "var(--Text, #252422)",
    fontWeight: "500",
    alignSelf: "stretch",
    margin: "auto 0"
  },
  logo: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "80px"
  },
  "@media (max-width: 991px)": {
    deactivateButton: {
      padding: "0 20px"
    }
  }
};

const PaymentServiceCard = ({ servicedata, toggleServiceState }) => {
  return (
<div style={styles.installment}>
  
    <div style={styles.contentWrapper}>
      <div style={styles.titleContainer}>
        { servicedata.isDefault ? 
        <button 
            style={styles.deactivateButton}
            tabIndex={0}
            role="button"
            onClick={() => toggleServiceState(servicedata.id)}  // Call the deactivate function when clicked
            >
             إلغاء التفعيل
         </button>
         :
         <button 
            style={styles.activateButton}
            tabIndex={0}
            role="button"
            onClick={() => toggleServiceState(servicedata.id)}  // Call the deactivate function when clicked
            >
             تفعيل
         </button>
         }
        <div style={styles.accountBadge}>{servicedata.badgeText}</div>
        <h2 style={styles.title}>{servicedata.title}</h2>
    
      </div>
      <p style={styles.description}>{servicedata.description}</p>
      <div style={styles.websiteContainer}>
        <a 
          href={servicedata.website} 
          style={styles.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {servicedata.website}
        </a>
        <span style={styles.websiteLabel}>الموقع الإلكتروني</span>
      </div>
    </div>
    <img
      loading="lazy"
      src={servicedata.logoSrc}
      style={styles.logo}
      alt={`${servicedata.title} logo`}
    />
  </div>
  );
};

export default PaymentServiceCard;