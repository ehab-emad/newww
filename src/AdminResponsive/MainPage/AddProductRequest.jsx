import  { useState,useEffect } from 'react';
import AddRequestSummary from './AddRequestSummary';
import { useDispatch, useSelector } from 'react-redux';
// import { getNewOrders } from '../../../../trenttest/reducers/sellerOrdersReducer';
import { PendingProductsAdmin } from '../../store/reducers/sellerProductsReducer';

const OrderStatusStyles = {
    serviceUpcomingAppointments: {
        alignItems: 'flex-end',
        borderRadius: '24px',
        background: 'var(--White, #fff)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Expo Arabic, sans-serif',
        justifyContent: 'flex-start',
        padding: '16px',
        marginTop: '20px',
        // overflow: 'hidden',
        width: 'auto',
        minWidth: 'calc(100% - 32px)',
        maxWidth: '100%',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        flexShrink: 0,
      },
      header: {
        borderColor: "rgba(0, 47, 54, 0.08)",
        borderBottomWidth: "1px",
        display: "flex",
        width: "100%",
        paddingBottom: "8px",
        alignItems: "center",
        gap: "40px 100px",
        fontWeight: "400",
        justifyContent: "space-between",
        flexWrap: "wrap",
      },
      filterButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
        background: "var(--BG-gray, #f6f5f5)",
        display: "flex",
        gap: "4px",
        overflow: "hidden",
        fontSize: "14px",
        color: "var(--Cool, #8d8883)",
        lineHeight: "1",
        margin: "auto 0",
        padding: "8px 16px 8px 12px",
        curser:'pointer',
        outline: 'none'

      },
      headerTitle: {
        alignSelf: "stretch",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "18px",
        color: "var(--Text, #252422)",
        textAlign: "right",
        justifyContent: "start",
        margin: "auto 0",
      },
      orderCard: {
        justifyContent: "end",
        alignItems: "center",
        borderRadius: "16px",
        border: "1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))",
        background: "var(--White, #fff)",
        display: "flex",
        marginTop: "16px",
        width: 'auto',
        minWidth: 'calc(100% - 32px)',
        maxWidth: '100%',
        padding: '16px',
      },
      actionButtons: {
        alignSelf: "stretch",
        display: "flex",
        minWidth: "240px",
        alignItems: "center",
        gap: "4px",
        fontSize: "14px",
        fontWeight: "500",
        textAlign: "center",
        lineHeight: "1",
        justifyContent: "start",
        margin: "auto 0",
      },
      reviewButton: {
        alignSelf: "stretch",
        borderRadius: "50px",
        border: "1px solid var(--Blue, #27989e)",
        gap: "8px",
        color: "var(--Blue, #26969c)",
        margin: "auto 0",
        padding: "12px 24px",
        cursor : 'pointer'
      },
      approveButton: {
        alignSelf: "stretch",
        borderRadius: "50px",
        background: "var(--Blue, #27989e)",
        boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.08)",
        gap: "8px",
        color: "rgba(255, 255, 255, 1)",
        margin: "auto 0",
        padding: "12px 20px",
        cursor : 'pointer'

      },
      orderInfo: {
        alignSelf: "stretch",
        display: "flex",
        minWidth: "240px",
        alignItems: "center",
        gap: "8px",
        justifyContent: "end",
        flexWrap: "wrap",
        flex: 1,
        flexBasis: "0%",
        margin: "auto 0",
      },
      orderDetails: {
        alignSelf: "stretch",
        display: "flex",
        minWidth: "240px",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "center",
        flex: 1,
        flexBasis: "0%",
        margin: "auto 0",
      },
      orderMeta: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "12px",
        justifyContent: "end",
      },
      timeStamp: {
        color: "var(--Cool, #8d8883)",
        textAlign: "right",
        fontWeight: "400",
        alignSelf: "stretch",
        margin: "auto 0",
      },
      statusBadge: {
        borderRadius: "8px",
        backgroundColor: "rgba(255, 233, 212, 1)",
        alignSelf: "stretch",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "var(--Orange, #ff8945)",
        fontWeight: "500",
        textAlign: "center",
        justifyContent: "end",
        margin: "auto 0",
        padding: "8px",
      },
      productTitle: {
        color: "var(--Dark, #09262a)",
        textAlign: "right",
        fontSize: "16px",
        fontWeight: "500",
        marginTop: "8px",
      },
      productImage: {
        aspectRatio: "1",
        objectFit: "contain",
        objectPosition: "center",
        width: "64px", // Set your desired width for the product image
        alignSelf: "stretch",
        margin: "auto 0",
      },
      icon: {
        aspectRatio: "1",
        objectFit: "contain",
        objectPosition: "center",
        width: "16px",
        alignSelf: "stretch",
        margin: "auto 0",
      },
    }

