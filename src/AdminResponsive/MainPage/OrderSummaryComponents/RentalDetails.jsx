
const RentalDetailsStyle = {
  div: {
    alignSelf: "stretch",
    borderRadius: "24px",
    background: "var(--White, #fff)",
    backgroundColor: "var(--White, #fff)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    fontFamily: "Expo Arabic, sans-serif",
    justifyContent: "start",
    padding: "16px",
    gap: "16px"

  },
  header: {
    justifyContent: "end",
    alignItems: "center",
    borderBottom: "1px solid var(--line-saperator, rgba(0, 47, 54, 0.08))",
    display: "flex",
    width: "100%",
    flexWrap: "nowrap",
    gap: "8px"
  },
  ordersStatus: {
    borderRadius: "8px",
    backgroundColor: "rgba(250, 228, 228, 1)",
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    color: "rgba(214, 27, 27, 1)",
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "end",
    margin: "auto 0",
    padding: "8px"
  },
  rejectedBooking: {
    alignSelf: "stretch",
    margin: "auto 0"
  },
  img: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "16px",
    alignSelf: "stretch",
    margin: "auto 0"
  },
  rentalDetails: {
    color: "var(--Text, #252422)",
    textAlign: "right",
    fontSize: "18px",
    fontWeight: "400",
    alignSelf: "stretch",
    flex: "1",
    flexBasis: "16px",
    margin: "auto 0"
  },
  img2: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "24px",
    alignSelf: "stretch",
    margin: "auto 0"
  },
  main: {
    display: "flex",
    flexDirection: " column",
    width: "auto",
    maxWidth: "100%",
    alignItems: "center",
    gap: "16px",
    fontSize: "14px",
    justifyContent: "end",
    flexWrap: "wrap",
    overflow: 'hidden',
  },


  inputdate: {
    alignSelf: "stretch",
    borderRadius: "16px",
    background: "var(--BG-gray, #f6f5f5)",
    backgroundColor: "var(--BG-gray, #f6f5f5)",
    width: "auto",
    maxWidth:" 100%",
    color: "var(--Dark, #002f36)",
    fontWeight: "500",
    textAlign: "center",
    padding: "16px"
  },
  inputamount: {
    alignSelf: "stretch",
    borderRadius: "16px",
    background: "var(--BG-gray, #f6f5f5)",
    backgroundColor: "var(--BG-gray, #f6f5f5)",
    marginTop: "8px",
    width: "100%",
    gap: "10px",
    color: "var(--Dark, #002f36)",
    fontWeight: "500",
    whiteSpace: "nowrap",
    textAlign: "center",
    padding: "16px"
  },
  inner: {
    alignSelf : "stretch",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "8px",
    maxWidth: '100%', // Ensure it doesn't exceed parent width
    minWidth: '0', // Ensure no minimum width constraints
    boxSizing: 'border-box', // Include padding and borders in width calculations

  },
  title: {
    color: "var(--Black, #020202)",
    textAlign: "right",
    fontWeight: "400",
    lineHeight: "1"
  },

  div8: {
    display: "flex",
    marginTop: "16px",
    width: "100%",
    flexDirection: "column",
    fontSize: "14px",
    textAlign: "right",
    justifyContent: "right",
    overflow: 'hidden'

  },
  productDeliveryAddress: {
    color: "var(--Black, #020202)",
    fontWeight: "400",
    lineHeight: "1"
  },
  div9: {
    justifyContent: "end",
    alignItems: "start",
    borderRadius: "16px",
    background: "var(--BG-gray, #f6f5f5)",
    backgroundColor: "var(--BG-gray, #f6f5f5)",
    display: "flex",
    marginTop: "8px",
    width: "100%",
    gap: "8px",
    flexWrap: "wrap",
  },
  div10: {
    display: "flex",
    flexDirection: "column",
    padding: "8px"

  },
  home: {
    color: "var(--Text, #252422)",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1"
  },
  div11: {
    display: "flex",
    marginTop: "8px",
    alignItems: "center",
    gap: "4px",
    whiteSpace: "nowrap",
    lineHeight: "1",
    justifyContent: "end"
  },
  cityinput: {
    color: "var(--Text, #252422)",
    fontWeight: "400",
    alignSelf: "stretch",
    margin: "auto 0"
  },
  city: {
    color: "rgba(25, 23, 21, 0.5)",
    fontWeight: "300",
    alignSelf: "stretch",
    margin: "auto 0"
  },
  div12: {
    display: "flex",
    marginTop: "8px",
    width: "100%",
    alignItems: "end",
    gap: "4px",
    justifyContent: "end",
    flexWrap: "wrap"
  },
  addressDetails: {
    color: "var(--Text, #252422)",
    fontWeight: "300",
  },
  address: {
    color: "rgba(25, 23, 21, 0.5)",
    fontWeight: "300",
  },
  img3: {
    aspectRatio: "1",
    objectFit: "contain",
    objectPosition: "center",
    width: "24px"
  },
  divdate:{
    alignSelf: " stretch",
    display: "flex",
    flexWrap: "nowrap",
    gap: "16px",
    justifyContent: " end",
    width: " auto",
    maxWidth: "100%",

    

  },


};
const rentalData = {
  orderStatus: "حجز مرفوض",
  rentalDetailsText: "تفاصيل التأجير",
  deliveryDate: "10/21/2024",
  pickupDate: "10/15/2024",
  insuranceAmount: "$000,000",
  amountPaid: "$000,000",
  productDeliveryAddress: "عنوان استلام وتسليم المنتج",
  home: "المنزل",
  city: "الرياض",
  addressDetails: "قد يمتد العنوان الى سطر او سطرين وميعاد الاستلام المتاح للمالك",
};



