import InvoiceSummaryAdmin from './OrderSummaryComponents/InvoiceSummaryAdmin';
import RenterInfoAdmin from './OrderSummaryComponents/RenterInfoAdmin';
import RentalDetails from './OrderSummaryComponents/RentalDetails';
import DeliveryAddress from './OrderSummaryComponents/DeliveryAddress';

// import '../../App.css'

const styles = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Expo Arabic, sans-serif',
    position: 'absolute',
    top: 0,
    
    left: 0,
    width: '100vw',
    height: '100vh',        
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  
    mainContainer: {
        display: 'flex',
        gap: "16px",
        flexDirection: 'column',
        height: 'auto',
        overflow : 'hidden',
        width: '80%', // Full width of the parent
        backgroundColor: '#e0e0e0', // Main background color
        padding: '24px', // Optional padding
        flexShrink: 0, // Prevent shrinking in flex container
        borderRadius: "30px",
        // top: '50%',          // Position at the vertical center
        left: '50%',         // Position at the horizontal center
        position: 'absolute',
        transform: 'translate(-50%, -50%)', // Adjust position to center
        minWidth: '0', // Ensure no minimum width constraints
        maxWidth: '100%', // Ensure it doesn't exceed parent width
        flexGrow: 1, // Allow it to grow and fill available space
        boxSizing: 'border-box', // Include padding and borders in width calculations


        

    },
    container: {
        display: 'flex',
        //backgroundColor:" #767676",
        height: '100%',
        overflow : 'hidden',
        flexWrap:"wrap",
        width: '100%', // Full width of the parent
        flexShrink: 0, // Prevent shrinking in flex container  
        minWidth: '0', // Ensure no minimum width constraints
        maxWidth: '100%', // Ensure it doesn't exceed parent width
        flexGrow: 1, // Allow it to grow and fill available space
        boxSizing: 'border-box', // Include padding and borders in width calculations
        gap: "24px"

    },
    container1: {
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor:" #777777",
        padding: "8px",
        width: '100%', // Set to 100% to take full width of the parent
      height: '10%', // Allow height to adjust based on content
      minWidth: '0', // Ensure no minimum width constraints
      maxWidth: '100%', // Ensure it doesn't exceed parent width
      flexGrow: 1, // Allow it to grow and fill available space
      flexShrink: 0, // Prevent shrinking if there's enough space
      boxSizing: 'border-box', // Include padding and borders in width calculations
    },
    left: {
        // width: '40%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', // Prevents overflow
        justifyContent: "start",
        alignItems: " center",
        height: 'auto', // Allow height to adjust based on content
        flexShrink: 0, // Prevent shrinking if there's enough space
        boxSizing: 'border-box', // Include padding and borders in width
        gap: "16px"

    },
    right: {

        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden', // Prevents overflow
        justifyContent: "start",
        alignItems: " center",
        height: 'auto', // Allow height to adjust based on content
        flexShrink: 0, // Prevent shrinking if there's enough space
        boxSizing: 'border-box', // Include padding and borders in width
        gap: "16px"


    },

    header: {
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch",
      borderBottom: "1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))",
      display: "flex",
      color: "var(--Text, #252422)",
      textAlign: "right",
      flexWrap: "wrap",
      font: "600 24px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif"
    },
    icon: {
      aspectRatio: "1",
      objectFit: "contain",
      objectPosition: "center",
      width: "32px",
      alignSelf: "stretch",
      margin: "auto 0",
      cursor: " pointer",
    },
    orderTitle: {
      alignSelf: "stretch",
      flex: 1,
      flexBasis: "0%",
      margin: "auto 0"
    },


};
const carDetailsData = [
  {
    id: 1,
    orderDate: "10/28/2024",
    orderLabel: "تاريخ الطلب",
    status: "متاح للإيجار",
    statusIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e487fd124f0a091fe4e0e102cbb4c722e110ad120b230ee4d6cc80c3fd614ef5?placeholderIfAbsent=true&apiKey=d450998b662b4d7f9d8aea2e6e480818",
    productName: "اسم المنتج لسطر واحد فقط ثم",
    productImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/983f849c2f6efe0611b25a5cc3d90922da4ed18c9891497056ec5598a057f54a?placeholderIfAbsent=true&apiKey=d450998b662b4d7f9d8aea2e6e480818"
  }
];

