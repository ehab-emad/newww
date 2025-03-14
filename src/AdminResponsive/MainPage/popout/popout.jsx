import styles from './UserCard.module.css';
import IdentitySection from './components/IdentitySection';
import MembershipSection from './components/MembershipSection';
import AccountDetailsSection from './components/AccountDetailsSection';


const backgroundstyles = {

  container :{

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Expo Arabic, sans-serif',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    // height: '219vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }
}
const PopOut = ({close,member, rejection,verified,refused}) => {


  const toggleverified = (id) => {

      verified(id)
      console.log(id)

  }


  return (
    <div
      style={backgroundstyles.container}
      role="dialog"
      className='overflowstatus highstate'
      aria-labelledby="dialog-title"
      aria-modal="true"
    >

 
    <div className={styles.layout}>
      <div className={styles.userCard}>
      
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
      </div>{console.log(member)}

      <div className={styles.contentWrapper}>

        <div style={{ background: ' transparent'}} className='details'>
          <IdentitySection member = {member} />
          <MembershipSection member = {member}  />
        </div>
        
        <AccountDetailsSection member = {member} />
      </div>
          <div className={styles.actionButtons}>
                 <button className={styles.rejectButton } onClick={() =>  {
                   refused(member) 
                   close()
                 }}>رفض توثيق العضوية</button>
                 <button className={ styles.approveButton } onClick={() =>  {verified(member)
                   close()
                 } }>توثيق العضوية</button>
               </div>

      </div>
    </div>
  </div> 
    
  );
};

export default PopOut;