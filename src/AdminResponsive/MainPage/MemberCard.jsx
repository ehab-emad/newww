import { useState } from "react";
import PopOut from "./popout/popout";
import MembershipRejection from './popout/MembershipRejection';
// import { useDispatch } from "react-redux";
// import { Allsellers } from "../../../../trenttest/reducers/sellerProductsReducer";


const styles = {
  memberCard: {
    justifyContent: 'center',
    borderRadius: '16px',
    border: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
    background: 'var(--White, #fff)',
    display: 'flex',
    marginTop: '16px',
    width: '100%', // Set to 100% to take full width of the parent
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    maxWidth: '100%', // Ensure it doesn't exceed parent width
    flexGrow: 1, // Allow it to grow and fill available space
    flexShrink: 0, // Prevent shrinking if there's enough space
    boxSizing: 'border-box', // Include padding and borders in width calculations      gap: '16px',
    flexWrap: 'wrap',
    padding: '16px',
    alignItems: "center",
  },
  reviewBtn: {
    alignSelf: 'stretch',
    borderRadius: '50px',
    background: 'var(--Blue, #27989e)',
    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
    gap: '8px',
    fontSize: '14px',
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: '1',
    margin: 'auto 0',
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '0 4px'
  },
  datePhone: {
    width: '124px'
  },
  email: {
    width: '180px'
  },
  label: {
    color: 'var(--Paragraph, #736e67)',
    fontSize: '12px',
    fontWeight: '400'
  },
  value: {
    color: 'var(--Text, #252422)',
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '8px'
  },
  userInfo: {
    display: 'flex',
    minWidth: '240px',
    alignItems: 'center',
    gap: '14px',
    justifyContent: 'end',
    flex: 1
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  badges: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    gap: '4px',
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: '1',
  },
  verificationBadge: {
    borderRadius: '8px',
    background: 'var(--BG-gray, #f6f5f5)',
    color: 'var(--Paragraph, #736e67)',
    fontWeight: '400',
    padding: '4px 8px'
  },
  verificationBadgeSuccss: {
    borderRadius: '8px',
    background: 'var(--BG-gray,rgb(156, 209, 70))',
    color: 'var(--Paragraph,rgb(43, 90, 31))',
    fontWeight: '400',
    padding: '4px 8px'
  },
  statusBadge: {
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 233, 212, 1)',
    color: 'var(--Orange, #ff8945)',
    fontWeight: '500',
    padding: '4px 8px'
  },
  userName: {
    color: 'var(--Dark, #09262a)',
    textAlign: 'right',
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '4px'
  },
  profileImage: {
    width: '64px',
    height: '64px',
    objectFit: 'contain'
  }
};
export const MemberCard = ({ member,verified,refused}) => {
  const [isVisable , setIsVesabile] = useState(false);
  const [rejectPop , setrejectPop] = useState(false);
  const formatDate = (isoString) => {
    return isoString.split("T")[0];
  };

  const popout = () => {
    setIsVesabile(!isVisable)
  }
  const rejectpopout = () => {
    setrejectPop(!rejectPop)
    setIsVesabile(!isVisable)

  }


  
  return (
    <article style={styles.memberCard}>{
      console.log("member",member)
    }
      <button style={styles.reviewBtn} onClick={popout}>مراجعة العضوية</button>
      {isVisable && <PopOut rejection= {rejectpopout} close={popout} member = {member} verified={verified} refused={refused}/>}
      {rejectPop && <MembershipRejection close={rejectpopout} rejection= {rejectpopout} member = {member} verified={verified} />}
      
      <div style={{...styles.infoContainer, ...styles.datePhone}}>
        <span style={styles.label}>تاريخ الإنضمام</span>
        {/* <span style={styles.value}>{formatDate(member.updatedAt)}</span> */}
      </div>
      <div style={{...styles.infoContainer, ...styles.datePhone}}>
        <span style={styles.label}>رقم الجوال</span>
        <span style={styles.value}>{member.phone}</span>
      </div>
      <div style={{...styles.infoContainer, ...styles.email}}>
        <span style={styles.label}>البريد الإلكتروني</span>
        <span style={styles.value}>{member.email}</span>
      </div>
      <div style={styles.userInfo}>
        <div style={styles.userDetails}>
        {member.status==="approved" ?        
              <div style={styles.badges}>
                <span style={styles.verificationBadgeSuccss}>مالك  موثق</span>
                <span style={styles.statusBadge}>عضو جديد</span>
              </div> 
            : 
               <div style={styles.badges}>
                <span style={styles.verificationBadge}>مالك غير موثق</span>
                <span style={styles.statusBadge}>عضو جديد</span>
              </div> 
          
          }
   
          <h3 style={styles.userName}>{member.name}</h3>
        </div>{member.imageSrc ?  <img src={member.imageSrc} style={styles.profileImage} />: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6" style={styles.profileImage} />}

        
       
      </div>
    </article>
  );
};