import { useDispatch, useSelector } from "react-redux";
import NotificationList from "./NotificationList";
import { AdminNotifications } from "../../../store/reducers/sellerStuffReducer";
import { useEffect } from "react";

const NotificationsWindowAdmin = ({close, setCurrentPage,CountNotifications, notifications}) => {
  const styles = {

    overlay: {
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
      zIndex: 100
    },
    notificationsMenu: {
      borderRadius: '16px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      display: 'flex',
      width: 'auto',
      height : ' 400px',
      flexDirection: 'column',
      overflow: 'auto',
      overflowY: 'scroll', // Enable vertical scrolling
      fontFamily: 'Expo Arabic, sans-serif',
      fontWeight: 400,
      justifyContent: 'start',
      padding: '16px',
      border: '2px solid rgba(244, 245, 248, 1)',
      position: 'fixed',
      top: '20px', // Adjust the vertical position
      // right: '1120px', // Adjust the horizontal position
      zIndex: 1000, // Ensure it appears above other element
      
    },
    header: {
      padding: '8px 0',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
      display: 'flex',
      width: '100%',
      gap: '40px 100px',
      fontSize: '18px',
      color: 'var(--Text, #252422)',
      whiteSpace: 'nowrap',
      textAlign: 'right'
    },
    notificationIcon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '24px',
      alignSelf: 'stretch',
      margin: 'auto 0',
      cursor : 'pointer'
    },
    notificationTitle: {
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    emptyState: {
      alignSelf: 'stretch',
      borderRadius: '16px',
      background: 'var(--BG-gray, #f6f5f5)',
      backgroundColor: 'var(--BG-gray, #f6f5f5)',
      marginTop: '16px',
      width: '100%',
      gap: '24px',
      fontSize: '14px',
      color: 'var(--Paragraph, #736e67)',
      textAlign: 'center',
      padding: '16px'
    }
  };


  // const {admin_notification} = useSelector((state ) => state.seller_stuff);
  // console.log('all notifica,tions and tickets are', admin_notification)

  // const dispatch = useDispatch();

  // useEffect(() => {

  //   dispatch(AdminNotifications('zTC4dLSjCIS2I3YAl9QTJUkro0p2'))


  // }, []);
  return (
    
<div style={styles.overlay}>

    <div style={styles.notificationsMenu}>
      <div style={styles.header}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee4b3fd47ebfa1e941421a5a5bc1d336efbc811cf9e81e4b3316c9aacfde3bc?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
          alt="Notifications icon"
          style={styles.notificationIcon}
          onClick={close}        
          />
        <div style={styles.notificationTitle}>الاشعارات</div>
      </div>

    {notifications.length > 0 ?  <NotificationList notifications={notifications} setCurrentPage={setCurrentPage} close={close}/> : 
      <div style={styles.emptyState}>
        لا يوجد لديك اي اشعارات حاليا
      </div>
     }
    </div>
  </div> 
  );
};

export default NotificationsWindowAdmin;