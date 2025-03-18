import styles from "./UserCard.module.css";
import { useEffect, useState } from "react";
import DeleteUserPopOut from "../deleteUserPopOut/DeleteUserDialog";
import EmployeeForm from "./EmployeeForm";
import EditUserPopOut from "../memberDetails/EditUserPopOut";
import { useSelector } from "react-redux";
import styled from "styled-components";


export const EmployeesCard = ({user , removeUser,Changeactive  , ChangeStatus}) => {
    const styless = {
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
        }, filterItem1: {
          width : '20%',
          flexWrap:"nowrap",
          background: 'transparent',
          textAlign: ' center'
        },
        filtername: {
          width : '27%',
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
        
  
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    if (timestamp.seconds && timestamp.nanoseconds) {
      const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
      return date.toLocaleDateString(); // Customize the format as needed
    }
    return timestamp;
  };
  const toggleProduct = (productId) => {
    setOpenProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle the clicked product
    }));
  };
  const [openProducts, setOpenProducts] = useState({});
  // state for delete button
  const [isDeleteShown , setDeleteShown] = useState(false);
  const changeDeletePopState = () =>{
    setDeleteShown(!isDeleteShown)
  }
  // state for edit button
  const [isEditShown , setEditShown] = useState(false);
  const changeEditPopState = () =>{
    setEditShown(!isEditShown)
  }



 const actionicons = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9f949aab8509d00cdae4d92a133ceb848eb6a70fb629e9dba82f55cda2b4a18?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
    label: "Delete",
  },

  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97d9a84c48d3c6e49b06e1aa1b4af9a501149c07fb1cdaafbf871599f22d9fa5?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
    label: "Edit",
  },
]
  return (
<>   
<div key = {user.id}  className='smallproductcardcover'>
{isDeleteShown && <DeleteUserPopOut member = {user} close = {changeDeletePopState} remove = {removeUser}/>}
{/* this what pop when you press on edit button */}
{isEditShown && <EditUserPopOut Changeactive={Changeactive} user = {user} close = {changeEditPopState}  ChangeStatus = {ChangeStatus}/>}
  
  <div className={styles.smallproductcard}>
  <div className={styles.contentsmall}><img src={'https://cdn.builder.io/api/v1/image/assets/TEMP/b96d1ed5b69bb8dcca96ca72efe39f483bf3d84f91f02fd737257c912709c862?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e'} onClick={() => toggleProduct(user.id)} style={{width : '20px' , height : '20px', transform:  "rotate(180deg)" }}/>


<div className={styles.actions}>
     {actionicons.map((action, index) => (
       <button
       key={index}
       className={styles.actionButton}
       onClick={() => {
        if (action.label === "Delete") {
          changeDeletePopState();
        } else if (action.label === "Edit") {
          changeEditPopState();
        }
      }}
     >
       <img src={action.icon} alt={action.label} className={styles.actionIcon} />
     </button>
      ))}
    </div></div>
     
      <div  style={styless.filterItem}>{user.role ||"empty"}</div>

      <div className={styles.userInfo}  style={styless.filtername}>
<div className={styles.userDetails}>
  <div className={styles.badges}>
  {!user.active ? (
        <div className={styles.badgeSuspended}>حساب موقوف</div>
      ) : ( // If user is active and pending
        <div className={styles.badgeActive}>حساب مفعل</div>
       )}
  </div>
  <div className={styles.userName}>{user.name ||"empty"}</div>
</div>
<img src={user.avatar ||  "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2b4b0680dff15b2c6fcd3dfb8d3a35f3aae415d004bfa31262d56859744012?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"} alt={user.name} className={`${styles.userAvatar} `} />
</div>

  </div>
{
openProducts[user.id]  && 
<div style={{display : 'flex' , flexDirection : 'column',position:"relative"}} className='line'>
<div style={{display : 'flex' , flexDirection : 'row-reverse' , justifyContent : 'space-between'}}>
<p style={{direction : 'rtl' , fontSize : 'large' , margin : '5px 0px'}}><span style = {{color : '#736E67'}}> اسم  الموظف : </span> {user.name||"empty"}</p>
<p style={{direction : 'rtl' , fontSize : 'large' , margin : '5px 0px'}}><span style = {{color : '#736E67'}}> رقم الجوال : </span> {user.phone||"empty"}</p>
</div>
<div style={{display : 'flex' , flexDirection : 'row-reverse' , justifyContent : 'space-between'}}>
<p style={{fontSize : 'large' , margin : '0px',direction : 'rtl' }}> <span style = {{color : '#736E67'}}> عدد المنتجات :</span> {user.productsCount||"empty"}</p>
<p style={{direction : 'rtl' , fontSize : 'large' , margin : '0px'}}><span style = {{color : '#736E67'}}>الإيميل : </span>{user.email}</p>
</div>
</div>
 
}
 </div>
<ProductsFilter className={`${styles.card} hide`}>

{/* conditional rendering componenets */}
{/* this what pop when you press on delete button */}
{isDeleteShown && <DeleteUserPopOut member = {user} close = {changeDeletePopState} remove = {removeUser}/>}
{/* this what pop when you press on edit button */}
{isEditShown && <EditUserPopOut Changeactive={Changeactive} user = {user} close = {changeEditPopState}  ChangeStatus = {ChangeStatus}/>}
  
<div className={styles.actions} style={styless.filterItem}>
{actionicons.map((action, index) => (
  <button 
  key={index} 
  className={styles.actionButton} 
  onClick={() => {
    if (action.label === "Delete") {
      changeDeletePopState();
    } else if (action.label === "Edit") {
      changeEditPopState();
    }
  }}
>
    <img
      src={action.icon}
      alt={action.label}
      className={styles.actionIcon}
    />
  </button>
))}
</div>
<div className={`${styles.cellFixed} hide`}  style={styless.filterItem}>{formatTimestamp(user.createdAt) ||"empty"}</div>
<div className={`${styles.cellFixed} hide`}  style={styless.filterItem}>{user.phone ||"empty"}</div>
<div className={`${styles.cellWide} hide`}  style={styless.filterItem}>{user.email ||"empty"}</div>
<div className={`${styles.cellWide} hide`}  style={styless.filterItem}>{user.role ||"empty"}</div>
{/* <div className={`${styles.cellExtraWide} hide`}>{user.email ||"empty"}</div> */}
<div className={styles.userInfo}  style={styless.filtername}>
<div className={styles.userDetails}>
  <div className={styles.badges}>
  {!user.active ? (
        <div className={styles.badgeSuspended}>حساب موقوف</div>
      ) : ( // If user is active and pending
        <div className={styles.badgeActive}>حساب مفعل</div>
       )}
  </div>
  <div className={styles.userName}>{user.name ||"empty"}</div>
</div>
<img src={user.avatar ||  "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2b4b0680dff15b2c6fcd3dfb8d3a35f3aae415d004bfa31262d56859744012?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"} alt={user.name} className={`${styles.userAvatar} `} />
</div>
</ProductsFilter></>
  );
};
