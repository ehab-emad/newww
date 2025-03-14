
import AddEmployeeForm from './UserCard/AddEmployeeForm'

import { useState } from "react";

const PendingButtonsStyle = {
    container: {
      paddingBottom: '8px',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'stretch',
      borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
      display: 'flex',
      gap: '40px 100px',
      fontFamily: 'Expo Arabic, sans-serif',
      flexWrap: 'wrap',
      width: 'auto',
      minWidth: 'calc(100% - 32px)',
      maxWidth: '100%',
    },
    filterContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50px',
      alignSelf: 'stretch',
      display: 'flex',
      minWidth: '240px',
      gap: '4px',
      overflow: 'hidden',
      fontSize: '14px',
      margin: 'auto 0',
      padding: '8px',
      background: '#F6F5F5'

    },
    title: {
      color: 'var(--Text, #252422)',
      fontSize: '20px',
      fontWeight: '600',
      alignSelf: 'stretch',
      margin: 'auto 0',
    },
    button: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50px',
      alignSelf: 'stretch',
      margin: 'auto 0',
      padding: '8px',
      whiteSpace: 'nowrap',
      backgroundColor: isActive ? '#ffffff' : 'transparent',
      color: isActive ? '#26969c' : '#8d8883',
      fontWeight: isActive ? '600' : '400',
      border: 'none',
      cursor: 'pointer',
      outline: 'none'
    }),
  };
  const styles = {
    button: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50px",
      background: " #e5f2f3)",
      backgroundColor: "var(--Light, #e5f2f3)",
      display: "flex",
      gap: "8px",
      overflow: "hidden",
      color: " #26969c)",
      textAlign: "center",
      padding: "16px 24px",
      font: "600 14px/1 Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif",
      cursor: "pointer",
      border: "none",
    },
    buttonText: {
      alignSelf: "stretch",
      margin: "auto 0",
    },
    buttonIcon: {
      aspectRatio: "1",
      objectFit: "contain",
      objectPosition: "center",
      width: "20px",
      alignSelf: "stretch",
      margin: "auto 0",
      cursor : 'pointer'
    }
  };
 

const EmployeesListingFilter = ({  setnewEmployee , title }) => {


  const [AddEmployee , setAddEmployee] = useState(false);


  const toggleAddEmployee = () =>{
    setAddEmployee(!AddEmployee)
  }




  return (

    <div style={PendingButtonsStyle.container}>
    <button
    
      className="add-employee-button" 
      style={styles.button}
      onClick={toggleAddEmployee}

      >
      <span style={styles.buttonText}>إضافة موظف جديد</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1042c69b60dcca6c9eb195dfe12efc9da09f9a1d7f86e35aaa0ba92d9f772fb3?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
        style={styles.buttonIcon}
        alt=""
        role="presentation"
      />
    </button>
    <h1 style={PendingButtonsStyle.title}>{title}</h1>
    {AddEmployee && <AddEmployeeForm  close = {toggleAddEmployee} setnewEmployee={setnewEmployee} />}

  </div>

  );
};

export default EmployeesListingFilter;