const stylesdetails = {
  carDetails: {
    justifyContent: 'end',
    alignSelf: 'stretch',
    borderRadius: '24px',
    background: 'var(--White, #fff)',
    display: 'flex',
    gap: '24px',
    overflow: 'hidden',
    fontFamily: 'Expo Arabic, sans-serif',
    flexWrap: 'wrap',
    padding: '16px',
  },
  orderDateContainer: {
    display: 'flex',
    flexWrap: 'wrap',

    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '14px',
    textAlign: 'center',
    justifyContent: 'center',
    // width: '116px',
    padding: '0 8px',
  },
  orderDateLabel: {
    color: 'var(--Paragraph, #736e67)',
    fontWeight: '400',
  },
  orderDate: {
    color: 'var(--Text, #252422)',
    fontWeight: '500',
    marginTop: '8px',
  },
  productContainer: {
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
  productInfoContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    minWidth: '240px',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'start',
    margin: 'auto 0',
  },
  productStatus: {
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
  productName: {
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
  media: {
    '@media (max-width: 991px)': {
      
      productContainer: {
        maxWidth: '100%',
      },
    },
  },
};

const OrderSummary = ({onReviewClick,addOrderToAnotherList,deleteOrderById,Order}) => {
  
  const formatFirestoreTimestamp = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "N/A";

    const date = new Date(timestamp.seconds * 1000); // تحويل الثواني إلى ملي ثانية
    return date.toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZoneName: "short",
    });
};

  const item=Order
  return (
  
  <div style={styles.overlay } className='overflowstatus'> 
    <div style={styles.mainContainer} className='topstate'>
            <div style={styles.header}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1479ad6ccf24ef7ae351d02c2a94be35ccbf27bd1b93d744fba097d06561feba?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
                style={styles.icon}
                alt="Order details icon"
                onClick={onReviewClick}
              />
              <div style={styles.orderTitle}>بيانات الطلب</div>
            </div>

         
            <div key={item.id} style={stylesdetails.carDetails}>
              <div style={stylesdetails.orderDateContainer}>
                <div style={stylesdetails.orderDateLabel}>تاريخ الطلب</div>
        
                <div style={stylesdetails.orderDate}>{formatFirestoreTimestamp(Order.createdAt) || 'empty'}</div>
              </div>
              <div style={stylesdetails.productContainer}>
                <div style={stylesdetails.productInfoContainer}>
                  <div style={stylesdetails.productStatus}>
                    <div style={stylesdetails.statusText}>{item.status || 'empty'}</div>
                    <img
                      loading="lazy"
                      src={item.statusIcon || "https://cdn.builder.io/api/v1/image/assets/TEMP/e487fd124f0a091fe4e0e102cbb4c722e110ad120b230ee4d6cc80c3fd614ef5?placeholderIfAbsent=true&apiKey=d450998b662b4d7f9d8aea2e6e480818"}
                      alt=""
                      style={stylesdetails.statusIcon}
                    />
                  </div>
                  <div style={stylesdetails.productName}>{item.productName || 'name'}</div>
                </div>
                <img
                  loading="lazy"
                  src={item.productImage || "https://cdn.builder.io/api/v1/image/assets/TEMP/983f849c2f6efe0611b25a5cc3d90922da4ed18c9891497056ec5598a057f54a?placeholderIfAbsent=true&apiKey=d450998b662b4d7f9d8aea2e6e480818"}
                  alt="Product thumbnail"
                  style={stylesdetails.productImage }
                />
              </div>
            </div>
          {/* ))} */}
           
      <div style={styles.container}>
        <div style={styles.left} className='details'>
            <InvoiceSummaryAdmin  Order={Order}/>
            <RenterInfoAdmin Order={Order} />
        </div>
        <div style={styles.right}>
          <RentalDetails  Order={Order} />
          <DeliveryAddress Order={Order}/>

        </div>

      </div>
    </div>
    </div>
    
  
  );
};

export default OrderSummary;