import  { useState } from 'react';

import   '../../App.css';
import RenterInfoAdmin from './RenterInfo';
import TitleAddProductRequest from './TitleAddProductRequest';
import TextBoxField from './TextBoxField';

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
const styles = {

    mainContainer: {
        gap: "8px",
        flexDirection: 'column',
        height: 'auto',
        overflow : 'hidden',
        width: '80%', // Full width of the parent
        backgroundColor: '#e0e0e0', // Main background color
        padding: '24px', // Optional padding
        flexShrink: 0, // Prevent shrinking in flex container
        borderRadius: "30px",
        top: '50%',          // Position at the vertical center
        left: '50%',         // Position at the horizontal center
        position: 'absolute',
        transform: 'translate(-50%, -50%)', // Adjust position to center
        minWidth: '0', // Ensure no minimum width constraints
        maxWidth: '100%', // Ensure it doesn't exceed parent width
        boxSizing: 'border-box', // Include padding and borders in width calculations
        '@media (max-width: 991px)':{
        display:"block",
          margin:"auto",

        }
    },
'@media (max-width: 991px)':{
  mainContainer: {
        display:"block",
          margin:"auto",

        }},
    buttonscontainer: {
      borderRadius: '24px',
      background: 'var(--White, #fff)',
      display: 'flex',
      width: 'auto', // Full width of the parent
      minWidth: 'calc(100% - 32px)', // Ensure minWidth accounts for parent's padding
      maxWidth: '100%', // Prevent exceeding parent width
      height: 'auto',
      overflow: 'hidden',
      padding: '16px',
      justifyContent: 'center',
      gap: '32px'
  
    },
    actionButtons: {
      display: 'flex',
      minWidth: '240px',
      alignItems: 'center',
      gap: '4px',
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: '1',
      justifyContent: 'start',
      margin: 'auto 0',
      background: '#ffffff'

    },  
    actionButton: {
      alignSelf: 'stretch',
      borderRadius: '50px',
      gap: '8px',
      fontWeight: '500',
      margin: 'auto 0',
      padding: '1px 15px',
      border: 'none',
      cursor: 'pointer',
    },
    rejectButton: {
      background: 'var(--error-shade, #fae4e4)',
      color: 'rgba(214, 27, 27, 1)',

    },
    approveButton: {
      background: 'var(--Blue, #27989e)',
      color: 'rgba(255, 255, 255, 1)',
      boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',

    },
    container: {
        // display: 'flex',
        //backgroundColor:" #767676",
        height: '100%',
        overflow : 'hidden',
        width: '100%', // Full width of the parent
        flexShrink: 0, // Prevent shrinking in flex container  
        minWidth: '0', // Ensure no minimum width constraints
        maxWidth: '100%', // Ensure it doesn't exceed parent width
        flexGrow: 1, // Allow it to grow and fill available space
        boxSizing: 'border-box', // Include padding and borders in width calculations
        gap: "24px",
        '@media (max-width: 991px)':{
        display:"block",
          margin:"auto",
width:"100%"
        }

    },'@media (max-width: 991px)':{
  container: {
        display:"block",
          margin:"auto",

        }},
    container1: {
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor:" #777777",
        padding: "8px",
        width: '100%', // Set to 100% to take full width of the parent
      height: '10%', // Allow height to adjust based on content
      minWidth: '0', // Ensure no minimum width constraints
      maxWidth: '100%', // Ensure it doesn't exceed parent width
      flexGrow: 1, // Allow it to grow and fill available space
      flexShrink: 0, // Prevent shrinking if there's enough space
      boxSizing: 'border-box', // Include padding and borders in width calculations
    },
    left: {
        // width: '40%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden', // Prevents overflow
        justifyContent: "start",
        alignItems: " center",
        height: 'auto', // Allow height to adjust based on content
        flexShrink: 0, // Prevent shrinking if there's enough space
        boxSizing: 'border-box', // Include padding and borders in width
        gap: "16px"

    },
    right: {

        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden', // Prevents overflow
        justifyContent: "start",
        alignItems: " center",
        height: 'auto', // Allow height to adjust based on content
        flexShrink: 0, // Prevent shrinking if there's enough space
        boxSizing: 'border-box', // Include padding and borders in width
        gap: "16px",


    },

    header: {
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch",
      borderBottom: "1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))",
      display: "flex",
      color: "var(--Text, #252422)",
      textAlign: "right",
      flexWrap: "wrap",
      font: "600 24px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif"
    },
    icon: {
      aspectRatio: "1",
      objectFit: "contain",
      objectPosition: "center",
      width: "32px",
      alignSelf: "stretch",
      margin: "auto 0",
      cursor: " pointer",
    },
    orderTitle: {
      alignSelf: "stretch",
      flex: 1,
      flexBasis: "0%",
      margin: "auto 0"
    },
    headetop: {
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch",
      borderBottom: "1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))",
      display: "flex",
      color: "var(--Text, #252422)",
      textAlign: "right",
      flexWrap: "wrap",
      marginBottom:"10px",
      font: "600 24px Expo Arabic, -apple-system, Roboto, Helvetica, sans-serif"
    },
    icontop: {
      aspectRatio: "1",
      objectFit: "contain",
      objectPosition: "center",
      width: "32px",
      alignSelf: "stretch",
      margin: "auto 0",
      cursor: " pointer",
    },


};
const ProductDetailsStyles = {
  container: {
    display: 'flex',
    width: 'auto', // Set to 100% to take full width of the parent
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    flexGrow: 1, // Allow it to grow and fill available space
    flexShrink: 0, // Prevent shrinking if there's enough space
    boxSizing: 'border-box', // Include padding and borders in width calculations
    flexDirection: 'column',
    alignItems: 'end',
    font: '14px/1 Expo Arabic, sans-serif',
    background : 'white',
    overflow : 'hidden'
  },
  topSection: {
    display: 'flex',
    width: '100%',
    alignItems: 'start',
    gap: '16px',
    justifyContent: 'end',
    flexWrap: 'wrap',
  },
  pricescontianer: {
    // display: 'flex',
    width: '100%',
    alignItems: 'start',
    gap: '8px',
    justifyContent: 'end',
    flexWrap: 'nowrap',
  },
  field: {
    display: 'flex',
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    flexDirection: 'column',
    justifyContent: 'start',
    flexGrow: 1,
    width: '200px',
    background: 'transparent',
    paddingTop : '10px'
  },
  pricesfield: {
    display: 'flex',
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    flexDirection: 'column',
    justifyContent: 'start',
    flexGrow: 1,
    width: '100px',
    background: 'transparent',
    paddingTop : '10px'
  },
  label: {
    color: 'var(--Text,rgb(34, 34, 37))',
    background : 'transparent',
    direction: "rtl",
    whiteSpace: "nowrap"
    

  },
  inputContainer: {

    borderRadius: '16px',
    background: 'var(--BG-gray,rgb(245, 246, 245))',
    display: 'flex',
    marginTop: '8px',
    width: '100%', // Set to 100% to take full width of the parent
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    maxWidth: '100%', // Ensure it doesn't exceed parent width
    flexGrow: 1, // Allow it to grow and fill available space
    flexShrink: 0, // Prevent shrinking if there's enough space
    boxSizing: 'border-box', // Include padding and borders in width calculations
    gap: '16px',
    padding: '16px',
  },
  icon: {
    aspectRatio: '1',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '14px',
    alignSelf: 'stretch',
    margin: 'auto 0',
  },
  descriptionSection: {
    display: 'flex',
    marginTop: '16px',
    width: '100%',
    height: "60%",

    flexDirection: 'column',
  },
  new:{
    display:'flex',
        overflowy: 'scroll',
        height: '99999px',
  },
  descriptionInput: {
    borderRadius: '16px',
    background: 'var(--BG-gray,rgb(245, 246, 245))',
    marginTop: '8px',
    minHeight: '0px',
    width: '100%', // Set to 100% to take full width of the parent
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    maxWidth: 'auto', // Ensure it doesn't exceed parent width
    flexGrow: 1, // Allow it to grow and fill available space
    flexShrink: 0, // Prevent shrinking if there's enough space
    boxSizing: 'border-box', // Include padding and borders in width calculations
    gap: '8px',
    color: 'var(--Cool, #8d8883)',
    textAlign: 'right',
    direction : 'rtl'
  },
  featuresSection: {
    display: 'flex',
    marginTop: '16px',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'start',
  },
  featuresGrid: {
    display: 'flex',
    marginTop: '8px',
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    alignItems: 'start',
    gap: '16px',
    color: 'var(--Cool,rgb(255, 255, 255))',
    justifyContent: 'end',
    flexWrap: 'wrap',
  },
  featureBox: {
    alignSelf: 'stretch',
    borderRadius: '16px',
    background: 'var(--BG-gray,rgb(245, 246, 245))',
    minWidth: '0px',
    gap: '8px',
    flexGrow: 1,
    width: '200px',
    padding: '16px',
    
  },
  placeholder: {
    border: 'none', 
    width: '100%', // Set to 100% to take full width of the parent
    background : 'transparent',
    textAlign:'right'

  }
};
const AddProductHeader = {
  container: {
    borderRadius: '24px',
    background: 'var(--White, #fff)',
    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    width: '100%', // Set to 100% to take full width of the parent
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    maxWidth: '100%', // Ensure it doesn't exceed parent width
    flexGrow: 1, // Allow it to grow and fill available space
    flexShrink: 0, // Prevent shrinking if there's enough space
    boxSizing: 'border-box', // Include padding and borders in width calculations
    flexDirection: 'column',
    overflow: 'hidden',
    color: 'var(--Text, #252422)',
    textAlign: 'right',
    justifyContent: 'center',
    alignItems : 'cemter',
    padding: '8px',
  },
  containerprices: {
    borderRadius: '24px',
    background: 'var(--White, #fff)',
    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    width: '100%', // Set to 100% to take full width of the parent
    height: 'auto', // Allow height to adjust based on content
    minWidth: '0', // Ensure no minimum width constraints
    maxWidth: '100%', // Ensure it doesn't exceed parent width
    boxSizing: 'border-box', // Include padding and borders in width calculations
    flexDirection: 'column',
    overflow: 'hidden',
    color: 'var(--Text, #252422)',
    textAlign: 'right',
    justifyContent: 'center',
    alignItems : 'cemter',
    padding: '8px',
  },
  headerWrapper: {
    paddingBottom: '8px',
    justifyContent: 'end',
    alignItems: 'center',
    borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
    display: 'flex',
    width: '100%',
    gap: '8px',
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
  '@media (max-width: 991px)': {
    headerWrapper: {
      maxWidth: '100%',
    },
    addressText: {
      maxWidth: '100%',
    },
  },
};
const uploadImageStyles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "auto",
    alignSelf: 'stretch',
    borderRadius: '24px',
    background: 'var(--BG-gray,rgb(252, 252, 252))',
    display: 'flex',
    overflow: 'hidden',
    gap: " 10px",
    '@media (max-width: 991px)': {
      padding: '0 20px',
    },
  },
  image: {
    aspectRatio: '1',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '50px',
    margin: '5px',
  },
  uploadInput: {
    display: 'none',
  },
  uploadButton: {
    cursor: 'pointer',
    marginBottom: '20px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50', // Example color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    background: " var(--BG-gray,rgb(233, 233, 233)"
  },
};
const addressStyles = {
  addresssection: {
    alignSelf: 'stretch',
    borderRadius: '24px',
    background: 'var(--White, #fff)',
    boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    maxWidth: '544px',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: 'Expo Arabic, sans-serif',
    justifyContent: 'start',
    padding: '16px',
    '@media (max-width: 991px)':{
        display:"block",
          margin:"auto",
width:"100%"
        }
  },
  header: {
    padding: '0 0 8px',
    justifyContent: 'end',
    alignItems: 'center',
    borderBottom: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
    display: 'flex',
    width: '100%',
    gap: '8px',
    fontSize: '18px',
    color: 'var(--Text, #252422)',
    fontWeight: 500,
    textAlign: 'right',
    flexWrap: 'wrap',
  },
  headerTitle: {
    alignSelf: 'stretch',
    flex: '1 1 0%',
    margin: 'auto 0',
  },
  headerIcon: {
    aspectRatio: '1',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '24px',
    alignSelf: 'stretch',
    margin: 'auto 0',
  },
  addressContainer: {
    justifyContent: 'end',
    alignItems: 'start',
    borderRadius: '16px',
    border: '1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))',
    display: 'flex',
    marginTop: '16px',
    width: '100%',
    gap: '8px',
    flexWrap: 'wrap',
    padding: '8px',
  },
  addressContent: {
    display: 'flex',
   maxWidth: '240px',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'center',
    flex: '1 1 0%',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 500,
    justifyContent: 'end',
  },
  defaultTag: {
    alignSelf: 'stretch',
    borderRadius: '8px',
    background: 'var(--success-shade, #e1ffc9)',
    gap: '8px',
    overflow: 'hidden',
    fontSize: '12px',
    color: 'var(--success, #4a9908)',
    textAlign: 'center',
    lineHeight: 1,
    margin: 'auto 0',
    padding: '4px',
  },
  addressTitle: {
    color: 'var(--Text, #252422)',
    textAlign: 'right',
    fontSize: '16px',
    lineHeight: 1,
    alignSelf: 'stretch',
    margin: 'auto 0',
  },
  cityRow: {
    display: 'flex',
    marginTop: '8px',
    alignItems: 'end',
    gap: '4px',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    textAlign: 'right',
    justifyContent: 'end',
  },
  cityName: {
    color: 'var(--Text, #252422)',
    fontWeight: 400,
  },
  cityLabel: {
    color: 'rgba(25, 23, 21, 0.5)',
    fontWeight: 300,
    lineHeight: 1,
  },
  detailsRow: {
    alignSelf: 'stretch',
    display: 'flex',
    marginTop: '8px',
    width: '100%',
    alignItems: 'start',
    gap: '4px',
    fontSize: '14px',
    textAlign: 'right',
    justifyContent: 'end',
  },
  detailsText: {
    color: 'var(--Text, #252422)',
    fontWeight: 400,
    flex: '1 1 0%',
  },
  detailsLabel: {
    color: 'rgba(25, 23, 21, 0.5)',
    fontWeight: 300,
    lineHeight: 1,
  },
  locationIcon: {
    aspectRatio: '1',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '24px',
  },
  '@media (max-width: 991px)': {
    header: {
      maxWidth: '100%',
    },
    headerTitle: {
      maxWidth: '100%',
    },
    addressContainer: {
      maxWidth: '100%',
    },
    addressContent: {
      maxWidth: '100%',
    },
    cityRow: {
      whiteSpace: 'initial',
    },
    detailsRow: {
      maxWidth: '100%',
    },
  },
};

