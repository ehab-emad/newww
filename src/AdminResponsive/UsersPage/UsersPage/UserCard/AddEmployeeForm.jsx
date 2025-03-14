import {  useEffect, useState } from "react";
// import { addEmployee } from "../../../../../../trenttest/reducers/firebasefunctions";
import { useDispatch, useSelector } from "react-redux";
import { Addingemployee, AllEmployees } from "../../../../store/reducers/sellerProductsReducer";

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
        margin:"24px",
      borderRadius: '24px',
      background: '#fff',
      boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.04)',
      display: 'flex',
      width: '620px',
      minwidth: '320px',
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
      gap: '16px'
    },
    Field: {
      display: 'flex',
      minHeight: 'auto',
      width: 'auto',
      flexDirection: 'column',
      textAlign: 'right',
      outline: 'none'
    },
    Value: {
      justifyContent: 'end',
      borderRadius: '16px',
      background: '#F6F5F5',
      display: 'flex',
      marginTop: '8px',
      width: 'auto',
      color: '#09262a',
      fontWeight: 500,
      padding: '16px',
      border: 'none',   // Remove the border
      direction: 'rtl', // Change text direction her
      
    },
    Valuedropmenu: {
      justifyContent: 'end',
      borderRadius: '16px',
      background: '#f2fbfa',
      display: 'flex',
      marginTop: '8px',
      width: 'auto',
      color: '#D3D3D3',
      fontWeight: 500,
      padding: '16px',
      border: 'none',   // Remove the border
      direction: 'rtl', // Change text direction her
      
    },

    adduserSection: {
      justifyContent: 'end',
      alignItems: 'center',
      borderRadius: '24px',
      border: '1px solid rgba(0, 47, 54, 0.08)',
      background: '#fff',
      display: 'flex',
      width: '100%',
      height: 'auto',
      gap: '24px',
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
    addbutton: {

      display : 'flex',
      flex : 1,
      justifyContent: 'center',
      borderRadius: '50px',
      background: '#26969C',
      border: 'none',
      gap: '8px',
      fontSize: '16px',
      color: '#FFFFFF',
      fontWeight: 400,
      cursor: 'pointer',
    },
    deactivateInfo: {
      alignSelf: 'stretch',
      display: 'flex',
      width:"100%",
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
    buttonText: {
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    icon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '20px',
      alignSelf: 'stretch',
      margin: 'auto 0'
    }
  };



const AddEmployeeForm = ({close , setnewEmployee}) => {
  const {  add_employee} = useSelector((state) => state.seller_products);

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [position, setposition] = useState('');

  const EmployeeModel = {
    name: " ",
    email: "",
    phone: " ",
    registrationDate: "",
    role: " ",
    active: true,
    pending: true,
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2b4b0680dff15b2c6fcd3dfb8d3a35f3aae415d004bfa31262d56859744012?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
  };


const dispatch=useDispatch()
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

console.log(getCurrentDate()); // 2025-03-11 (مثلاً)

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent form submission

    // Create the updated object
    const updatedData = {
      name: input1, // Update phone with the new input
      email: input2, // Update phone with the new input
      phone: input3, // Update phone with the new input
      createdAt: getCurrentDate(),
      idimages:{},
      role: position,
      active: true,
      pending: true,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2b4b0680dff15b2c6fcd3dfb8d3a35f3aae415d004bfa31262d56859744012?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",    
      };
      await dispatch(Addingemployee(updatedData))
      await  dispatch(AllEmployees())



    console.log(updatedData); // Log the updated data
    close()
  };

useEffect(()=>{

},[add_employee,dispatch])

  return (

  <div
    style={styles.container}
    role="dialog"
    aria-labelledby="dialog-title"
    aria-modal="true"
  >
    <form onSubmit={handleSubmit} style={styles.profileContainer}>
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
          <div style={styles.Field}>
            <div style={styles.formLabel}>اسم الموظف</div>
            <input style={styles.Value}
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder='اسم الموظف'
            >
          
            </input>
          </div> 
          <div style={styles.Field}>
            <div style={styles.formLabel}>البريد الإلكتروني</div>
            <input style={styles.Value}
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder='البريد الإلكتروني'

            >
          
            </input>
          </div>  
          <div style={styles.Field}>
            <div style={styles.formLabel}>رقم الجوال</div>
            <input style={styles.Value}
              type="text"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              placeholder='رقم الجوال'

            >
          
            </input>
          </div>  

          <div style={styles.Field}>
            <div style={styles.formLabel}>الدور الوظيفي</div>
            <select
            placeholder='مدير عام، مسؤول منتجات، دعم فني'
            style={styles.Value}
            value={position}
            onChange={(e) => setposition(e.target.value)}
          >
            <option  style={styles.Value} value="مدير عام">مدير عام</option>
            <option  style={styles.Value} value="مسؤول منتجات">مسؤول منتجات</option>
            <option  style={styles.Value} value="دعم فني">دعم فني</option>

          </select>
          </div>        
          
      </div>

      <div style={styles.adduserSection}>
            <button
                    style={styles.addbutton} 
                    tabIndex="0"
                    onClick={handleSubmit}
                     type="submit"

                >
              <span style={styles.buttonText}>إضافة موظف</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4be62c4297ceb8185177bd9315363b52836137093ca4a870a2762f07d0dfb348?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
                style={styles.icon}
                alt=""
              />
          </button> 
       
      </div>
    </form>
  </div > 
  );
};

// Styles as a JavaScript object


export default AddEmployeeForm;