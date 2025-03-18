import styles from "./UsersTable.module.css";
import { useEffect, useState,useMemo } from "react";
import { UserCard } from "../UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { AllCustomers, Allsellers, DeletecustomerAdmin, DeletesellerAdmin, UpdatecustomerAdmin, UpdatesellerAdmin } from "../../../../store/reducers/sellerProductsReducer";
import styled from "styled-components";

const stylesHeader = {
  productsFilter: {
    // Display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse', // Reverse the row direction
    alignSelf: 'stretch',
    borderRadius: '16px',
    // display: 'flex',
    flexwrap: 'nowrap',
    width: '100%',
    // overflowX: 'auto', /* تفعيل التمرير الأفقي */
    whitespace: 'nowrap',/* منع التفاف النصوص */
    gap: '16px',
    color: 'var(--Paragraph, #736e67)',
    textAlign: 'center',
    flexWrap: 'nowrap',
    font: '400 14px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif',

  },
  filterItem: {
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  actions: {
    width: '124px',
  },
  discount: {
    width: '80px',
  },
  price: {
    width: '80px',
    whiteSpace: 'nowrap'
  },
  brand: {
    width: '124px',
  },
  category: {
    width: '140px',
  },
  productStatus: {
    width: '124px',
  },

  name: {
    width: '272px',
    textAlign: 'right',
  },
};



export const UsersTable = ({data,activeFilterText}) => {
  
  const {  newDataSeller,delete_customer,delete_Seller,newDataCustomer} = useSelector((state) => state.seller_products);

   const filteredData = useMemo(() => {
    // Filter based on activeTop
    const filteredData_1 = data.filter(user => {
      if (activeFilterText === 'العضويات الغير موثقة') {
        return user.status==="pending";
      } else if (activeFilterText === 'العضويات الموثقة') {
        return user.status==="approved";
      } else if (activeFilterText === 'العضويات المرفوضة / الموقوفة') {
        return user.status === "suspended" || user.status === "rejected";
      }
      return true; // Return all if none of the conditions match
    });
    return filteredData_1;
  }, [activeFilterText, data]);
  

  const [users, setUsers] = useState(data);

// const dispatch=useDispatch()

const dispatch=useDispatch()

  const removeUser = async(id) => {
    if(id.hasOwnProperty("sellername")){
    await  dispatch(DeletesellerAdmin(id.id))
    await  dispatch(Allsellers())
    }
    else{
   await   dispatch(DeletecustomerAdmin(id.id))
   await   dispatch(AllCustomers())
    }
    
 
  };
  const togglerefused = async(id) => {
    if(id.hasOwnProperty("sellername")){
      const user = data.find(user => user.id === id.id); 

      if (!user) return users;
  
      const sellerData = { ...user, status:'rejected',active:false}; 
        
      await dispatch(UpdatesellerAdmin({id:id.id,sellerData}))
     await dispatch(Allsellers())
      console.log(sellerData)
  
    }
    else{
      const user = data.find(user => user.id === id.id); 

      if (!user) return users;
  
      const customerData = { ...user, status:'rejected',active:false}; 
        
    await  dispatch(UpdatecustomerAdmin({id:id.id,customerData}))
    await     dispatch(AllCustomers())
      console.log(customerData)
  
    }


  

  
  
    // setUsers((prevOwners) =>
    //     prevOwners.map(user =>
    //         user.id === Id
    //             ? { ...user, status: user.status === 'approved' ,active:"true"}
    //             : user
    //     )
    // );
  };
  const toggleUserVerified = async(id) => {


    if(id.hasOwnProperty("sellername")){
      
    const user = data.find(user => user.id === id.id); 

    if (!user) return users;
  if(user.active===true){
    const sellerData = { ...user, status:'suspended',active:false}; 
      
   await dispatch(UpdatesellerAdmin({id:id.id,sellerData}))
   await dispatch(Allsellers())
  //  await console.log(sellerData)


  }
  else if(user.active===false){
   const  sellerData = { ...user, status:'approved',active:true}; 
     
   await dispatch(UpdatesellerAdmin({id:id.id,sellerData}));
   await  dispatch(Allsellers())
  //  awaitconsole.log(sellerData)

  }
    }
    else{
      
    const user = data.find(user => user.id === id.id); 

    if (!user) return users;
  if(user.active===true){
    const customerData = { ...user, status:'suspended',active:false}; 
      
    await  dispatch(UpdatecustomerAdmin({id:id.id,customerData}))
    await dispatch(AllCustomers())
    console.log(customerData)


  }
  else if(user.active===false){
   const  customerData = { ...user, status:'approved',active:true}; 
     
   await dispatch(UpdatecustomerAdmin({id:id.id,customerData}))
   await dispatch(AllCustomers())
    console.log(customerData)

  }
    }


  
    // setUsers((prevOwners) =>
    //     prevOwners.map(user =>
    //         user.id === Id
    //             ? { ...user, status: user.status === 'approved' ,active:"true"}
    //             : user
    //     )
    // );
  };
  const styles = {
    transactions: {
      borderRadius: '24px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      display: 'flex',
      flexDirection: 'column',
      color: 'var(--Text, #252422)',
      textAlign: 'right',
      justifyContent: 'start',
      padding: '16px',
      font: '400 14px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif'
    },
    header: {
      paddingBottom: '8px',
      justifyContent: 'end',
      alignItems: 'center',
      borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
      display: 'flex',
      width: '100%',
      gap: '8px',
      fontSize: '18px',
      fontWeight: '500',
      flexWrap: 'wrap'
    },
    headerTitle: {
      alignSelf: 'stretch',
      flex: '1',
      flexBasis: '0%',
      margin: 'auto 0'
    },
    headerIcon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '24px',
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    filterItem: {
      width : '20%',
      background: 'transparent',
      textAlign: ' center'
    },
    filtername: {
      width : '40%',
      background: 'transparent',
      textAlign: ' center'
    },
    orderNumber: {
      padding: '0 4px'
    }
  };
  const ProductsFilter = styled.div`
   
    justify-content: flex-end; /* 'end' should be 'flex-end' */
    border-radius: 16px;
    border: 1px solid transparent;
    background: var(--White, #fff);
    margin-top: 16px;
    width: auto;
    gap: 24px;
    text-align: center;
    flex-wrap: nowrap;
    padding: 8px 16px;
        @media (max-width : 640px) {
          display : none
        }
    `
    

  useEffect(() => {
    setUsers(filteredData); // Update users when filteredData changes
  }, [filteredData,newDataSeller,delete_customer,delete_Seller,newDataCustomer,dispatch]);
  
  return (
    <>
  
  <div style={stylesHeader.productsFilter }>
  <ProductsFilter      className="hide">
    <div style={styles.filterItem}> إجراءات</div>
        <div style={styles.filterItem}>التأجيرات</div>
        <div style={styles.filterItem}> عدد المنتجات </div>
        <div style={styles.filterItem}>تاريخ التسجيل </div>
        <div style={styles.filterItem}>  رقم الجوال</div>
        <div style={styles.filterItem}> البريد الإلكتروني </div>
        <div style={styles.filtername}>  الاسم </div>
    </ProductsFilter>
  </div>
      {
        users.length != 0
        ?
        (
          users.map((user) => (
          <UserCard key={user.id}  user = {user} removeUser={removeUser} toggleUserVerified = {toggleUserVerified} toggleUserStatus = {togglerefused} />))
        )
        :
        (
        <div 
          className={styles.emptyStateMessage}
          role="status"
          aria-live="polite"
          tabIndex="0"
        >
          لا يوجد لديك اي أعضاء حاليا
        </div>
        )
      }
    </>
  );
};

