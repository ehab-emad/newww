import {  useState} from "react";
import SettingsCardField from "./SettingsCardField";
import GenderSelector from "./GenderSelector";
import VerificationCode from "./VerificationCode";



const Settings = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [verifycode , setverifycode] = useState(false);

 const  toggleVerification =() => {

    setverifycode(!verifycode)


  }


  const styles = {
    container: {
      borderRadius: '16px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Expo Arabic, sans-serif',
      justifyContent: 'start',
      padding: '16px',
      gap: '24px'
    },
    wrapper: {
        display: 'flex',
        marginTop: '16px',
        width: 'auto',
        gap: '8px',
        fontSize: '14px',
        lineHeight: '1',
        justifyContent: 'end',
        flexWrap: 'nowrap',
      },
    header: {
      paddingBottom: '8px',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
    },
    editButton: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50px',
      background: '#26969C',
      display: 'flex',
      gap: '4px',
      fontSize: '16px',
      color: '#ffffff',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: '9px ',
      cursor: 'pointer',
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '18px',
      color: 'var(--Text, #252422)',
      fontWeight: '400',
      textAlign: 'right',
      justifyContent: 'end',
      flexWrap: 'wrap',
      flex: 1,
      background:' white',
    },
    icon: {
      width: '24px',
    },
    fieldsContainer: {
      // display: 'flex',
      gap: '24px',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'start',
    },
    row: {
      // display: 'flex',
      width: '100%',
      alignItems: 'center',
      gap: '24px',
      justifyContent: 'end',
      flexWrap: 'nowrap',
    },
  };
  const genderstyles = {
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'end',
      flex: 1,
      marginTop:"10px"
    },
    
    labelWrapper: {
      alignSelf: 'end',marginTop:"10px",
      display: 'flex',
      alignItems: 'start',
      gap: '8px',
      fontWeight: '400',
      justifyContent: 'end',
    },
    label: {
      color: 'var(--Text, #252422)',
      fontSize: '16px',
      lineHeight: '1',
    },
    badge: {
      alignSelf: 'stretch',
      borderRadius: '50px',
      background: 'var(--BG-gray, #f6f5f5)',
      gap: '8px',
      overflow: 'hidden',
      fontSize: '12px',
      color: 'var(--Paragraph, #736e67)',
      textAlign: 'center',
      lineHeight: '1',
      padding: '4px 8px',
    },
    input: {
      alignSelf: 'stretch',
      borderRadius: '16px',
      background: 'var(--BG-gray, #f6f5f5)',
      marginTop: '8px',
      width: 'auto',
      gap: '10px',
      fontSize: '14px',
      color: 'var(--Cool, #8d8883)',
      fontWeight: '300',
      lineHeight: '1',
      padding: '16px',
    }
  };

  const phoneNumber = '+966 123 456 789'
  const reversedPhoneNumber = phoneNumber.split('').reverse().join('');

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div 
          style={styles.editButton}
          onClick={setverifycode} 
        
         >
          
          <span>حفظ التعديلات</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b56efa39b879ad1a4065269f971f5b827b4c432ded14eecf527122f483049f3?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6" alt="" style={{ width: '16px' }} />
        </div>
        <div style={styles.titleWrapper}>
          <span>تفاصيل الحساب</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/153d92b9a771df541e6342492453771c77aad84a0e08110e7966ac3bf9344464?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6" alt="" style={styles.icon} />
        </div>
      </div>

      <div style={styles.fieldsContainer}>
        <div style={styles.row}>
         
          <SettingsCardField
            label="الاسم"
            initialValue="عصام المصطفى" // Set the initial value here

          />
           <SettingsCardField
            label="رقم الجوال"
            initialValue={phoneNumber} // Set the initial value here

          />
        </div>

        <div style={styles.row}>
          <div style={genderstyles.wrapper}>
            <span style={{ fontSize: '16px' }}>الجنس</span>
            <GenderSelector
              selectedGender={selectedGender}
              onGenderSelect={setSelectedGender}
            />
          </div>
          <SettingsCardField
            label="البريد الإلكتروني"
            value="example@email.com"
            initialValue="example@email.com" // Set the initial value here

          />
        </div>
      </div>
      {verifycode ? <VerificationCode  close={toggleVerification}/> : null 


      }

    </div>
  );
};

export default Settings;