function RentalDetails({Order={Order} }) {
  
  const formatTimestamp = (timestamp) =>  {
    if (!timestamp || !timestamp.seconds) return "N/A";

    const date = new Date(timestamp.seconds * 1000); // تحويل الثواني إلى ملي ثانية
    return date.toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
        // hour: "2-digit",
        // minute: "2-digit",
        // second: "2-digit",
        hour12: true,
        // timeZoneName: "short",
    });
};



  return (
  <div style={RentalDetailsStyle.div}>
    <div style={RentalDetailsStyle.header}>
      {/* <div style={RentalDetailsStyle.ordersStatus}>
        <div style={RentalDetailsStyle.rejectedBooking}>{rentalData.orderStatus}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ffb8b0a79c4cd3647068d66533c306a988c19b837910c8289277009345d3bcb?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
          style={RentalDetailsStyle.img}
        />
      </div> */}
      <div style={RentalDetailsStyle.rentalDetails}>{rentalData.rentalDetailsText}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff8b0abe7a12a7cf7e3557154e1fabdaeff37ae3abd2a77d94bf836015d429ee?placeholderIfAbsent=true&apiKey=6d0a7932901f457a91041e45ceb959e7"
        style={RentalDetailsStyle.img2}
      />
    </div>
    <div style={RentalDetailsStyle.main}>
      <div style={RentalDetailsStyle.divdate}>
          <div style={RentalDetailsStyle.inner}>
            <div style={RentalDetailsStyle.title}>تسليم</div>
            <div style={RentalDetailsStyle.inputdate}>{formatTimestamp(Order.deliverydate) ||0}</div>
          </div>
          <div style={RentalDetailsStyle.inner}>
            <div style={RentalDetailsStyle.title}>استلام</div>
            <div style={RentalDetailsStyle.inputdate}>{ formatTimestamp(Order.pickupdate) ||0}</div>
          </div>
      </div>
       <div style={RentalDetailsStyle.divdate}>
          <div style={RentalDetailsStyle.inner}>
            <div style={RentalDetailsStyle.title}>مبلغ التأمين</div>
            <div style={RentalDetailsStyle.inputdate}>{Order.insuranceamount ||0}</div>
          </div>
          <div style={RentalDetailsStyle.inner}>

            <div style={RentalDetailsStyle.title}>المبلغ المدفوع</div>
            <div style={RentalDetailsStyle.inputdate}>{Order.amountpaid ||0}</div>
         </div>
      </div>
    </div>
  
  </div>
  );
}

export default RentalDetails;