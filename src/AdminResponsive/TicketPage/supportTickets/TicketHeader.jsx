import React from "react";
import styles from "./TicketHeader.module.css";
import styled , {css} from "styled-components";

export const TicketHeader = () => {
  // {isDropDownShown &&
  //   <div style={dropstyles.statusDropDownStyle}>
  //     <button 
  //     style={dropstyles.buttonStyle} 
  //     onClick={() => {changeVisability() ; changeStatus(ticketid , "pending")}} 
  //     >قيد المراجعه
      
  //     </button>
  //     <button style={dropstyles.buttonStyle} onClick={() => {changeVisability() ; changeStatus(ticketid , "close")}}>مغلقه</button>
  //   </div>
  // }
   
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
  const headers = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3095c83b4956fadccc6d04ba498fedf60cc425097eda121f954929515a0f59d0?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      text: "رقم التذكرة",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3095c83b4956fadccc6d04ba498fedf60cc425097eda121f954929515a0f59d0?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      text: "العنوان",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3095c83b4956fadccc6d04ba498fedf60cc425097eda121f954929515a0f59d0?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      text: "الحالة",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bed40f4ee5d5a2de9b23feaffbbd1646cfebbb9169973651f436b309860bb9c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      text: "تاريخ التذكرة",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3095c83b4956fadccc6d04ba498fedf60cc425097eda121f954929515a0f59d0?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      text: "آخر تعديل",
    },
  ];

  const HeaderContainer = styled.div`
  ${css`
    @media (max-width: 880px) {
      display: none !important;
    }
  `}
`;
  return (
    <HeaderContainer className={''}>
     


        <ProductsFilter >
        <div style={styless.filterItem}> آخر تعديل</div>
        <div style={styless.filterItem}>تاريخ التذكرة </div>
        <div style={styless.filterItem}> الحالة</div>
        <div style={styless.filterItem}>اسم الشكوي</div>
        <div style={styless.filterItem}> رقم التذكرة</div>

      </ProductsFilter>
     
    </HeaderContainer>
  );
};
