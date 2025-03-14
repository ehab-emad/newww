
const FormField = ({ label, value }) => (
  <div style={styles.formField}>
    <div style={styles.formLabel}>{label}</div>
    <div style={styles.formValue}>{value}</div>
  </div>
);

// Styles as a JavaScript object
const styles = {
  formField: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    textAlign: 'right',
    marginBottom: '24px',
  },
  formLabel: {
    color: '#252422',
    fontWeight: 400,
  },
  formValue: {
    alignSelf: 'stretch',
    borderRadius: '16px',
    background: '#f2fbfa',
    marginTop: '8px',
    width: 'auto',
    color: '#09262a',
    fontWeight: 500,
    padding: '16px',
  },
};

export default FormField;