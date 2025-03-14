import styles from './AccountDetailsSection.module.css';

const AccountDetailsSection = ({user}) => {
  return (
    <div className={styles.accountDetails}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerTitle}>تفاصيل الحساب</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14dfeafb198456cdc286bec01948bf7770d4339a52964ea93b4eda9395550926?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"
          className={styles.headerIcon}
          alt="Account details icon"
        />
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7278c2606ceb4cd961c7286cff08f462d69a0ba163fa3308e701818e8cbce4bf?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16"
        className={styles.profileImage}
        alt="User profile"
      />


      <div className={styles.detailsGrid}>

        <div className={styles.detailField}>
          <div className={styles.fieldLabel}>
            {'اسم العائلة'}
          </div>
          <div className={styles.fieldValue}>{user.lastname|| "empty"}</div>
        </div>

        <div className={styles.detailField}>
          <div className={styles.fieldLabel}>
            {'الاسم الاول'}
          </div>
          <div className={styles.fieldValue}>{user.name || "empty"}</div>
        </div>

        <div className={styles.detailField}>
          <div className={styles.fieldLabel}>
            {'رقم الجوال '}

            {user.isNumberVerified && (
                <span className={styles.verifiedBadge}>تم التحقق</span>
            )}
          </div>
          <div className={styles.fieldValue}>{user.phone || "empty"}</div>
        </div>

        <div className={styles.detailField}>
          <div className={styles.fieldLabel}>
            {'البريد الإلكتروني'}
          </div>
          <div className={styles.fieldValue}>{user.email || "empty"}</div>
        </div>

      </div>
    </div>
  );
};

export default AccountDetailsSection;