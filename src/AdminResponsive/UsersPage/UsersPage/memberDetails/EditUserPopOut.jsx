import { useState } from "react";
import styles from './EditUserPopOut.module.css';
import IdentitySection from './components/IdentitySection';
import MembershipSection from './components/MembershipSection';
import AccountDetailsSection from './components/AccountDetailsSection';
import AccountActivation from './components/activateDeactivate';
import MemberjobSection from "./components/memberjob";




const EditUserPopOut = ({close,user, Changeactive, toggleUserVerified , toggleUserStatus}) => {

  const [isVisablePop , setIsVesabilePop] = useState(false);


  return (
    <div className={`${styles.layout} overflowstatus`}>
      <div className={`${styles.userCard} topstate`}>
      
      <div className={styles.header}>
        <button onClick={close}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/917964b6a3729f76bd0ca44c485929e963b3288c002b71e1977896c2ba3e28f5?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"
            className={styles.headerIcon}
            alt="User profile icon"
          />
        </button>

        <div className={styles.headerTitle}>بيانات المستخدم</div>
      </div>

      <div style={{display:"flex",flexWrap:"wrap" ,gap:"20px",width:"100%"}}>

        <div className={styles.content0}>
          <IdentitySection user = {user} />{
            user.hasOwnProperty("role")?
            <MemberjobSection member = {user}/>: <MembershipSection member = {user}/>
          }
         
        </div>
        
        <AccountDetailsSection user = {user} />
      </div>
      {/* contitional rendering */}
      {
        user.status === "approved" ||user.hasOwnProperty("name") ||       user.status === "suspended" 
        ? (
            <AccountActivation Changeactive={Changeactive} user = {user} toggleUserVerified = {toggleUserVerified}  close={close}/>
        )
        : 
        user.status === "pending" ||user.hasOwnProperty("name") ?
        
        (
          <div className={styles.actionButtons}>
            <button className={styles.rejectButton } onClick={() =>  {
              toggleUserStatus(user) 
              close()
            }}>رفض توثيق العضوية</button>
            <button className={ styles.approveButton } onClick={() =>  {toggleUserVerified(user)
              close()
            } }>توثيق العضوية</button>
          </div>
          ):<div></div>
       }
      </div>
    </div>
    
  );
};

export default EditUserPopOut;