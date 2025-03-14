
const TitleAddProductRequest = ({title}) => {
    return (
      <div style={AddProductHeader.headerWrapper}>
    
      <div style={AddProductHeader.addressText}>{title}</div>
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f47c865030644115b90609064c6e84ba0c5e5ae1e9304de217b4e435b82805?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
          alt="Navigation arrow"
          style={AddProductHeader.arrowIcon}
        />
      </div>
    );
  };
  
  const AddProductHeader = {
  
    headerWrapper: {
      justifyContent: 'end',
      alignItems: 'center',
      borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
      display: 'flex',
      width: 'auto',
      flexWrap: 'wrap',
  
    },
    locationIcon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '20px',
      alignSelf: 'stretch',
      margin: 'auto 0',
    },
    addressText: {
      alignSelf: 'stretch',
      flex: '1',
      flexBasis: '0%',
      margin: 'auto 0',
    },
    arrowIcon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '24px',
      alignSelf: 'stretch',
      margin: 'auto 0',
    },


  };
  
  export default TitleAddProductRequest;