const styles = {
        requestsContainer: {
          alignSelf: 'stretch',
          borderRadius: '24px',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'Expo Arabic, sans-serif',
          justifyContent: 'start',
          padding: '16px',
        },
        header: {
          borderColor: 'rgba(0, 47, 54, 0.08)',
          borderBottomWidth: '1px',
          display: 'flex',
          width: '100%',
          paddingBottom: '8px',
          alignItems: 'center',
          gap: '40px 100px',
          fontWeight: 400,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        },
        viewAllButton: {
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50px',
          background: '#f6f5f5',
          display: 'flex',
          gap: '4px',
          overflow: 'hidden',
          fontSize: '14px',
          color: '#8d8883',
          lineHeight: 1,
          margin: 'auto 0',
          padding: '8px 16px 8px 12px',
          border: 'none',
          cursor: 'pointer',
        },
        viewAllIcon: {
          width: '14px',
          height: '14px',
        },
        titleWrapper: {
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '18px',
          color: '#252422',
          textAlign: 'right',
        },
        titleIcon: {
          width: '24px',
          height: '24px',
        },
        productCard: {
            justifyContent: "end",
            alignItems: "center",
            borderRadius: "16px",
            border: "1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))",
            background: "var(--White, #fff)",
            display: "flex",
            marginTop: "16px",
            width: 'auto',
            minWidth: 'calc(100% - 32px)',
            maxWidth: '100%',
            padding: '16px',
            gap : '8px'
        },
        actionButtons: {
          display: 'flex',
          // minWidth: '240px',
          alignItems: 'center',
          gap: '4px',
          fontSize: '14px',
          fontWeight: 500,
          textAlign: 'center',
          lineHeight: 1,
        },
        reviewButton: {
          borderRadius: '50px',
          border: '1px solid #27989e',
          color: '#26969c',
          padding: '12px 24px',
          background: 'transparent',
          cursor: 'pointer',
        },
        approveButton: {
          borderRadius: '50px',
          background: '#27989e',
          boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
          color: '#fff',
          padding: '12px 20px',
          border: 'none',
          cursor: 'pointer',
        },
        productInfo: {
          display: 'flex',
          // minWidth: '240px',
          flexDirection: 'column',
          alignItems: 'end',
          textAlign: 'right',
          justifyContent: 'center',
          flex: 1,
        },
        timeAgo: {
          fontSize: '12px',
          color: '#8d8883',
          fontWeight: 400,
        },
        productName: {
          color: '#09262a',
          fontSize: '16px',
          fontWeight: 500,
          marginTop: '8px',
        },
        productImage: {
          width: '64px',
          height: '64px',
          objectFit: 'contain',
        },
      };



const AddProductRequest = () => {



    
  const [ReviewOrder, setReviewOrder] = useState(false);
  const [ActiveOrder, setActiveOrder] = useState('');

  const dispatch = useDispatch();
  const {  products_pendingAdmin } = useSelector((state) => state.seller_products);
 


  const getTimeDifference = (createdAt) => {
    const createdDate = createdAt.toDate(); // تحويل Timestamp إلى Date
    const now = new Date();
    const diffInMilliseconds =  createdDate -  now;
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60); // تحويل الفرق إلى ساعات

    if (diffInHours >= 24) {
        const diffInDays = diffInHours / 24; // تحويل إلى أيام
        return `${Math.floor(diffInDays)} days`;
    }

    return `${Math.floor(diffInHours)} hours`;
};


// مثال الاستخدام


  // Fetch data on component mount
  useEffect(() => {

    dispatch(PendingProductsAdmin());
     
  }, []);

  const [anotherList, setAnotherList] = useState([]);

  const [AddRequest, setAddRequest] = useState(products_pendingAdmin);
    // Function to delete an order by id
    const deleteOrderById = () => {
        setAddRequest((prevOrders) => prevOrders.filter(order => order.id !== ActiveOrder));
  };

  // Function to add an order to another list
  const addOrderToAnotherList = () => {
      const orderToAdd = AddRequest.find(order => order.id === ActiveOrder);
      if (orderToAdd) {
          setAnotherList((prevList) => [...prevList, orderToAdd]);
          deleteOrderById(); // Optionally remove from newOrders after adding
      }
  };

  const onReviewClick = (request) => {
    setReviewOrder(prevState => !prevState); // Toggle the state
    setActiveOrder(request.id)

  };



  const handleallOrdersclick = ()=> {
    console.log('handleallOrdersclick:');


    };

  return (
    <div style={OrderStatusStyles.serviceUpcomingAppointments}>
    <div style={OrderStatusStyles.header}>
    <button 
          style={OrderStatusStyles.filterButton} 
          onClick={handleallOrdersclick} // Add onClick handler
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae96818e45715f1a827a229643aec834784b498c298553ca983744f29b67715?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
            style={OrderStatusStyles.icon}
          />
          <span>كل الطلبات</span> {/* Use span for text inside button */}
        </button>
      <div style={OrderStatusStyles.headerTitle}>
        <div>طلبات إضافة المنتجات</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/42680772511d78cc3e6d369e483d9b1061140aa8839771f65c15527226a9b0af?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          style={{ ...OrderStatusStyles.icon, width: '24px' }}
        />
      </div>
    </div>

    {products_pendingAdmin.map((request, index) => (
            <div key={index} style={styles.productCard}>
                <div style={styles.actionButtons}>
                <button 
                onClick={() => onReviewClick(request)}

                style={styles.reviewButton}
                >
                    مراجعة المنتج
                
                </button>
                </div>
                {ReviewOrder ? (
        <AddRequestSummary product={request} onReviewClick={onReviewClick} addOrderToAnotherList={addOrderToAnotherList} deleteOrderById={deleteOrderById} />
      ) : null}
                <div style={styles.productInfo}>
                <div style={styles.timeAgo}>{getTimeDifference(request.createdAt) ||"empty"}</div>
                <div style={styles.productName}>{request.name ||"empty"}</div>
                </div>
                <img loading="lazy" src={request.imageUrl || "https://cdn.builder.io/api/v1/image/assets/TEMP/eea2576816ccc8b8ac2413c28ee8ce1beb4253d0a89b5307356da91e91a4405a?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"} alt="Product thumbnail" style={styles.productImage} />
            </div>      

        ))}
      
    
  </div>
 
  );
};

export default AddProductRequest;
