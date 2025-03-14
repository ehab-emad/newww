import FormField from './FormField';
import {  useState } from "react";

const styles = {

    container :{

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Expo Arabic, sans-serif',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    profileContainer: {
        
      borderRadius: '24px',
      background: '#fff',
      boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.04)',
      display: 'flex',
      maxWidth: '620px',
      flexDirection: 'column',
      fontFamily: 'Expo Arabic, sans-serif',
      padding: '24px',
      overflow: 'hidden', // Set overflow to hidden
      height: 'auto',
      gap: ' 32px',
      
    },
    profileHeader: {
      paddingBottom: '8px',
      justifyContent: 'end',
      alignItems: 'center',
      borderBottom: '1px solid rgba(0, 47, 54, 0.08)',
      display: 'flex',
      width: 'auto',
      gap: '8px',
      fontSize: '24px',
      color: '#252422',
      fontWeight: 600,
      textAlign: 'right',
    },
    headerIcon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '32px',
      alignSelf: 'stretch',
      margin: 'auto 0',
      cursor: 'pointer'
    },
    closeIcon: {
      width: '24px',
    },
    headerTitle: {
      flex: 1,
      margin: 0,
      fontSize: '24px',
    },
    profileContent: {
      display: 'flex',
      width: 'auto',
      flexDirection: 'column',
      fontSize: '14px',
      lineHeight: 1,
      boxSizing: 'border-box', // Include padding and borders in width calculations
    },
    roleField: {
      display: 'flex',
      minHeight: 'auto',
      width: 'auto',
      flexDirection: 'column',
      textAlign: 'right'
    },
    roleValue: {
      justifyContent: 'end',
      borderRadius: '16px',
      background: '#f2fbfa',
      display: 'flex',
      marginTop: '8px',
      width: 'auto',
      color: '#09262a',
      fontWeight: 500,
      padding: '16px',
    },

    deactivateSection: {
      justifyContent: 'end',
      alignItems: 'center',
      borderRadius: '24px',
      border: '1px solid rgba(0, 47, 54, 0.08)',
      background: '#fff',
      display: 'flex',
      width: 'auto',
      height: 'auto',
      gap: '24px',
      padding: '16px',
    },
    deactivateButton: {
      alignSelf: 'stretch',
      borderRadius: '50px',
      background: '#FAE4E4',
      border: 'none',
      gap: '8px',
      fontSize: '16px',
      color: '#D61B1B',
      fontWeight: 400,
      textAlign: 'center',
      margin: 'auto 0',
      padding: '16px 40px',
      cursor: 'pointer',
    },
    activateButton: {
      alignSelf: 'stretch',
      borderRadius: '50px',
      background: '#E1FFC9',
      border: 'none',
      gap: '8px',
      fontSize: '16px',
      color: '#4A9908',
      fontWeight: 400,
      textAlign: 'center',
      margin: 'auto 0',
      padding: '16px 40px',
      cursor: 'pointer',
    },
    deactivateInfo: {
      alignSelf: 'stretch',
      display: 'flex',
      minWidth: '240px',
      flexDirection: 'column',
      color: '#252422',
      flex: 1,
    },
    deactivateTitle: {
      fontSize: '24px',
      fontWeight: 600,
      alignSelf: 'end',
      margin: 0,
    },
    deactivateDescription: {
      textAlign: 'right',
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: 1,
      margin: '8px 0 0',
      color: ' #252422'
    },
  };



const EmployeeForm = ({user ,close, ChangeStatus}) => {
    const [userstatus , setuserstatus] = useState(user.active);
  
  const ActivateDactivate = (Id) => {
    ChangeStatus(Id)
    setuserstatus(!userstatus)

  };
  return (

      <div
        style={styles.container}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-modal="true"
      >
    <div style={styles.profileContainer}>
      <header style={styles.profileHeader}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7067e953b5cfa95f77ddcdb7033f1cbc4e1ede3ada889d30aa42dbc032cbe9ef?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          alt=""
          style={styles.headerIcon}
          onClick={close}

        />
        <h1 style={styles.headerTitle}>بيانات الموظف</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf711b1c51ce74d2d2e8f35de3849c60e9ae98af6f35db04a5405982c029850e?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          alt=""
          style={styles.closeIcon}
        />
      </header>

      <div style={styles.profileContent}>
        <FormField label="اسم الموظف" value={user.name} />
        <FormField label="البريد الإلكتروني" value={user.email} />
        <FormField label="رقم الجوال" value={user.phone} />

        <div style={styles.roleField}>
          <div style={styles.formLabel}>الدور الوظيفي</div>
          <div style={styles.roleValue}>
        
            <span>{user.role}</span>
          </div>
        </div>
      </div>

      <div style={styles.deactivateSection}>
          {userstatus ? 
           <button
              style={styles.deactivateButton} 
              tabIndex="0"
              onClick={() => ActivateDactivate(user.id)} // Fix here
              >
            تعطيل الحساب
          </button> 
          
          : (


           <button
              style={styles.activateButton} 
              tabIndex="1"
              onClick={() => ActivateDactivate(user.id)} // Fix here
              >
                تفعيل  الحساب
           </button> 

          )}

          {userstatus ? 
              <div style={styles.deactivateInfo}>
                  <h2 style={styles.deactivateTitle}>تعطيل الحساب</h2>
                  <p style={styles.deactivateDescription}>
                    هل ترغب في تعطيل حساب هذا الموظف؟
                  </p>
              </div>
          
          : (


            <div style={styles.deactivateInfo}>
                <h2 style={styles.deactivateTitle}>تفعيل الحساب</h2>
               <p style={styles.deactivateDescription}>
               هر ترغب في تفعيل حساب هذا المستخدم؟                
                </p>
              </div>

          )}
       
      </div>
    </div>
    </div > 
  );
};

// Styles as a JavaScript object


export default EmployeeForm;