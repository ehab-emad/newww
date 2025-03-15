import { useEffect, useState } from "react";
import styles from "./TicketCard.module.css";
import { TicketDetails } from "./TicketDetails";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { border, color, padding } from "@mui/system";
// import { GetAllTickets } from "../../../../../trenttest/reducers/sellerStuffReducer";

export const TicketCard = ({
  ticketid,
  username,
  usertype,
  updatedAt,
  createdAt,
  active,
  title,
  ticketnumber,
  images,
  description,
  chat,
  changeStatus,
  addCommenet,
}) => {

  const [isDropDownShown , setDropDown] = useState(false);
  const dispatch=useDispatch()
  const [seeDetails , setSeeDetails] = useState(false);
   const {  Add_comment } = useSelector((state) => state.seller_products);
 useEffect(()=>{


  // dispatch(GetAllTickets("kjh"))
 },[Add_comment])
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    if (timestamp.seconds && timestamp.nanoseconds) {
        const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
        return date.toLocaleDateString(); // يعرض التاريخ فقط بدون الوقت
    }
    return timestamp;
};
  const changeVisability = () => {
    setDropDown(!isDropDownShown);
  }
  const changeDetailsVisability = () => {
    setSeeDetails(!seeDetails);
  }
  const dropstyles = {
    statusDropDownStyle: {
      position: "absolute",
      top: "100%",
      right: "0",
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      minWidth: "120px",
      textAlign: "center",
      zIndex: 1000,
    },
    buttonStyle: {
      backgroundColor: "#007bff",
      color: "#ffffff",
      border: "none",
      borderRadius: "6px",
      padding: "8px 12px",
      cursor: "pointer",
      margin: "5px 0",
      fontSize: "14px",
      width: "100%",
      transition: "background-color 0.3s ease",
    },
  };
  
  const BigScreen = styled.div`
    display : block;
    @media (max-width : 880px) {
      display : none;
    }
  `
  const SmallScreen = styled.div`
    display : none;
    @media (max-width : 880px) {
      display : block;
    }
  `
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
        display:"flex",
        justifyContent:"center",
        background: 'transparent',
        textAlign: ' center'
      },      filterimages: {
        width : '14%',
        position:"relative",
        display:"flex",
        justifyContent:"center",
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
      
  return (  
    <div className={`${styles.placeHolder} ${seeDetails ? styles.selected : undefined}`}>


      <BigScreen>
      <div
      className={`${styles.ticketCard}`}
    >
      <div style={styless.filterItem}>{ticketnumber || "empty"}</div>
      <div style={styless.filterItem}>{title || "empty"}</div>
      <div style={styless.filterimages} onClick={changeVisability}>
        <div >
        <div >
          {active ===false ?
               <img style={{width:"90%",height: '100%'}}
               loading="lazy"
               src={"https://res.cloudinary.com/dbztvm0io/image/upload/v1741538281/%D8%B4%D9%83%D8%A7%D9%88%D9%8A_-_%D8%A7%D8%AF%D9%85%D9%86_-_%D9%85%D9%86%D8%AA%D9%87%D9%8A%D8%A9_%D8%B3%D9%87%D9%85_olzlrd.png"}
               className={styles.statusIcon}
               alt=""
             />:<img style={{width:"100%",height: '100%'}}
             loading="lazy"
             src={"https://res.cloudinary.com/dbztvm0io/image/upload/v1741538281/%D8%B4%D9%83%D8%A7%D9%88%D9%8A_-_%D8%A7%D8%AF%D9%85%D9%86_-_%D9%82%D9%8A%D8%AF_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9_%D8%B3%D9%87%D9%85_yyodba.png"}
             className={styles.statusIcon}
             alt=""
           />
        
        }
       
           
          </div>
          {/* this is the button where the user will press to change the statue */}
          <button className={styles.button} >
       
          </button>
          {/* this is the drop down where the user can choose between to status */}

          {isDropDownShown &&
            <div style={dropstyles.statusDropDownStyle}>
              <button 
              style={dropstyles.buttonStyle} 
              onClick={() => { changeStatus(ticketid , true)
                console.log(false)
                changeVisability() ;
              }} 
              >قيد المراجعه
              
              </button>
              <button style={dropstyles.buttonStyle} onClick={() => {changeVisability() ; changeStatus(ticketid , false)}}>مغلقه</button>
            </div>
          }

        </div>
      </div>
      <div style={styless.filterItem}>{formatTimestamp(createdAt)  ||"empty"}</div>
      <div style={styless.filterItem}>{formatTimestamp(updatedAt) ||"empty"}</div>
      {/* this is the button where the user will press to see the card details */}
      <button className={styles.button} onClick={changeDetailsVisability}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba46c6258edc43c97407c644dd100193a11504a5317d3de870704110203e9b84?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"
          className={styles.icon}
          alt=""
        />
      </button>
      </div>
      </BigScreen>
      <SmallScreen>
      <div style={{direction : 'rtl', display : 'flex' ,padding:"20px", alignItems: "center" , gap : '16px' , justifyContent : 'space-between' , flexDirection : 'row'}}>

     
      <div style={{width:"40%"}}> <div className={styles.title}>{title||"empty"} : <span style={{color : 'grey',display:"block"}}>  اسم الشكوي</span></div>

      
<div className={styles.ticketNumber}>{ticketnumber||"empty"} : <span style={{color : 'grey',display:"block"}}> رقم التذكرة</span></div></div>
     
             
         
          
<div style={{maxWidth:"125px",minWidth:"100px"}} onClick={changeVisability}>
        <div  style={{position:"relative"}}>
        <div >
          {active ===false ?
               <img style={{width:"90%",height: '100%'}}
               loading="lazy"
               src={"https://res.cloudinary.com/dbztvm0io/image/upload/v1741538281/%D8%B4%D9%83%D8%A7%D9%88%D9%8A_-_%D8%A7%D8%AF%D9%85%D9%86_-_%D9%85%D9%86%D8%AA%D9%87%D9%8A%D8%A9_%D8%B3%D9%87%D9%85_olzlrd.png"}
               className={styles.statusIcon}
               alt=""
             />:<img style={{width:"100%",height: '100%'}}
             loading="lazy"
             src={"https://res.cloudinary.com/dbztvm0io/image/upload/v1741538281/%D8%B4%D9%83%D8%A7%D9%88%D9%8A_-_%D8%A7%D8%AF%D9%85%D9%86_-_%D9%82%D9%8A%D8%AF_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9_%D8%B3%D9%87%D9%85_yyodba.png"}
             className={styles.statusIcon}
             alt=""
           />
        
        }
       
           
          </div >
          {/* this is the button where the user will press to change the statue */}
          <button className={styles.button} >
       
          </button>
          {/* this is the drop down where the user can choose between to status */}

          {isDropDownShown &&
            <div style={dropstyles.statusDropDownStyle}>
              <button 
              style={dropstyles.buttonStyle} 
              onClick={() => { changeStatus(ticketid , true)
                console.log(false)
                changeVisability() ;
              }} 
              >قيد المراجعه
              
              </button>
              <button style={dropstyles.buttonStyle} onClick={() => {changeVisability() ; changeStatus(ticketid , false)}}>مغلقه</button>
            </div>
          }

        </div>
      </div>
      <button className={styles.button} onClick={changeDetailsVisability}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba46c6258edc43c97407c644dd100193a11504a5317d3de870704110203e9b84?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"
                    className={styles.icon}
                    alt=""
                  />
              </button>

          {/* </div> */}  </div>
      </SmallScreen>

      {/* here will add the componet which will be shown and hidden */}
      {seeDetails && 
            <TicketDetails className={styles.details}
            ticketid = {ticketid}
            username = {username}
            title={title}
            usertype = {usertype}
            images={images}
            description = {description}
            chat={chat}
            addCommenet = {addCommenet}
          />
      }

    </div>
  );
};
