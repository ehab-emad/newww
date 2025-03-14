import * as React from "react";

const RentalCard = () => {
  const rentalDetails = [
    {
      label: "مدة التأجير",
      value: "3 ايام"
    },
    {
      label: "تاريخ الطلب",
      value: "10/28/2024"
    }
  ];

const styles = {
    wrapper: {
      justifyContent: "end",
      borderRadius: "24px",
      background: "var(--White, #fff)",
      display: "flex",
      marginTop: "16px",
      width: 'auto', // Full width of the parent
      minWidth: 'calc(100% - 32px)', // Ensure minWidth accounts for parent's padding
      maxWidth: '100%', // Prevent exceeding parent width
      overflow: "hidden",
      padding: "16px"
    },
    actionButton: {
      alignSelf: "stretch",
      borderRadius: "50px",
      border: "1px solid var(--Blue, #26969c)",
      gap: "8px",
      fontSize: "14px",
      color: "var(--Blue, #26969c)",
      fontWeight: "500",
      textAlign: "center",
      lineHeight: "1",
      margin: "auto 0",
      padding: "12px 24px",
      cursor: "pointer"
    },
    detailItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "14px",
      textAlign: "center",
      justifyContent: "center",
      width: "116px",
      padding: "0 8px"
    },
    label: {
      color: "var(--Paragraph, #736e67)",
      fontWeight: "400"
    },
    value: {
      color: "var(--Text, #252422)",
      fontWeight: "500",
      marginTop: "8px"
    },
    productSection: {
      display: "flex",
      minWidth: "240px",
      alignItems: "center",
      gap: "8px",
      justifyContent: "end",
      flexWrap: "wrap",
      flex: 1,
      flexBasis: "48px",
      margin: "auto 0"
    },
    productInfo: {
      alignSelf: "stretch",
      display: "flex",
      minWidth: "240px",
      flexDirection: "column",
      alignItems: "end",
      justifyContent: "start",
      margin: "auto 0"
    },
    statusBadge: {
      justifyContent: "end",
      alignItems: "center",
      borderRadius: "8px",
      background: "var(--very-light, #f2fbfa)",
      display: "flex",
      gap: "8px",
      fontSize: "12px",
      color: "var(--Blue, #26969c)",
      fontWeight: "500",
      textAlign: "center",
      padding: "8px"
    },
    statusText: {
      alignSelf: "stretch",
      margin: "auto 0"
    },
    statusIcon: {
      aspectRatio: "1",
      objectFit: "contain",
      objectPosition: "center",
      width: "16px",
      alignSelf: "stretch",
      margin: "auto 0"
    },
    productTitle: {
      color: "var(--Dark, #09262a)",
      textAlign: "right",
      fontSize: "20px",
      fontWeight: "600",
      marginTop: "8px"
    },
    productImage: {
      aspectRatio: "1",
      objectFit: "contain",
      objectPosition: "center",
      width: "72px",
      borderRadius: "16px",
      alignSelf: "stretch",
      margin: "auto 0"
    }
  };

  return (
    <div style={styles.wrapper}>
      <button style={styles.actionButton} tabIndex="0">
        الذهاب لصفحة المنتج
      </button>
      
      {rentalDetails.map((detail, index) => (
        <div key={index} style={styles.detailItem}>
          <div style={styles.label}>{detail.label}</div>
          <div style={styles.value}>{detail.value}</div>
        </div>
      ))}

      <div style={styles.productSection}>
        <div style={styles.productInfo}>
          <div style={styles.statusBadge}>
            <div style={styles.statusText}>المنتج مؤجر</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceb2b08a8d013ffb188cf0118329cbef5d57efe1b6ee4604703fda1f187daf49?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
              style={styles.statusIcon}
              alt=""
            />
          </div>
          <div style={styles.productTitle}>
            اسم المنتج لسطر واحد فقط ثم ...
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/149cf2f4d8141a93e56180c0a342b3e4f8e9712265391018dcc5be47815d9464?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
          style={styles.productImage}
          alt="Product thumbnail"
        />
      </div>
    </div>
  );
};

export default RentalCard;