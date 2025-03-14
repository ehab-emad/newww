
import {  useState } from 'react';
import PaymentServiceCard from './PaymentServiceCard';
import styled from "styled-components";


const MonthlyStatus = {
    number14: {
      alignSelf: "stretch",
      gap: "10px",
      fontSize: "20px",
      color: "var(--Blue, #26969c)",
      fontWeight: 600,
      whiteSpace: "nowrap",

    },
    number24: {
      alignSelf: "stretch",
      gap: "10px",
      fontSize: "20px",
      color: "var(--Blue, #26969c)",
      fontWeight: 600,

    },
    findYourNextMatch: {
      borderRadius: "24px",
      background: "var(--White, #fff)",
      backgroundColor: "var(--White, #fff)",
      display: 'flex', // Enable flexbox layout
      width: 'auto', // Full width of the parent
      minWidth: 'calc(100% - 32px)', // Ensure minWidth accounts for parent's padding
      maxWidth: '100%', // Prevent exceeding parent width
      height: 'auto', // Fixed height for the component
      flexDirection: 'column', // Arrange children in a column
      // overflow: 'hidden', // Prevent overflow
      justifyContent: 'flex-start', // Align content to the start
      padding: '16px', // Padding inside the component
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
      margin: '16px 0px', // Space below the component
      // Additional styles for responsive design
  
    },
    header: {
      paddingBottom: "8px",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))",
      display: "flex",
      width: "100%",
      fontWeight: 400,
      flexWrap: "nowrap",

    },
    filter: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50px",
      background: "var(--BG-gray, #f6f5f5)",
      backgroundColor: "var(--BG-gray, #f6f5f5)",
      alignSelf: "stretch",
      display: "flex",
      Width: "100%",
      gap: "4px",
      overflow: "hidden",
      fontSize: "14px",
      color: "var(--Paragraph, #736e67)",
      whiteSpace: "nowrap",
      lineHeight: 1,
      margin: "auto 0",
      padding: "4px",

    },
    filterButtons: {
      borderRadius: "50px",
      alignSelf: "stretch",
      margin: "auto 0",
      padding: "4px 8px",
      cursor: 'pointer',
    },
    filterButtons2: {
      borderRadius: "50px",
      background: "var(--White, #fff)",
      backgroundColor: "var(--White, #fff)",
      alignSelf: "stretch",
      color: "var(--Blue, #26969c)",
      fontWeight: 600,
      margin: "auto 0",
      padding: "4px 12px",

    },
    div: {
      alignSelf: "stretch",
      display: "flex",
      flexDirection: 'column',
      Width: "100%",
      alignItems: "start",
      gap: "8px",
      fontSize: "18px",
      color: "var(--Text, #252422)",
      textAlign: "right",
      justifyContent: "start",
      flexWrap: "wrap",
      flex: 1,
      flexBasis: "0%",
      margin: "auto 0",
      direction : 'rtl'

    },
    monthSummary: {
      alignSelf: "stretch",
      flex: 1,
      flexBasis: "0%",
      margin: "auto 0",
 
    },
    img: {
      aspectRatio: 1,
      objectFit: "contain",
      objectPosition: "center",
      width: "24px",
      alignSelf: "stretch",
      margin: "auto 0"
    },
    statBox: {
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "16px",
      border: "0.5px solid var(--stroke, rgba(0, 47, 54, 0.24))",
      alignSelf: "stretch",
      display: "flex",
      width: "100%",
      gap: "40px 100px",
      flex: 1,
      flexBasis: "0%",
      margin: "auto 0",
      padding: "24px",

    },
    statIcon: {
      aspectRatio: 1,
      objectFit: "contain",
      objectPosition: "center",
      width: "48px",
      alignSelf: "stretch",
      margin: "auto 0"
    },
    statContent: {
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
      justifyContent: "start",
      margin: "auto 0"
    },
    statLabel: {
      alignSelf: "stretch",
      marginTop: "8px",
      gap: "10px",
      fontSize: "14px",
      color: "var(--Paragraph, #736e67)",
      fontWeight: 300,
      lineHeight: 1
    },

  };

  const initialServiceData = [
    {
      id: 1, // Added id
      title: "تابي",
      description: "مكن عملائك من تقسيم فواتيرهم على 4 دفعات شهرية بدون رسوم او فوائد",
      website: "https://tabby.ai",
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd7f6d43d8d6c8b7fd6777dc16680307b345d3ef92f3a5705079f5009121ece7?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7",
      badgeText: "يتطلب حساب",
      isDefault: false
    },
    {
      id: 2, // Added id
      title: "تمارا",
      description: "مكن عملائك من تقسيم فواتيرهم على 4 دفعات شهرية بدون رسوم او فوائد",
      website: "https://tamara.co",
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/edd3bcea9392bff08387b7d8ecec6a5fd829931a60e66c1909d2ebcdbb55be9d?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7",
      badgeText: "يتطلب حساب",
      isDefault: true
    },
  ];
const PaymentServices = () => {
  const [serviceData, setService] = useState(initialServiceData);

  const toggleServiceState = (id) => {
    setService(prevServiceData => 
      prevServiceData.map(service => ({
        ...service,
        isDefault: service.id === id ? !service.isDefault : service.isDefault // Toggle clicked service and keep others unchanged
      }))
    );
  };



  const StatsContainer = styled.div`
    display: flex;
    margin-top: 16px;
    width: 100%;
    align-items: center;
    text-align: right;
    gap: 24px;
    flex-direction : row;
    @media (max-width: 740px) {
      flex-direction: column; 
    }

  `
  return (
    <div style={MonthlyStatus.findYourNextMatch}>
      <div style={MonthlyStatus.header}>
       
        <div style={MonthlyStatus.div}>
          <div style={MonthlyStatus.monthSummary}>خدمات التقسيط</div>
            <span> فعل أي خيار من خيارات التقسيط الإلكتروني المربوطة في زد لتمكن عملائك من الدفع و إكمال الشراء.</span>
        </div>
      </div>
      <StatsContainer>
      {serviceData.map(service => (
          <PaymentServiceCard
            key={service.id} // Ensure each card has a unique key
            servicedata={service} // Pass the data object
            toggleServiceState={toggleServiceState}
          />
        ))}
      
    
      </StatsContainer>
    </div>
  );
};

export default PaymentServices
