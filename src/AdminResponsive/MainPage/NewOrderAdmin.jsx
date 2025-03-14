import  { useState,useEffect, useMemo } from 'react';
import OrderSummaryAdmin from './OrderSummaryAdmin';
import styled from "styled-components";
import { ChangeOrderStatus, getNewOrdersAdmin } from '../../store/reducers/sellerOrdersReducer';
import { useDispatch, useSelector } from 'react-redux';
import { SellerTransactions } from '../../store/reducers/sellerStuffReducer';

 

const sellerid = 'zTC4dLSjCIS2I3YAl9QTJUkro0p2';

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
        overflow: 'hidden',
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


  

const NewOrderAdmin = () => {
  const [ReviewOrder, setReviewOrder] = useState(false);
  const [ActiveOrder, setActiveOrder] = useState('');

  const [anotherList, setAnotherList] = useState([]);

  const getTimeDifference = (createdAt) => {
    const createdDate = createdAt.toDate(); // تحويل Timestamp إلى Date
    const now = new Date();
    const diffInMilliseconds =  now -  createdDate;
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60); // تحويل الفرق إلى ساعات

    if (diffInHours >= 24) {
        const diffInDays = diffInHours / 24; // تحويل إلى أيام
        return `${Math.floor(diffInDays)} days`;
    }

    return `${Math.floor(diffInHours)} hours`;
};
  const dispatch = useDispatch();
  const {  new_ordersAdmin } = useSelector((state) => state.seller_orders);
 





  // Fetch data on component mount
  useEffect(() => {
    dispatch(getNewOrdersAdmin());
    {console.log(new_ordersAdmin)}
     
  }, []);

  // const memoizedNewOrders = useMemo(() => {
  //   // If new_orders is available, use it; otherwise, fallback to the static data
  //   return new_ordersAdmin 
  // }, [new_ordersAdmin]); // Recalculate only when new_orders changes





  const [newOrders, setNewOrders] = useState([
    {
      id: 1,
      productName: 'منتج 1',
      productImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3788a1a4965353ef9a19c13e4faf9e86bd2b263314ace672fd2946d3f68ef152?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6',
      createdAt: 'منذ ساعتين',
      status: 'حجز جديد',
  },
  {
      id: 2,
      productName: 'منتج 2',
      productImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3788a1a4965353ef9a19c13e4faf9e86bd2b263314ace672fd2946d3f68ef152?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6',
      createdAt: 'منذ ساعتين',
      status: 'حجز جديد',
  },
]);
const OrderCard = styled.div`
display: flex;
justify-content: space-between; /* 'end' should be 'flex-end' */
align-items: center;
border-radius: 16px;
border: 1px solid rgba(0, 47, 54, 0.08); /* Removed var(--line-saperator) */
background: #fff; /* Removed var(--White) */
margin-top: 16px;
width: auto;
min-width: calc(100% - 32px);
max-width: 100%;
padding: 16px;
@media (max-width : 668px) {
    flex-direction: column-reverse;
}
`

const ActionButtons = styled.div`
display: flex;
align-self: stretch; 
min-width: 240px;
align-items: center;
gap: 4px;
font-size: 14px;
font-weight: 500;
text-align: center;
line-height: 1;
justify-content: start;
margin: auto 0;

@media (max-width : 668px) {
    border-top: 1px solid #80808033;
    padding-top : 10px;
    margin-top : 10px;
    justify-content: space-between;
}
`
const ReviewButton = styled.div`
align-self: stretch;
border-radius: 50px;
border: 1px solid var(--Blue, #27989e);
gap: 8px; /* Note: gap only works for flex/grid containers */
color: var(--Blue, #26969c);
margin: auto 0;
padding: 12px 24px;
cursor: pointer;
@media (max-width : 668px) {
    width : 50%;
};
@media (max-width : 429px) {
    font-size : small;
}
`
const ApproveButton = styled.div`
align-self: stretch;
border-radius: 50px;
background: var(--Blue, #27989e);
box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);
gap: 8px; /* Note: gap only works for flex/grid containers */
color: rgba(255, 255, 255, 1);
margin: auto 0;
padding: 12px 20px;
cursor: pointer;
@media (max-width : 668px) {
    width : 50%;
};
@media (max-width : 429px) {
    font-size : small
}
`

const OrderDetails = styled.div`
align-self: stretch;
display: flex;
flex-direction: row-reverse;
margin: auto 0px;
gap : 20px;

`
const OrderInfo = styled.div`
align-self: stretch;
display: flex;
align-items: flex-start; 
justify-content: flex-start;
gap: 20px;
width: 50%;
margin: auto 0;
flex-direction: row-reverse;
@media (max-width : 668px) {
    justify-content: space-between;
    width: 100%;
}
`