const addressData = {
  headerTitle: "عنوان الاستلام",
  defaultTag: "العنوان الافتراضي",
  addressTitle: "المنزل",
  city: {
    name: "الرياض",
    label: "المدينة:",
  },
  details: {
    text: "كتابة العنوان بالتفصيل وقد يمتد العنوان الى سطر او سطرين وميعاد الاستلام المتاح للمالك",
    label: "العنوان:",
  },
};



const ViewRequestSummary = ({onReviewClick,addOrderToAnotherList,deleteOrderById,info}) => {

  const handleapproved = ()=> {
    addOrderToAnotherList()
    onReviewClick()

  
    };

    const handledelete = ()=> {
      deleteOrderById()
      onReviewClick()
    
      };

  const [productDetails, setProductDetails] = useState(info);

  
  return (
    <div
    style={backgroundstyles.container}
    role="dialog"
    aria-labelledby="dialog-title"
    aria-modal="true"
  >
   <div> <div style={styles.mainContainer} className='mainContainer_product'>

<div style={styles.headetop}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1479ad6ccf24ef7ae351d02c2a94be35ccbf27bd1b93d744fba097d06561feba?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
        style={styles.icontop}
        alt="Order details icon"
        onClick={onReviewClick}
      />
      <div style={styles.orderTitle}>بيانات المنتج</div>
</div>
 
<div style={styles.container} className='mainContainer_product'>
      <div style={styles.left} className='left'>
      <div style={AddProductHeader.containerprices}>

      <TitleAddProductRequest title={"السعر"}/>
      <div style={ProductDetailsStyles.container}>
          <div style={ProductDetailsStyles.topSection}>
            <div style={ProductDetailsStyles.pricescontianer} className='mainContainer_product'>
            <TextBoxField 
              label="مبلغ التأمين المطلوب " 
              placeholder="5" 
          />
             <TextBoxField 
              label="نسبة الخصم " 
              placeholder="5" 
          />
             <TextBoxField 
              label="سعر المنتج لليوم الواحد" 
              placeholder="5" 
          />
    
               
            </div>
            <TitleAddProductRequest title={"العروض"}/>

            <div style={ProductDetailsStyles.pricescontianer}>
            <TextBoxField 
              label="سعر المنتج لـ14 يوم" 
              placeholder="5" 
          />
             <TextBoxField 
              label="سعر المنتج لـ7 أيام" 
              placeholder="5" 
          />
             <TextBoxField 
              label="سعر المنتج لـ5 أيام" 
              placeholder="5" 
          />




            </div>
            
                                      
          </div>
  
      </div>
      </div>
       <div style={addressStyles.addresssection} className='mainContainer_product'>
            <div style={addressStyles.header}>
            <div style={addressStyles.headerTitle}>{info.name || "no name"}</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf40567464ef9e944bdcdcce8f4cbceb3942fe45c865fc5090ae9f658799914?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
                style={styles.headerIcon}
                alt="Delivery address icon"
              />
            </div>
            <div style={addressStyles.addressContainer}>
            <div style={addressStyles.addressContent}>
              <div style={addressStyles.titleRow}>
                <div style={addressStyles.defaultTag}>{addressData.defaultTag}</div>
                <div style={addressStyles.addressTitle}>{addressData.addressTitle}</div>
              </div>
              <div style={addressStyles.cityRow}>
                <div style={addressStyles.cityName}>{info.city}</div>
                <div style={addressStyles.cityLabel}>{addressData.city.label}</div>
              </div>
              <div style={addressStyles.detailsRow}>
                <div style={addressStyles.detailsText}>
                  {info.description}
                </div>
                <div style={addressStyles.detailsLabel}>{addressData.details.label}</div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeb3858d2e0cfae87947aea0ca63645cfc0fb5254a900437291dd2c6efa62426?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6"
              style={styles.locationIcon}
              alt="Location pin icon"
            />
            </div>
        </div>
        <RenterInfoAdmin  />
        <div style={styles.buttonscontainer}>

              <button 
                        style={{ ...styles.actionButton, ...styles.rejectButton }}
                        tabIndex="0"
                        role="button"
                        onClick={handledelete}
                    >
                        رفض الطلب
                    </button>
                    <button 
                        style={{ ...styles.actionButton, ...styles.approveButton }}
                        tabIndex="0"
                        role="button"
                        onClick={handleapproved}
                    >
                        الموافقة على الطلب
                    </button>
        </div> 
    
        

      
  
      </div>
      <div style={styles.right}>

            <div style={AddProductHeader.container}>

              <TitleAddProductRequest title={"العنوان"}/>
              <div style={ProductDetailsStyles.container}>
                      <div style={ProductDetailsStyles.topSection}>
                          <div style={ProductDetailsStyles.pricescontianer}>
                          <TextBoxField info={info.brand}
                                label="الماركة" 
                                placeholder="الماركة" 
                            />
                                 <TextBoxField  info={info.name}
                                label="اسم المنتج" 
                                placeholder="اسم المنتج" 
                            />
                            
                           </div>
                           <div style={ProductDetailsStyles.pricescontianer}>
                       
                           <TextBoxField info={info.city}
                                label="المدينة" 
                                placeholder="المدينة" 
                            />
                                 <TextBoxField info={info.rating}
                                label="التصنيف" 
                                placeholder="التصنيف" 
                            />
                            
                           </div>
                            
                            
                                            
                      </div>
                                    
                      <div style={ProductDetailsStyles.descriptionSection}>
                                            <div style={ProductDetailsStyles.label}>وصف المنتج</div>
                                            <textarea
                                              style={ProductDetailsStyles.descriptionInput}
                                              value={productDetails.description}
                                              placeholder="وصف المنتج"
                                              
                                            />
                      </div>
                                    
                      <div style={ProductDetailsStyles.featuresSection}>
                                            <div style={ProductDetailsStyles.label}>مميزات المنتج</div>
                                            {/* <div style={ProductDetailsStyles.featuresGrid}>
                                              {productDetails.features.map((feature, index) => (
                                                <div key={index} style={ProductDetailsStyles.featureBox}>
                                                  <input
                                                    type="text"
                                                    value={feature}
                                                    placeholder={`ميزة ${index + 1}`}
                                                    style={ ProductDetailsStyles.placeholder }
                                                    />
                                                </div>
                                              ))}
                                            </div> */}
                      </div>

                                    
              </div>

            </div>
            <div style={AddProductHeader.container}>

                  <TitleAddProductRequest title={"الصور"}/>
                  <div style={uploadImageStyles.container}>
                                        
                         {
                          productDetails.images?
                         ( productDetails.images.map((item)=>{

                          return(<>
                           <div style={uploadImageStyles.imageContainer}>
                        <img
                          loading="lazy"
                          src={item}
                          style={uploadImageStyles.image}
                          alt="Default Placeholder"
                        />                         
                  </div>
                          
                          </>)
                        }))
                         :  
                        <>  <div style={uploadImageStyles.imageContainer}>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2674550b4959452a94907f0724e4cc69073cf7055b6f41793d6b528376975ab2?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
                          style={uploadImageStyles.image}
                          alt="Default Placeholder"
                        />                         
                  </div>
                         <div style={uploadImageStyles.imageContainer}>
                         <img
                           loading="lazy"
                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2674550b4959452a94907f0724e4cc69073cf7055b6f41793d6b528376975ab2?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
                           style={uploadImageStyles.image}
                           alt="Default Placeholder"
                         />                         
                   </div>
                          <div style={uploadImageStyles.imageContainer}>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2674550b4959452a94907f0724e4cc69073cf7055b6f41793d6b528376975ab2?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
                            style={uploadImageStyles.image}
                            alt="Default Placeholder"
                          />                         
                    </div></>
                         }
                       
                  </div>
            </div>                                   

      </div>

</div>

</div></div>
    </div>
  );
};

export default ViewRequestSummary;