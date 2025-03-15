import styles from './activateDeactivate.module.css';


export default function AccountActivation({user,close ,Changeactive, toggleUserVerified}) {

  return (
    <div className={styles.activationContainer}>
      <button 
        type="button" 
        className={`${styles.button} ${user.active === true ? styles.deactivateButton : styles.activateButton }`}
        onClick={() => {
          if(user.hasOwnProperty("name")){
            Changeactive(user)
          }
          else{
            toggleUserVerified(user)
          }
        
          
          close()
        }}
      >
        {user.active === true ? "تعطيل الحساب" :"تفعيل الحساب" }
      </button>
      <div className={styles.headerContent}>
        <h2 className={styles.activationTitle}> {user.active === true ? "تعطيل الحساب" :"تفعيل الحساب" }</h2>
        <p className={styles.activationDescription}>
        {user.active === true? "هر ترغب في تعطيل حساب هذا المستخدم؟" :"هر ترغب في تفعيل حساب هذا المستخدم؟" }
        </p>
      </div>
    </div>
  );
}