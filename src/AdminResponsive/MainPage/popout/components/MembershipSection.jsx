import React from 'react';
import styles from './MembershipSection.module.css';

const MembershipSection = ({member}) => {
  const membershipTypes = [
    { title: 'عضوية المستأجر', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/18b507a6cc50b44c13009a7bfaad9237910dd99f22e2c68da0e6a8f0f3454318?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16', active: false },
    { title: 'عضوية المالك', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/08908fe8355ccc84e28c5aa4491c9012564825aa05715b52e37205799653e1e3?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16', active: true }
  ];

  return (
    <div className={styles.membershipSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerTitle}>نوع العضوية</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcda6da0be55aed52361d3b55271cb51053912d178845d6c36127dc4decee3f1?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"
          className={styles.headerIcon}
          alt="Membership icon"
        />
      </div>
      <div className={styles.membershipTypes}>
        
        {/* {membershipTypes.map((type, index) => ( */}
          <div
       
            className={member.hasOwnProperty("sellername") ?  styles.membershipBadge: styles.activeBadge}
          >
            <div className={styles.badgeTitle}>{'عضوية المستأجر'}</div>
           {member.hasOwnProperty("sellername") ?
            <img
             loading="lazy"
             src={'https://cdn.builder.io/api/v1/image/assets/TEMP/18b507a6cc50b44c13009a7bfaad9237910dd99f22e2c68da0e6a8f0f3454318?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16'}
             className={styles.badgeIcon}
             alt={`a icon`}
           /> : <img
           loading="lazy"
           src={'https://cdn.builder.io/api/v1/image/assets/TEMP/08908fe8355ccc84e28c5aa4491c9012564825aa05715b52e37205799653e1e3?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16'}
           className={styles.badgeIcon}
           alt={`b icon`}
         />
           }
          </div>
          <div
           
            className={member.hasOwnProperty("sellername") ? styles.activeBadge : styles.membershipBadge}
          >
            <div className={styles.badgeTitle}>{'عضوية المالك'}</div>
            {member.hasOwnProperty("sellername") ?
              <img
           loading="lazy"
           src={'https://cdn.builder.io/api/v1/image/assets/TEMP/08908fe8355ccc84e28c5aa4491c9012564825aa05715b52e37205799653e1e3?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16'}
           className={styles.badgeIcon}
           alt={`b icon`}
         />:<img
         loading="lazy"
         src={'https://cdn.builder.io/api/v1/image/assets/TEMP/18b507a6cc50b44c13009a7bfaad9237910dd99f22e2c68da0e6a8f0f3454318?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16'}
         className={styles.badgeIcon}
         alt={`a icon`}
       />
           }
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default MembershipSection;