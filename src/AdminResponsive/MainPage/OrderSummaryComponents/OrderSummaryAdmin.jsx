import InvoiceSummaryAdmin from './OrderSummaryComponents/InvoiceSummaryAdmin';
import RenterInfoAdmin from './OrderSummaryComponents/RenterInfoAdmin';
import RentalDetails from './OrderSummaryComponents/RentalDetails';
import RequestTopSummaryAdmin from './OrderSummaryComponents/RequestTopSummaryAdmin';
import DeliveryAddress from './OrderSummaryComponents/DeliveryAddress';



const styles = {
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
        top: '50%',          // Position at the vertical center
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
        width: '40%',
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


const OrderSummary = ({onReviewClick,addOrderToAnotherList,deleteOrderById}) => {
  return (
    <div style={styles.mainContainer}>
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
        <RequestTopSummaryAdmin addOrderToAnotherList={addOrderToAnotherList} deleteOrderById={deleteOrderById} />
      <div style={styles.container}>
        <div style={styles.left}>
            <InvoiceSummaryAdmin />
            <RenterInfoAdmin  />
        </div>
        <div style={styles.right}>
          <RentalDetails />
          <DeliveryAddress />

        </div>

      </div>
    </div>
  );
};

export default OrderSummary;