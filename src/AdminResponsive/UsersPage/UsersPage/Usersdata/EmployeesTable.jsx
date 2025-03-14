import styles from "./UsersTable.module.css";
import {  useState,useEffect } from "react";
import {EmployeesCard} from "../UserCard/EmployeesCard";
import { useDispatch, useSelector } from "react-redux";
import { AllEmployees, UpdateemployeeAdmin } from "../../../../store/reducers/sellerProductsReducer";
import styled from "styled-components";

const stylesHeader = {
  productsFilter: {
    // Display: 'flex',
    justifyContent: 'start',
    flexDirection: 'row-reverse', // Reverse the row direction
    alignSelf: 'stretch',
    borderRadius: '16px',
    // display: 'flex',
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
    width: '20%',
  },
  discount: {
    width: '80px',
  },
  price: {
    width: '20%',
    whiteSpace: 'nowrap',
    display: 'flex',

  },
  brand: {
    width: '20%',
  },
  category: {
    width: '20%',
  },
  productStatus: {
    width: '20%',
  },

  name: {
    width: '20%',
    textAlign: 'right',
  },
};


export const EmployeesTable = ({newEmployee}) => {
    const {  newDataemployee,employees} = useSelector((state) => state.seller_products);
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
      
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(AllEmployees()); // تحميل البيانات عند أول ريندر

}, [dispatch]);



  const [EmployeesData, setEmployeesData] = useState(employees); // Run this effect when newUser changes


  const removeUser = (Id) => {
    setEmployeesData((prevOwners) => prevOwners.filter(user => user.id !== Id));
  };



  const Changeactive = async(id) => {
  
  

      const user = employees.find(user => user.id === id.id); 
  console.log(user.active)
      if (!user) return employees;
    if(user.active===true){
      const employeeData = { ...user,active:false}; 
        
      await    dispatch(UpdateemployeeAdmin({id:id.id,employeeData}))
      await   dispatch(AllEmployees())
    //  await console.log(sellerData)
  
  
    }
    else {
     const  employeeData = { ...user, active:true}; 
     await   dispatch(UpdateemployeeAdmin({id:id.id,employeeData}))
     await   dispatch(AllEmployees())
    //  awaitconsole.log(sellerData)
  
    }
      
   
  
  
    
      // setUsers((prevOwners) =>
      //     prevOwners.map(user =>
      //         user.id === Id
      //             ? { ...user, status: user.status === 'approved' ,active:"true"}
      //             : user
      //     )
      // );
    
  };

  
  return (
    <>
  <div className={stylesHeader.productsFilter}>
        <div 
        role="list"
        aria-label="Product filters"
        dir="rtl"
        style={stylesHeader.productsFilter}
        className="hide"
        >
            <div 
              role="listitem" 
              aria-label="إجراءات"
              style={stylesHeader.actions}
            >
             إجراءات
            </div>
            
            <div 
              role="listitem" 
              aria-label="السعر"
              style={stylesHeader.price}
            >
              تاريخ الإنضمام
            </div>
            <div 
              role="listitem" 
              aria-label="الماركة"
              style={stylesHeader.brand}
            >
              رقم الجوال
            </div>
            <div 
              role="listitem" 
              aria-label="حالة المنتج"
              style={stylesHeader.productStatus}
            >
              البريد الإلكتروني
            </div>
            <div 
              role="listitem" 
              aria-label="التصنيف"
              style={stylesHeader.category}
            >
              الدور الوظيفي
            </div>

            <div 
              role="listitem" 
              aria-label="الصورة"
              style={stylesHeader.name}
            >
                الاسم            
          </div>
      </div>
  </div>
      {
        employees.length != 0
        ?
        (
          employees.map((user) => (
          <EmployeesCard key={user.id}  user = {user} removeUser={removeUser}  Changeactive = {Changeactive} />))
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

