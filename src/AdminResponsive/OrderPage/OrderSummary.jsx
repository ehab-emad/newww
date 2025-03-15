import InvoiceSummary from './OrderSummaryComponents/InvoiceSummary';
import RenterInfo2 from './OrderSummaryComponents/RenterInfo2';
import OwnerInfo from './OrderSummaryComponents/OwnerInfo ';
import RentalDetails from './OrderSummaryComponents/RentalDetails';
import RequestTopSummary from './OrderSummaryComponents/RequestTopSummary';
import ProductDetails from './OrderSummaryComponents/ProductDetails';
import ReceivingAddress from './RecievingAddress';
import '../../App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SellerbyId } from '../../store/reducers/sellerProductsReducer';

const OrderSumaryStyle = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        overflow : 'hidden',
        width: 'auto', // Full width of the parent
        minWidth: 'calc(100% - 32px)', // Ensure minWidth accounts for parent's padding
        maxWidth: '100%', // Prevent exceeding parent width
        backgroundColor: '#e0e0e0', // Main background color
        padding: '10px', // Optional padding
        flexShrink: 0, // Prevent shrinking in flex container
        gap: "10px",
        borderRadius: "30px",

    },
    container: {
        display: 'flex',
        flexWrap:"wrap",
        //backgroundColor:" #767676",

    },
    container1: {
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor:" #777777",
        padding: "8px"

    },
    left: {
        // width: '40%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', // Prevents overflow
        gap: '16px'


    },
    right: {

        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        paddingLeft: '12px',
        borderRadius: '5px',
        overflow: 'hidden', // Prevents overflow
        gap: '16px'



    },
    inner: {
        flexGrow: 1, // This will make the inner components stretch
        padding: '4px',
        borderRadius: '5px',
        display: 'flex', // Optional: make it flexible for content
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
        overflow: 'hidden', // Prevents overflow

    },
    inner2: {
      flexGrow: 1, // This will make the inner components stretch
      padding: '4px',
      borderRadius: '5px',
      display: 'flex', // Optional: make it flexible for content
      alignItems: 'center', // Center content vertically
      justifyContent: 'center', // Center content horizontally
      overflow: 'hidden', // Prevents overflow
      flexDirection: 'column',


  },

};


const OrderSummary = ({orderData}) => {
    const {Sellerby_Id,customerby_Id,productby_Id}=useSelector((state) => state.seller_products);
  console.log(orderData)
  const dispatch=useDispatch()
  useEffect(()=>{
    // dispatch(SellerbyId(orderData.customerid))
  },[])
  return (
    <div style={OrderSumaryStyle.mainContainer}>
      <div style={OrderSumaryStyle.container1}>
        {console.log("fffff",Sellerby_Id)}
        {console.log("ss",customerby_Id)}
        {console.log("aa",productby_Id)}
        <RequestTopSummary orderData={orderData}/>
      </div>
      <div style={OrderSumaryStyle.container}>
        <div style={OrderSumaryStyle.left} className='details'>
            <InvoiceSummary orderData={orderData} />
            <RenterInfo2 orderData={customerby_Id} />
            <OwnerInfo orderData={Sellerby_Id} />

        </div>
        <div style={OrderSumaryStyle.right}>
          <RentalDetails orderData={orderData}/>
          <ReceivingAddress orderData={orderData}/>

          <ProductDetails orderData={productby_Id}/>

        </div>

      </div>
    </div>
  );
};

export default OrderSummary;