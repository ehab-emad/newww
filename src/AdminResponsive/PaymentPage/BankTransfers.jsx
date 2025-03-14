import BankTransferHeader from "./BankTransferHeader";
import SearchBar from "../SearchBar";
import {  useState,useEffect } from 'react';

  

const styles = {
    div: {
      borderRadius: "24px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Expo Arabic, sans-serif",
      justifyContent: "start",
      padding: "16px",
      overflowX: 'hidden', // Hide horizontal scrollbar
    },
    header: {
      paddingBottom: "8px",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid rgba(0, 47, 54, 0.08)",
      display: "flex",
      width: "100%",
      flexWrap: "wrap",
    },
    button: {
      alignSelf: "stretch",
      borderRadius: "50px",
      background: "#e5f2f3",
      backgroundColor: "#e5f2f3",
      gap: "8px",
      fontSize: "14px",
      color: "#27989e",
      fontWeight: "500",
      textAlign: "center",
      margin: "auto 0",
      padding: "16px 24px",
    },
    div2: {
      alignSelf: "stretch",
      display: "flex",
      minWidth: "240px",
      alignItems: "center",
      gap: "8px",
      fontSize: "18px",
      color: "#252422",
      fontWeight: "400",
      textAlign: "right",
      justifyContent: "end",
      flexWrap: "wrap",
      flex: 1,
      flexBasis: "48px",
      margin: "auto 0",
    },
    bankAccounts: {
      alignSelf: "stretch",
      flex: 1,
      flexBasis: "0%",
      margin: "auto 0",
    },
    img: {
      aspectRatio: "1",
      objectFit: "contain",
      objectPosition: "center",
      width: "24px",
      alignSelf: "stretch",
      margin: "auto 0",
    },
    noAccounts: {
      borderRadius: "16px",
      border: "1px solid rgba(0, 47, 54, 0.08)",
      background: "#F6F5F5",
      alignSelf: "end",
      marginTop: "16px",
      width: '100%', // Set to 100% to take full width of the parent
      height: 'auto', // Allow height to adjust based on content
      minWidth: '0', // Ensure no minimum width constraints
      maxWidth: '100%', // Ensure it doesn't exceed parent width
      flexGrow: 1, // Allow it to grow and fill available space
      flexShrink: 0, // Prevent shrinking if there's enough space
      boxSizing: 'border-box', // Include padding and borders in width calculations    fontSize: "14px",
      color: "#8c8b8a",
      fontWeight: "400",
      textAlign: "center",
      padding: "40px 16px",
    },
    "@media (max-width: 991px)": {
      header: {
        maxWidth: "100%",
      },
      button: {
        padding: "0 20px",
      },
      div2: {
        maxWidth: "100%",
      },
      bankAccounts: {
        maxWidth: "100%",
      },
    },
  };

export default function BankTransfers() {

    const [SearchItem, setSearchItem] = useState('')

    return ( 
    <div style={styles.div}>
      <div style={styles.header}>
        <div style={styles.div2}>
          <div style={styles.bankAccounts}>التحويلات المالية</div>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/drpmd9zkk/image/upload/v1735409030/Trent/s3ecojwdmrolmdvoezxx.svg"
            style={styles.img}
            alt="Bank accounts icon"
          />
        </div>
      </div>
      <SearchBar setSearch={setSearchItem}/>
      <BankTransferHeader />
      <div style={styles.noAccounts}>
        لا يوجد لديك اي حسابات حاليا
      </div>
    </div>

);
}