import styles from "./UserCard.module.css";
import { useEffect, useState } from "react";
import DeleteUserPopOut from "../deleteUserPopOut/DeleteUserDialog";
import EditUserPopOut from "../memberDetails/EditUserPopOut";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { countProductsByUserIdAdmin } from "../../../../store/reducers/sellerProductsReducer";


export const UserCard = ({user , removeUser  , toggleUserVerified , toggleUserStatus}) => {

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
      }
      ,
      filtername: {
        width : '41%',
        background: 'transparent',
        textAlign: ' center'
      },
      orderNumber: {
        padding: '0 4px'
      }
    };
    const ProductsFilter = styled.div`
      display: flex;
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
  // state for delete button
  const [isDeleteShown , setDeleteShown] = useState(false);
  const [isopen , setIsOpen] = useState(false);
  const changeDeletePopState = () =>{
    setDeleteShown(!isDeleteShown)
  }
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    if (timestamp.seconds && timestamp.nanoseconds) {
      const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
      return date.toLocaleDateString().split("T")[0]; // Customize the format as needed
    }
    return timestamp;
  };
  // state for edit button
  const [isEditShown , setEditShown] = useState(false);
  const {  count_Products} = useSelector((state) => state.seller_products);
  
  const changeEditPopState = () =>{
    setEditShown(!isEditShown)
  }
  const dispatch=useDispatch()
useEffect(()=>{

},[user])

  const toggleProduct = (productId) => {
    setOpenProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle the clicked product
    }));
  };
  const [openProducts, setOpenProducts] = useState({});

  const getVerificationBadgeClass = () => {
    return user.isVerified ? styles.badgeVerified : styles.badgeUnverified;
  };

  const getVerificationText = () => {
    return user.status==="suspended" || user.status==="rejected" ? <div style={{display:"none"}}></div> :user.status==="approved" ? "مالك موثوق" : "مالك غير موثق";
  };

const   actionsicons= [
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
 <div className={`${styles.card} hide`} >

      {/* conditional rendering componenets */}
      {/* this what pop when you press on delete button */}
      {isDeleteShown && <DeleteUserPopOut member = {user} close = {changeDeletePopState} remove = {removeUser}/>}
      {/* this what pop when you press on edit button */}
      {isEditShown && <EditUserPopOut user = {user} close = {changeEditPopState} toggleUserVerified = {toggleUserVerified} toggleUserStatus = {toggleUserStatus}/>}

      <div className={styles.actions} style={styless.filterItem}>
        {actionsicons.map((action, index) => (
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
      </div>
      <div className={`${styles.cellFixed} hide`} style={styless.filterItem}>{user.rentalsCount ||"empty"}</div>
      <div className={`${styles.cellFixed} hide`} style={styless.filterItem}>{user.productsCount ||"empty"}</div>
      <div className={`${styles.cellWide} hide`} style={styless.filterItem}>{formatTimestamp(user.createdAt)}</div>
      <div className={`${styles.cellWide} hide`} style={styless.filterItem}>{user.phone ||"empty"}</div>
      <div className={`${styles.cellExtraWide} hide`} style={styless.filterItem}>{user.email ||"empty"}</div>
      <div className={styles.userInfo} style={styless.filtername}>
        <div className={styles.userDetails}>
          <div className={styles.badges}>
            <div className={getVerificationBadgeClass()}>
              {getVerificationText()}
            </div>
            {user.status == "suspended" ? <div className={styles.badgeSuspended}>عضو موقوف</div> : user.status == "rejected"  ? <div className={styles.badgeSuspended}>عضو  مرفوض</div> : <div style={{display:"none"}}></div>}
            
          </div>
          <div className={styles.userName}>{user.sellername ? user.sellername :user.customername ? user.customername  :"empty"}</div>
        </div>
        {user.profileimage ?
        <img src={user.profileimage} alt={user.name} className={`${styles.userAvatar} `}  />:
        <img src={"https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"} alt={user.name} className={`${styles.userAvatar} `} />
      
      }
        
      </div>
    </div>
    <div key = {user.id}  className='smallproductcardcover'>
    {isDeleteShown && <DeleteUserPopOut member = {user} close = {changeDeletePopState} remove = {removeUser}/>}
      {/* this what pop when you press on edit button */}
      {isEditShown && <EditUserPopOut user = {user} close = {changeEditPopState} toggleUserVerified = {toggleUserVerified} toggleUserStatus = {toggleUserStatus}/>}

  <div className='smallproductcard'>
  <img src={'https://cdn.builder.io/api/v1/image/assets/TEMP/b96d1ed5b69bb8dcca96ca72efe39f483bf3d84f91f02fd737257c912709c862?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e'} onClick={() =>{ toggleProduct(user.id)
    dispatch(countProductsByUserIdAdmin(user.id))
  }
  } style={{width : '20px' , height : '20px', transform:  "rotate(180deg)" }}/>


  <div className={styles.actions}>
       {actionsicons.map((action, index) => (
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
      </div>
      <div style={styless.filterItem}>{user.productsCount || 0}</div>
      <div className={styles.userInfo} style={styless.filtername}>
        <div className={styles.userDetails}>
          <div className={styles.badges}>
            <div className={getVerificationBadgeClass()}>
              {getVerificationText()}
            </div>
            {user.status == "suspended" ? <div className={styles.badgeSuspended}>عضو موقوف</div> : user.status == "rejected"  ? <div className={styles.badgeSuspended}>عضو  مرفوض</div> : <div style={{display:"none"}}></div>}
            
          </div>
          <div className={styles.userName}>{user.sellername ? user.sellername :user.customername ? user.customername  :"empty"}</div>
        </div>
        {user.profileimage ?
        <img src={user.profileimage} alt={user.name} className={`${styles.userAvatar} `}  />:
        <img src={"https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"} alt={user.name} className={`${styles.userAvatar} `} />
      
      }
        
      </div>
{/* 

 <img
   loading="lazy"
   src={user.avatar}
   alt="Status icon"
  //  style={styles.userAvatar}
 /> */}



{/* <p style={stylesProductCard.productTitle}>{product.title}</p> */}


  </div>
{
openProducts[user.id]  && 
<div style={{display : 'flex' , flexDirection : 'column',position:"relative"}} className='line'>
<div style={{display : 'flex' , flexDirection : 'row-reverse' , justifyContent : 'space-between'}}>
<p style={{direction : 'rtl' , fontSize : 'large' , margin : '5px 0px'}}><span style = {{color : '#736E67'}}> تاريخ الإنضمام : </span> {formatTimestamp(user.createdAt)||"empty"}</p>
<p style={{direction : 'rtl' , fontSize : 'large' , margin : '5px 0px'}}><span style = {{color : '#736E67'}}> رقم الجوال : </span> {user.phone||"empty"}</p>
</div>
<div style={{display : 'flex' , flexDirection : 'row-reverse' , justifyContent : 'space-between'}}>
<p style={{fontSize : 'large' ,direction : 'rtl' , margin : '0px'}}> <span style = {{color : '#736E67'}}> عدد المنتجات :</span> {count_Products||"empty"}</p>
<p style={{direction : 'rtl' , fontSize : 'large' , margin : '0px'}}><span style = {{color : '#736E67'}}>التاخيرات : </span>{user.rentalsCount||"empty"}</p>
</div>
</div>
 
}
 </div></>
  );
};