const HeaderContainer = styled.div`
justify-content: space-between;
@media (max-width : 450px) {
  justify-content: end;
}
`

const BigScreenFilterButton = styled.button`
margin: auto 0;
display: flex;
@media (max-width : 450px) {
  display : none;
}
`
const SmallScreenFilterButton = styled.button`
display: none;
margin-top : 10px;
width : 100%;
@media (max-width : 450px) {
  display : flex;
}
`
    // Function to delete an order by id
    const deleteOrderById = () => {
      setNewOrders((prevOrders) => prevOrders.filter(order => order.id !== ActiveOrder));
  };
 
  // Function to add an order to another list
  const addOrderToAnotherList = () => {
      const orderToAdd = newOrders.find(order => order.id === ActiveOrder);
      if (orderToAdd) {
          setAnotherList((prevList) => [...prevList, orderToAdd]);
          deleteOrderById(); // Optionally remove from newOrders after adding
      }
  };

  const onReviewClick = (Order) => {
    setReviewOrder(prevState => !prevState); // Toggle the state
    setActiveOrder(Order.id)

  };

//   useEffect(() => {
//     // dispatch(SellerTransactions());
// }, [ActiveOrder]);


// useEffect(() => {
//   setReviewOrder()

// }, [anotherList]);


  const handleallOrdersclick = ()=> {


    };
    
//   const formatTimestamp = (timestamp) =>  {
//     if (!timestamp || !timestamp.seconds) return "N/A";
// console.log(timestamp)
//     const date = new Date(timestamp.seconds * 1000); // تحويل الثواني إلى ملي ثانية
//     return date.toLocaleString("en-US", {
//         month: "long",
//         day: "2-digit",
//         year: "numeric",
//         // hour: "2-digit",
//         // minute: "2-digit",
//         // second: "2-digit",
//         hour12: true,
//         // timeZoneName: "short",
//     });
// };


  return (
    <div style={OrderStatusStyles.serviceUpcomingAppointments}>
    <HeaderContainer style={OrderStatusStyles.header}>
        <BigScreenFilterButton 
          style={OrderStatusStyles.filterButton} 
          onClick={handleallOrdersclick} // Add onClick handler
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae96818e45715f1a827a229643aec834784b498c298553ca983744f29b67715?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
            style={OrderStatusStyles.icon}
          />
          <span>كل الطلبات</span> {/* Use span for text inside button */}
        </BigScreenFilterButton>
      <div style={OrderStatusStyles.headerTitle}>
        <div>طلبات حجز المنتجات</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21db4067eb11bee012610d22956597e6f3d196b4c9b01ad70ecd5c2bda0728b0?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          style={{ ...OrderStatusStyles.icon, width: '24px' }}
        />
      </div>
    </HeaderContainer>

    {new_ordersAdmin.slice(0, 3).map((Order, index) => (
      <OrderCard key={index} style={OrderStatusStyles.orderCard}> {ReviewOrder ? (
        <OrderSummaryAdmin Order={Order} onReviewClick={onReviewClick} addOrderToAnotherList={addOrderToAnotherList} deleteOrderById={deleteOrderById} />
      ) : null}
          <ActionButtons>
          <ReviewButton
            onClick={() => onReviewClick(Order)}
          >
            مراجعة الطلب
          </ReviewButton>
          {/* <ApproveButton
            onClick={() => onApproveClick(Order)}
          >
            الموافقة على الطلب
          </ApproveButton> */}
        </ActionButtons>
        <div style={OrderStatusStyles.orderInfo}>
          <div style={OrderStatusStyles.orderDetails}>
            <div style={OrderStatusStyles.orderMeta}>
              <div style={OrderStatusStyles.timeStamp}>  {Order.createdAt ?getTimeDifference(Order.createdAt):"empty"}</div>
              <div style={OrderStatusStyles.statusBadge}>
                <div>{Order.status}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8de82c35ce560a6b6ac6cf9599b4909ee0ea8efbecb64d7e7c2daf6ebfdf3f1d?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
                  style={OrderStatusStyles.icon}
                />
              </div>
            </div>
            <div style={OrderStatusStyles.productTitle}>
              {Order.productname || 'اسم المنتج يمتد لسطر واحد فقط ثم'}
            </div>
          </div>
        {  Order.productImage?
          <img
            loading="lazy"
            src={Order.img}
            style={OrderStatusStyles.productImage}
          />:<img src='https://cdn.builder.io/api/v1/image/assets/TEMP/3788a1a4965353ef9a19c13e4faf9e86bd2b263314ace672fd2946d3f68ef152?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6'/>}
        </div>
      </OrderCard>
    ))}
      
    
  </div>
 
  );
};

export default NewOrderAdmin;
