import {  useState, useMemo, useEffect } from 'react';
import OrderSummary from './OrderSummary';
import { useDispatch, useSelector } from 'react-redux';
import { ClosedOrders, getNewOrders, getRentedOrders, getSellerCancelledOrders, getSellerOrders } from '../../store/reducers/sellerOrdersReducer';
import { display } from '@mui/system';
import { customerbyId, productbyId, SellerbyId } from '../../store/reducers/sellerProductsReducer';



const styles = {


  maincontainer: {

    display: "flex",
    flexDirection: "column",


  },
  completedOrders: {
    justifyContent: "space-between",
    alignItems: 'center',
    borderRadius: "16px",
    // overflowX:"scroll",
    border: "1px solid rgba(0, 47, 54, 0.08)",
    background: "red",
    backgroundColor: "#fff",
    display: "flex",
    gap: "16px",
    color: "#252422",
    textAlign: "center",
    flexWrap: "nowrap",
    padding: "16px",
    font: "400 14px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif"
  },
  img: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "20px",
    margin: "auto 0"
  },
  recentupdate: {
    width: "108px",
  },
  rentduration: {
    width: "108px",
    // display: "flex",
    justifyContent: "center",
  },
  price: {
    whiteSpace: "nowrap",
    textAlign: "center",
    width: "108px",
    justifyContent: "center",
    // display: "flex",
  },
  statusWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px",
    color: "#4a9908",
    fontWeight: "600",
    justifyContent: "center",
    maxWidth: '124px'
  },
  ordersStatus: {
    justifyContent: "end",
    alignItems: "center",
    borderRadius: "8px",
    background: "#e1ffc9",
    // backgroundColor: "#e1ffc9",
    display: "flex",
    gap: "8px",
    // padding: "8px"
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
  customerName: {
    width: "132px",
    textAlign: "center",
display:"flex",
justifyContent:"center"

  },
  requestName: {
    width: "240px",
    fontWeight: "600",
    textAlign: "right",
   
  },
  orderNumber: {
    whiteSpace: "nowrap",
    // display:"flex",
    justifyContent:"center",
    width: "80px",
    textAlign: "center"

  },
  "@media (max-width: 991px)": {
    price: {
      whiteSpace: "nowrap"
    },
    orderNumber: {
      whiteSpace: "nowrap"
    }
  }
};
const orderDataArray = [
  {
    recentUpdate: "منذ ساعتين",
    rentDuration: "3 ايام",
    price: "$0000",
    status: "حجز منتهي",
    customerName: "MR المصطفى",
    requestName: "اسم المنتج وقد يمتد اسم المنتج الى سطرين ثم ...",
    orderNumber: "0000",
    inrecord: "الطلبات الملغاة",
    notinrecord: "الطلبات الجديدة",
 

  },
  {
    recentUpdate: "منذ ساعتين",
    rentDuration: "3 ايام",
    price: "$0000",
    status: "حجز منتهي",
    customerName: "عصام المصطفى",
    requestName: "اسم المنتج وقد يمتد اسم المنتج الى سطرين ثم ...",
    orderNumber: "0000",
    inrecord: "",
    notinrecord: "الطلبات النشطة",
 
  },
  {
    recentUpdate: "منذ يومين",
    rentDuration: "5 ايام",
    price: "$5000",
    status: "حجز نشط",
    customerName: "أحمد العلي",
    requestName: "منتج آخر قد يمتد إلى سطرين أيضا ...",
    orderNumber: "0001",
    inrecord: "الطلبات المنتهية",
    notinrecord: "",
 
  },
  // Add more orders as needed
];
function RequestDetails1({data , activeFilterText}) {
const {all_closedorders,seller_CancelledOrders,rented_orders,new_orders,seller_orders}=useSelector((state) => state.seller_orders);
const userId = 'zTC4dLSjCIS2I3YAl9QTJUkro0p2'; // Replace with dynamic user ID
const dispatch=useDispatch()
  useEffect(() => {
       dispatch(getRentedOrders(userId));
       dispatch(getSellerCancelledOrders(userId));
       dispatch(ClosedOrders(userId));
dispatch(getSellerOrders(userId))
dispatch(getNewOrders(userId))
     
 
     }, [dispatch]);
   
     const filteredData = useMemo(() => {
      // Filter based on activeTop
      const filteredData_1 = data.filter(order => {
        if (activeFilterText === 'الطلبات الملغاة') {
          return order.status==="cancelled";
        } else if (activeFilterText === 'الطلبات المنتهية') {
          return order.status==="closed";
        } 
        
        return true; // Return all if none of the conditions match
      });
      return filteredData_1;
    }, [activeFilterText, data]);
    
  
    const [orders, setOrders] = useState(data);
  
    useEffect(() => {
      setOrders(filteredData); // Update users when filteredData changes
    }, [filteredData]);




  const [ShowDetails, setShowDetails] = useState({});



  const toggleDetails = (index) => {
    setShowDetails(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
 <> 
    {orders.map((order, index) => (
     <div key={index} style={styles.maincontainer}>
    
        <div  style={styles.completedOrders}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54f58e923871ae80039034396440365fb8d6bf30c397866b47d435b43bf1df8b?placeholderIfAbsent=true&apiKey=d450998b662b4d7f9d8aea2e6e480818"
            style={styles.img}
            alt=""
            onClick={() => 
             { toggleDetails(index)
              // console.log(order.id)
               dispatch(SellerbyId(order.sellerid))
                            dispatch(productbyId(order.productid))
                            dispatch(customerbyId(order.customerid))}
            }
          />
          <div className='hide' style={styles.recentupdate}>{order.recentUpdate ||'empty'}</div>
          <div className='hide' style={styles.rentduration}>{order.rentDuration ||'empty'}</div>
          <div className='hide' style={styles.price}>{order.price ||'empty'}</div>
          <div className='hide' style={styles.statusWrapper}>
            <div className='hide' style={styles.ordersStatus}>
              {/* <div style={styles.statusText}>{order.status}</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e943664f6e0d3b298c1d4daee8ccd132a0040f966963f08641a5a8df90278310?placeholderIfAbsent=true&apiKey=d450998b662b4d7f9d8aea2e6e480818"
                style={styles.statusIcon}
                alt=""
              /> */}
              {order.status==="pending" ?
              <img style={{width:"100%"}} src='https://res.cloudinary.com/dbztvm0io/image/upload/v1741538281/%D8%A7%D9%84%D8%B7%D9%84%D8%A8%D8%A7%D8%AA_-_%D8%A7%D8%AF%D9%85%D9%86_%D8%AD%D8%AC%D8%B2_%D8%AC%D8%AF%D9%8A%D8%AF_%D8%B3%D9%87%D9%85_lrx1l6.png' alt='new order'/>
              
              
              
              :order.status==="closed" ?
            <img style={{width:"100%"}} src='https://res.cloudinary.com/dbztvm0io/image/upload/v1741538281/%D8%A7%D9%84%D8%B7%D9%84%D8%A8%D8%A7%D8%AA_-_%D8%A7%D8%AF%D9%85%D9%86_-_%D8%AD%D8%AC%D8%B2_%D9%85%D9%86%D8%AA%D9%87%D9%8A_%D8%B3%D9%87%D9%85_xqn7jg.png' alt=''/>:
            
            order.status==="active" ?
            <img style={{width:"100%"}} src='https://res.cloudinary.com/dbztvm0io/image/upload/v1741538282/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA_-_%D8%A7%D8%AF%D9%85%D9%86_-_%D8%AD%D8%AC%D8%B2_%D9%86%D8%B4%D8%B7_%D8%B3%D9%87%D9%85_d0ednz.png' alt='active'/>:
            <img style={{width:"100%"}} src=' https://res.cloudinary.com/dbztvm0io/image/upload/v1741538281/%D8%A7%D9%84%D8%B7%D9%84%D8%A8%D8%A7%D8%AA_-_%D8%A3%D8%AF%D9%85%D9%86_-_%D8%AD%D8%AC%D8%B2_%D9%85%D9%84%D8%BA%D9%8A_%D8%B3%D9%87%D9%85_vovkjr.png' alt='cancled'/>
            
            
            }
            </div>
          </div>
          <div className='hide' style={styles.customerName}>{order.customername ||'empty'}</div>
          <div  style={styles.requestName}>{order.requestName ||'empty'}</div>
          <div className='hide' style={styles.orderNumber}>{order.ordernumber ||'empty'}</div>
        </div>
          {/* Render OrderSummary inside the completedOrders div */}
          {ShowDetails[index] && (
            <OrderSummary orderData={order} />
          )}
     </div>
        ))}
        </>
  );
}

export default RequestDetails1;