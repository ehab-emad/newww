
import { useEffect, useState } from 'react';
import AdminOrdersPage from '../OrderPage/AdminOrderPage';
import AdminUsersPage from '../UsersPage/AdminUsersPage';
import Settings from '../MyAcccount/Settings';
import AdminMainPage from '../MainPage/AdminMainPage';
import { SupportTickets } from '../TicketPage/supportTickets/SupportTickets';
import PaymentPage from '../PaymentPage/PaymentPage';
import Products from '../ProductsPage/Products'
import { Provider, useDispatch } from 'react-redux';
import store from '../../store/index';
// import { getsellers } from '../../../../trenttest/reducers/sellerOrdersReducer';




function RenderPageAdmin({currentPage,setCurrentPage}) {
const dispatch=useDispatch()
  useEffect(() => {

    setCurrentActive(currentPage)
  }, [currentPage]); // Dependency array
  
  const [currentActive, setCurrentActive] = useState('');


  const mainDivStyle = {
    width: '100%', // Take full width of the parent
    gap: '24px',
    display: 'flex',
    flexDirection : 'column',
    overflowY: "scroll",
    scrollbarWidth:"none"       

  };



  const group2 = {
    padding: "16px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column", // Ensure items are in a row
    gap: '16px' // Set the gap between items
  };



  return (
    <Provider store={store}>

    <div style={mainDivStyle} >

         <>

         {currentActive === 'المنتجات' ?(

          <Products />
            
         ):  currentActive === 'المستخدمين' ?  (
          <AdminUsersPage />
          
         ) :currentActive === 'الرئيسية' ?  (
   
          <AdminMainPage />
         
         ) :currentActive === 'المدفوعات' ?  (
         
           <PaymentPage />
         ) : currentActive === 'التقارير والإحصائيات' ?  (
         <div>
  
         </div>
           
         ) :currentActive === 'الشكاوي وتذاكر الدعم' ?  (
          <SupportTickets />
         ) : currentActive === 'الطلبات' ?(
             <>
             <AdminOrdersPage />
       
             </> 
             
         ):currentActive === 'إعدادات الحساب' ?(
          <>
          <div style={group2} >
            <Settings />
          



          </div>

      
        
     
  
        </> 
        
        ):null}
   
       </>



     </div>
     </Provider>
  );
}

export default RenderPageAdmin;

