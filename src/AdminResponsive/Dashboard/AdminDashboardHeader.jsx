
import { useEffect, useState } from "react";
import NotificationsWindowAdmin from './Notificationes/NotificationsWindowAdmin';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AdminNotifications } from "../../store/reducers/sellerStuffReducer";


const styles = {
  dashboardHeader: {
    display: "flex",
    Width: '100%',              // Maximum width of the header
    justifyContent: 'space-between',  // Aligns items
    borderBottom: '0.5px solid rgba(0, 47, 54, 0.24)', // Bottom border
    paddingBottom: "8px", // Add padding at the bottom
    alignItems : 'center'
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    justifyContent: 'flex-end',
    
  },
  notificationIcons: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  counticon: {
    width: '20px',
    background: 'red',
    fontSize: '14px',
    borderRadius: '10px',
    textAlign: 'center',
    position : 'relative',
    top: '-5px', // Adjust this value as needed
    right: '10px', // Adjust this value as needed
    color: 'white',
    fontWeight:'8px'
  },
  addIcon: {
    width: '20px',
  },
  pageTitle: {
    margin : '10px',
    color: '#252422',
    fontSize: '30px',
    fontWeight: '500',
  },
  profileIcon: {
    width: '32px',
    margin: '0px', // Optional: Add a small margin to the left for spacing
  },
};

const AddProductButton = styled.div`
border-radius: 50px;
background-color: #26969c;
box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);
display: flex;
align-items : center;
gap: 8px;
color: #fff;
text-align: center;
padding: 12px 12px 12px 16px;
font: 500 14px/1 Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif;
border: none;
cursor: pointer;

@media (max-width : 1026px) {
    display : none
}

`
const IconButton = styled.img`
width : 36px;
@media (max-width : 1026px) {
    width : 40px
}
`
const MainContent = styled.div`
display: flex;
flex-direction: row-reverse; 
justify-content : space-between;
align-items: center; 
gap: 16px;
width : 60%;
`

const MenuImage = styled.img`
width : 30px;
height : 30px;
@media (min-width: 1024px) {
    display : none;
}
`

const AdminDashboardHeader = ({setCurrentPage,toggleFunc,currentPage}) => {
  const {admin_notification}=useSelector((state) => state.seller_stuff);
  const userId = 'zTC4dLSjCIS2I3YAl9QTJUkro0p2'; // Replace with dynamic user ID
  const dispatch=useDispatch()
 
    useEffect(() => {
        
  dispatch(AdminNotifications())
       
   
       }, [dispatch]);

  const [Notifications , setNotification] = useState(false);
  const [NotificationCount , setNotificationCount] = useState(0);


  const notifications =  [
        {
          id: 1,
          status: 'active',
          time: 'منذ دقيقتين',
          title: 'الشكاوي وتذاكر الدعم',
          page: 'الشكاوي وتذاكر الدعم',
          description: 'تم استلام تذكرة دعم جديدة من العميل "اسم العميل". رقم التذكرة: #12345.',
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/589194856849b8df5fff71be828160c7aa72857c5b7cdb3c0783fe2c360dbaec?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7'
        },
        {
          id: 2,
          status: 'active',
          time: 'أمس',
          page: 'المستخدمين',
          title: 'المستخدمين',
          description: 'قام العميل "اسم العميل" بإضافة رد جديد إلى التذكرة رقم #12345.',
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/589194856849b8df5fff71be828160c7aa72857c5b7cdb3c0783fe2c360dbaec?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7'
        },
      ];



  const toggleNotifications = () => {

    setNotification(!Notifications)

  }

  


  return (
    <header style={styles.dashboardHeader}>
      <div style={styles.actionButtons}>
  
        <div style={styles.notificationIcons}>
            <img
              loading="lazy"
              src= "https://res.cloudinary.com/drpmd9zkk/image/upload/v1733320228/Trent/d8g5sqhlnezxljrtjob6.svg"
              style={styles.iconButton}
              onClick={toggleNotifications}

            />
              <div
              loading="lazy"
              style={styles.counticon}> {admin_notification.length} </div>

        </div>

        {Notifications  ? <NotificationsWindowAdmin close={toggleNotifications} setCurrentPage={setCurrentPage} notifications={admin_notification}  /> : null }



 
      </div>
      <MainContent> 

<MenuImage src={'https://img.icons8.com/?size=100&id=eofQ1g5BaAx6&format=png&color=000000'} alt="lazy" onClick={toggleFunc} />

<h1 style={styles.pageTitle}>{currentPage}</h1>
</MainContent>


    </header>
  );
};

export default AdminDashboardHeader;