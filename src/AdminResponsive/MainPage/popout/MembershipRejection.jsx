import { useState } from 'react';
import styles from './MembershipRejection.module.css';

const backgroundstyles = {

  container :{

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Expo Arabic, sans-serif',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '300vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  }
}

export default function MembershipRejection({close , rejection, verified , member}) {
  const [rejectionReason, setRejectionReason] = useState('');

  const onConfirm = () => {
    verified(member.id)
    rejection()
  }


  return (
    <div
    style={backgroundstyles.container}
    role="dialog"
    aria-labelledby="dialog-title"
    aria-modal="true"
  >

    <div className={styles.layout}>
      <form className={styles.rejectionCard}>
      <div className={styles.container}>
        <h1 className={styles.title}>رفض توثيق العضوية</h1>
        <p className={styles.subtitle}>
          هل انت متأكد من رغبتك في رفض توثيق عضوية المستخدم
        </p>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="rejectionReason" className={styles.label}>
          توضيح سبب الرفض
        </label>
        <textarea
          id="rejectionReason"
          className={styles.textarea}
          value={rejectionReason}
          onChange={(e) => setRejectionReason(e.target.value)}
          aria-label="توضيح سبب الرفض"
        />
      </div>
      
      <div className={styles.buttonGroup}>
        <button 
          type="button" 
          className={styles.cancelButton}
          onClick={rejection}
        >
          الرجوع
        </button>
        <button 
          type="button" 
          className={styles.confirmButton}
          onClick={onConfirm}

        >
          تأكيد
        </button>
      </div>
      </form>
    </div>
    </div> 

  );
}