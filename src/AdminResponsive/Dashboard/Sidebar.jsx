import SidebarLink from './SidebarLink';
import UserProfile from './UserProfile';
import styled from "styled-components";

const adminLinks = [
  { text: 'الرئيسية', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05db8ad68ab3a86e4cd2f7d69fddfe7f2126b93ba985b3934aa3c462ba3fc705' },
  { text: 'المستخدمين', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5e81947c8783a7576f1c146a6e9de19224c70d2e00a5b4a9c70f6c8a21dcca45' },
  { text: 'المنتجات', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b168e02835a394c77c98f188c7a0b9ba70a0affd7f1da51684cb98d6e4423f42' },
  { text: 'الطلبات', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/35aef2992b9676a1e988a559cc1b30bdff7faf815143f35939fde3b4d03f88c4' },
  { text: 'المدفوعات', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ea27467eaca34eb5a10271aed109be66ee48a08c4ce8c1d878121f06644dd3eb' },
  { text: 'الشكاوي وتذاكر الدعم', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05078e2a4606a08ec0b758df186e536d925352bf96d11e01a020183066784a31' },
  { text: 'إعدادات الحساب', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05078e2a4606a08ec0b758df186e536d925352bf96d11e01a020183066784a31' },

  // Add more admin links here
];


const SmallScreenNav = styled.nav`
@media (min-width: 1024px) {
  display: none !important;
}
`;

const BigNav = styled.nav`
@media (max-width: 1024px) {
  display: none !important;
}
`;

const Logo = styled.div`
@media (max-width: 1024px) {
  width: 150px !important;
}
`;


function Sidebar({setCurrentPage,setIsOpen, currentPage , Isopen , openClose }) {





  const styles = {
    sidebarContainer: {
      borderRadius: '0px',
      background: 'var(--Dark, #09262a)',
      display: 'flex',
      maxWidth: '200px',
      flexDirection: 'column',
      overflow: 'hidden',
      justifyContent: 'start',
      padding: '30px',
      height: '100%',

    },
    logo: {
      borderRadius: '8px',
      display: 'flex',
      minHeight: '48px',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '5px'
    },
    logoImage: {
      aspectRatio: '7.19',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '100%',
      alignSelf: 'stretch',
      margin: 'auto 0'
    },
    content: {
      display: 'flex',
      marginTop: '5px',
      width: '100%',
      paddingBottom: '5px',
      flexDirection: 'column',
      fontFamily: 'Expo Arabic, sans-serif',
      fontWeight: '400',
      justifyContent: 'start',
      flex: 1
    },
    linkGroup: {
      display: 'flex',
      marginTop: '30px',
      width: '100%',
      flexDirection: 'column',
      fontSize: '16px',
      color: 'rgba(166, 177, 178, 1)',
      justifyContent: 'start'
    },
    logOut: {
      borderRadius: '12px',
      display: 'flex',
      marginTop: '0px',
      minHeight: '30px',
      width: '100%',
      alignItems: 'center',
      gap: '8px',
      color: 'rgba(166, 177, 178, 1)',
      justifyContent: 'end',
      padding: '18px 16px',
      font: '400 16px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif',
      cursor: 'pointer',
      border: 'none',
      background: 'transparent',
      transition: 'opacity 0.2s ease',
      '&:hover': {
        opacity: 0.8
      }
    }
  };



  const handleLogout = () => {
    setCurrentPage={setCurrentPage}
  };

  const SmallScreenNav = styled.nav`
    @media (min-width: 1024px) {
      display : none !important;
    }
  `

  const BigNav = styled.nav`
    @media (max-width: 1024px) {
      display : none !important;
    }
  `
  const Logo = styled.div`
    @media (max-width: 1024px) {
  
      width : 150px !important;
    }
  `

  // change links vased on user type
  return (
  <>
    <SmallScreenNav style = {{flex : 'flex',flexDirection : 'column' , alignContent : 'center', justifyContent : 'space-between' , width : '90%' , margin : '0px auto'}}>
      <Logo style={styles.logo}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0547351808559cd9c2861749eb28e65c3e8c4a9deebf90948ecb3790671f0cf6?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          style={styles.logoImage}
          alt="Company Logo"
        />
      </Logo>

      <div style={styles.content}>
      <UserProfile 
          name="عصام المصطفى"
          badge="عضوية المالك"
          avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/baffecfc9692f2dfc738996d25c51505e59c6ed6184688090ae0e2b176fb2014?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          setCurrentPage={setCurrentPage}

        />
     

        <div style={styles.linkGroup}>
          {adminLinks.map((link, index) => (
            <SidebarLink
              key={index}
              text={link.text}
              icon={link.icon}
              setCurrentPage={setCurrentPage}
              close = {openClose}
              setIsOpen={setIsOpen}
              isActive={currentPage === link.text} // Pass active state


            />
          ))}
        </div>

       
      </div>

      <button 
        style={styles.logOut}
        onClick={handleLogout}
        aria-label="تسجيل الخروج"
      >
        <span>تسجيل الخروج</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/462f871d1345ae11c082f6363e4c1679ad54efae09b762c1523b972220f77d6c?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          alt=""
          style={{
            aspectRatio: '1',
            objectFit: 'contain',
            width: '20px',
            margin: 'auto 0'
          }}
          loading="lazy"
        />
      </button>

    </SmallScreenNav>

    <BigNav style={styles.sidebarContainer} role="navigation" aria-label="Main navigation">
      <div style={styles.logo}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0547351808559cd9c2861749eb28e65c3e8c4a9deebf90948ecb3790671f0cf6?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          style={styles.logoImage}
          alt="Company Logo"
        />
      </div>
      
      <div style={styles.content}>
      <UserProfile 
          name="عصام المصطفى"
          badge="عضوية المالك"
          avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/baffecfc9692f2dfc738996d25c51505e59c6ed6184688090ae0e2b176fb2014?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          setCurrentPage={setCurrentPage}

        />
     

        <div style={styles.linkGroup}>
          {adminLinks.map((link, index) => (
            <SidebarLink
              key={index}
              text={link.text}
              icon={link.icon}
              setCurrentPage={setCurrentPage}
              isActive={currentPage === link.text} // Pass active state
              // setIsOpen={setIsOpen}

            />
          ))}
        </div>

       
      </div>

      <button 
        style={styles.logOut}
        onClick={handleLogout}
        aria-label="تسجيل الخروج"
      >
        <span>تسجيل الخروج</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/462f871d1345ae11c082f6363e4c1679ad54efae09b762c1523b972220f77d6c?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
          alt=""
          style={{
            aspectRatio: '1',
            objectFit: 'contain',
            width: '20px',
            margin: 'auto 0'
          }}
          loading="lazy"
        />
      </button>
    </BigNav>
  </>
  );
}

export default Sidebar;