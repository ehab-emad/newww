import styled from "styled-components";
import { FaArrowRight } from 'react-icons/fa';
import { useState } from "react";
import '../../App.css'


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
      // display: 'flex',
      minWidth: '240px',
      flexWrap:"wrap",
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
      // flexWrap:"wrap",
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

 

const ProductListingFilter = ({ handlebuttonclick, filterbuttons,  title }) => {

const[IsOpen,setIsOpen]=useState(false)
  const InSmall = styled.div`
    // display : flex ;
    flex-direction : row-reverse;
    align-items : center;
    @media (min-width : 450px) {
        display : none;
    }
  `
  const InBig = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    align-self: stretch;
    gap: 4px;
    overflow: hidden;
    font-size: 14px;
    margin: auto 0;
    padding: 8px;
    background: #F6F5F5;
    @media (max-width : 450px) {
        display : none;
    }
`




  return (

    <div style={PendingButtonsStyle.container}>
            <InSmall onClick={() => setIsOpen(!IsOpen)}>
       <div style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}> <p style={{margin : '0px' , fontSize : '18px' , fontWeight : '700' , color : '#26969c'}}>activeButton</p>
       <FaArrowRight style={{ width: '15px', height: '15px', cursor: 'pointer' }}  /></div>
        <div className="filtersmall">   
        {IsOpen &&   (filterbuttons.map((buttonData, index) => (
 <button
     key={index}
     className="button_filter" // Use isActive from buttonData
     onClick={() => handlebuttonclick(index)} // Only pass index to handleButtonClick
     role="button"
     tabIndex={0}
     aria-pressed={buttonData.isActive}
   >
     {buttonData.text}
   </button>
      )))
        
      }</div>
    </InSmall>
    <InBig style={PendingButtonsStyle.filterContainer} className="filterss hide">
      {filterbuttons.map((buttonData, index) => (
        <button
          key={index}
          style={PendingButtonsStyle.button(buttonData.isActive)} // Use isActive from buttonData
          onClick={() => handlebuttonclick(index)} // Only pass index to handleButtonClick
          role="button"
          tabIndex={0}
          aria-pressed={buttonData.isActive}
        >
          {buttonData.text}
        </button>
      ))}
    </InBig>
   
    <h1 style={PendingButtonsStyle.title}>{title}</h1>
  </div>

  );
};

export default ProductListingFilter;