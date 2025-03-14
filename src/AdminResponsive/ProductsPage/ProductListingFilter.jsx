


const PendingButtonsStyle = {
    container: {
      paddingBottom: '8px',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'stretch',
      borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
      display: 'flex',
      gap: '40px 100px',
      fontFamily: 'Expo Arabic, sans-serif',
      flexWrap: 'wrap',
      width: 'auto',
      minWidth: 'calc(100% - 32px)',
      maxWidth: '100%',
    },
    filterContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50px',
      alignSelf: 'stretch',
      display: 'flex',
      minWidth: '240px',
      gap: '4px',
      overflow: 'hidden',
      fontSize: '14px',
      margin: 'auto 0',
      padding: '8px',
      background: '#F6F5F5'

    },
    title: {
      color: 'var(--Text, #252422)',
      fontSize: '20px',
      fontWeight: '600',
      alignSelf: 'stretch',
      margin: 'auto 0',
    },
    button: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50px',
      alignSelf: 'stretch',
      margin: 'auto 0',
      padding: '8px',
      whiteSpace: 'nowrap',
      backgroundColor: isActive ? '#ffffff' : 'transparent',
      color: isActive ? '#26969c' : '#8d8883',
      fontWeight: isActive ? '600' : '400',
      border: 'none',
      cursor: 'pointer',
      outline: 'none'
    }),
  };

 

const ProductListingFilter = ({ handleButtonClick, filterButtons,  title }) => {



  return (

    <div style={PendingButtonsStyle.container}>
    <div style={PendingButtonsStyle.filterContainer}>
      {filterButtons.map((buttonData, index) => (
        <button
          key={index}
          style={PendingButtonsStyle.button(buttonData.isActive)} // Use isActive from buttonData
          onClick={() => handleButtonClick(index)} // Only pass index to handleButtonClick
          role="button"
          tabIndex={0}
          aria-pressed={buttonData.isActive}
        >
          {buttonData.text}
        </button>
      ))}
    </div>
    <h1 style={PendingButtonsStyle.title}>{title}</h1>
  </div>

  );
};

export default ProductListingFilter;