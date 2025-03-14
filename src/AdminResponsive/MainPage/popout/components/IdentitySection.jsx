import styles from './IdentitySection.module.css';

const IdentitySection = ({member}) => {

  return (
    <div className={styles.identitySection}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerTitle}>الهوية</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5ce2a2071c732535661a87b36575af300be2303f61b06bfaf45845465a1b11?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"
          className={styles.headerIcon}
          alt="Identity icon"
        />
      </div>
      <div className={styles.idCardsContainer}>
        {/* {member.idCard.map((card, index) => ( */}
          <div  className={styles.idCard}>
            <div className={styles.cardTitle}>{'الواجهة الخلفية'}</div>
            <img
              loading="lazy"
              src={member.idimages.back  || 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16'}
              className={styles.idImage}
              alt={`ID card back`}
            />
          </div>
          <div className={styles.idCard}>
            <div className={styles.cardTitle}>{'الواجهة الأمامية'}</div>
            <img
              loading="lazy"
              src={member.idimages.front ||'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16'}
              className={styles.idImage}
              alt={`ID card  front`}
            />
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default IdentitySection;