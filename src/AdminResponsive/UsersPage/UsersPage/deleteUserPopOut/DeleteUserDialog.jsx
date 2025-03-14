import { useDispatch, useSelector } from "react-redux";
import styles from "./DeleteUserDialog.module.css";import { AllEmployees, DeleteemployeeAdmin } from "../../../../store/reducers/sellerProductsReducer";
import { useEffect } from "react";
;

export default function DeleteUserPopOut({ close , member , remove }) {
  const dispatch=useDispatch()
   
  return (
    <div
      className={styles.container}
      role="dialog"
      aria-labelledby="dialog-title"
      aria-modal="true"
    >
      <div className={styles.dialogCard}>
        <div className={styles.content}>
          <h2 id="dialog-title" className={styles.title}>
            مسح عضوية المستخدم
          </h2>
          <p className={styles.message}>
            هل انت متأكد من رغبتك في عضوية المستخدم "
            <span className={styles.username}>{member.name}</span>
            "؟
          </p>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.cancelButton}
            onClick={close}
            type="button"
          >
            الرجوع
          </button>
          <button
            className={styles.confirmButton}
            onClick={() => {
              
      dispatch(DeleteemployeeAdmin(member.id))
      dispatch(AllEmployees())
           
              close() ;
            }}
            type="button"
          >
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
}
