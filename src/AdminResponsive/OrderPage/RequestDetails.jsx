import {  useState, useMemo, useEffect } from 'react';
import OrderSummary from './OrderSummary';
import { useDispatch, useSelector } from 'react-redux';
import { ClosedOrders, getNewOrders, getRentedOrders, getSellerCancelledOrders, getSellerOrders } from '../../store/reducers/sellerOrdersReducer';
import { display } from '@mui/system';
import { customerbyId, PendingProductsAdmin, productbyId, SellerbyId, UpdateProductAdmin } from '../../store/reducers/sellerProductsReducer';

import '../../App.css'
import AddRequestSummary from '../MainPage/AddRequestSummary';

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50px',
    alignSelf: 'stretch',
    margin: 'auto 0',
    padding: '8px',
    whiteSpace: 'nowrap',
    
    backgroundColor: '#26969c' ,
    color: '#ffffff' ,
    fontWeight:  '600' ,
    outline: 'none'
  },

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
  productImage: {
    width: '64px',
    height: '64px',
    objectFit: 'contain',
  },
  img: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "25px",
    margin: "auto 0",
    marginRight:"10px"
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
    maxWidth: "124px",
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
    width: "20%",
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
function RequestDetails({data,onReviewClick , addOrderToAnotherList,deleteOrderById,ReviewOrder}) {

 

  

  const [ShowDetails, setShowDetails] = useState({});



  const toggleDetails = (index) => {
    setShowDetails(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
 <> 
    {data.map((order, index) => (
     <div key={index} style={styles.maincontainer}>
    
        <div  style={styles.completedOrders}>
 
          <div  style={styles.customerName}><button         onClick={() => 
             { toggleDetails(index)
              onReviewClick()
             }
            } style={styles.button}>مراجعة المنتج</button></div>

          <div className='hide' style={styles.customerName}>{order.recentUpdate ||'empty'}</div>
          <div className='hide'  style={styles.customerName}>{order.price ||0}</div>
          <div  style={styles.customerName}>{order.sellername ||'empty'}</div>
     
          <div className='hide' style={styles.customerName}>{order.brand ||'empty'}</div>
          <div  style={styles.requestName}>{order.name ||'empty'}</div>
          <div style={styles.customerName}><img style={styles.productImage} src={order.img ||"https://cdn.builder.io/api/v1/image/assets/TEMP/eea2576816ccc8b8ac2413c28ee8ce1beb4253d0a89b5307356da91e91a4405a?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"}/></div>
        </div>
          {/* Render OrderSummary inside the completedOrders div */}
          {ReviewOrder && (
            <AddRequestSummary
            product={order} 

            onReviewClick={onReviewClick} 
            addOrderToAnotherList={addOrderToAnotherList} 
            deleteOrderById={deleteOrderById} 
          />
          )}
     </div>
        ))}
        </>
  );
}

export default RequestDetails;