
const DeliveryAddress = ({Order}) => {
  const addressData = {
    title: "عنوان الاستلام",
    defaultAddress: {
      type: "المنزل",
      isDefault: true,
      city: "الرياض",
      details: "كتابة العنوان بالتفصيل وقد يمتد العنوان الى سطر او سطرين وميعاد الاستلام المتاح للمالك"
    }
  };

  const styles = {
    wrapper: {
      alignSelf: 'stretch',
      borderRadius: '24px',
      background: 'var(--White, #fff)',
      boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.04)',
      display: 'flex',
      width: "auto",
      maxWidth: '100%',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'Expo Arabic, sans-serif',
      justifyContent: 'start',
      padding: '16px'
    },
    header: {
      padding: '0 0 8px',
      justifyContent: 'end',
      alignItems: 'center',
      borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
      display: 'flex',
      width: '100%',
      gap: '8px',
      fontSize: '18px',
      color: 'var(--Text, #252422)',
      fontWeight: '500',
      textAlign: 'right',
      flexWrap: 'wrap'
    },
    headerTitle: {
      alignSelf: 'stretch',
      flex: '1',
      flexBasis: '0%',
      margin: 'auto 0'
    },
    icon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '24px',
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    addressContainer: {
      justifyContent: 'end',
      alignItems: 'start',
      borderRadius: '16px',
      border: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
      display: 'flex',
      marginTop: '16px',
      width: 'auto',
      gap: '8px',
      flexWrap: 'wrap',
      padding: '8px'
    },
    addressContent: {
      display: 'flex',
      minWidth: '240px',
      flexDirection: 'column',
      alignItems: 'end',
      justifyContent: 'center',
      flex: '1',
      flexBasis: '0%'
    },
    addressHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: '500',
      justifyContent: 'end'
    },
    defaultBadge: {
      alignSelf: 'stretch',
      borderRadius: '8px',
      background: 'var(--success-shade, #e1ffc9)',
      gap: '8px',
      overflow: 'hidden',
      fontSize: '12px',
      color: 'var(--success, #4a9908)',
      textAlign: 'center',
      lineHeight: '1',
      margin: 'auto 0',
      padding: '4px'
    },
    addressType: {
      color: 'var(--Text, #252422)',
      textAlign: 'right',
      fontSize: '16px',
      lineHeight: '1',
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    cityContainer: {
      display: 'flex',
      marginTop: '8px',
      alignItems: 'end',
      gap: '4px',
      fontSize: '14px',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      justifyContent: 'end'
    },
    cityName: {
      color: 'var(--Text, #252422)',
      fontWeight: '400'
    },
    cityLabel: {
      color: 'rgba(25, 23, 21, 0.5)',
      fontWeight: '300',
      lineHeight: '1'
    },
    detailsContainer: {
      alignSelf: 'stretch',
      display: 'flex',
      marginTop: '8px',
      width: '100%',
      alignItems: 'start',
      gap: '4px',
      fontSize: '14px',
      textAlign: 'right',
      justifyContent: 'end',
      flexWrap: 'wrap'
    },
    details: {
      color: 'var(--Text, #252422)',
      fontWeight: '400',
      flex: '1',
      flexBasis: '0%'
    },
    detailsLabel: {
      color: 'rgba(25, 23, 21, 0.5)',
      fontWeight: '300',
      lineHeight: '1'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <div style={styles.headerTitle}>{addressData.title}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab683309af2d6c68644421dad1da86d34fc3f646455147d53251cdcee2f9504c?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          style={styles.icon}
          alt=""
        />
      </div>
      <div style={styles.addressContainer}>
        <div style={styles.addressContent}>
          <div style={styles.addressHeader}>
            {addressData.defaultAddress.isDefault && (
              <div style={styles.defaultBadge}>العنوان الافتراضي</div>
            )}
            <div style={styles.addressType}>{addressData.defaultAddress.type}</div>
          </div>
          <div style={styles.cityContainer}>
            <div style={styles.cityName}>{Order.pickaddress ? Order.pickaddress.city: "empty"}</div>
            <div style={styles.cityLabel}>المدينة:</div>
          </div>
          <div style={styles.detailsContainer}>
            <div style={styles.details}>{Order.pickaddress ? Order.pickaddress.address: "empty"}</div>
            <div style={styles.detailsLabel}>العنوان:</div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb3858d2e0cfae87947aea0ca63645cfc0fb5254a900437291dd2c6efa62426?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          style={styles.icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default DeliveryAddress;