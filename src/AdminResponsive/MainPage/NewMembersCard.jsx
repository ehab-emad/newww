import { useDispatch, useSelector } from "react-redux";
import { MemberCard } from "./MemberCard";
import { useEffect, useState } from 'react';
// import { getsellers } from "../../../../trenttest/reducers/sellerOrdersReducer";
import { AllCustomers, Allsellers, pendingcustomer, pendingsellers, UpdatecustomerAdmin, UpdatesellerAdmin } from "../../store/reducers/sellerProductsReducer";
const styles = {
  membersSection: {
    alignSelf: 'stretch',
    borderRadius: '24px',
    background: 'var(--White, #fff)',
    display: 'flex',
    flexDirection: 'column',
    // overflow: 'hidden',
    fontFamily: 'Expo Arabic, sans-serif',
    justifyContent: 'start',
    padding: '16px'
  },
  membersHeader: {
    borderColor: 'rgba(0, 47, 54, 0.08)',
    borderBottomWidth: '1px',
    display: 'flex',
    width: '100%',
    paddingBottom: '8px',
    alignItems: 'center',
    gap: '40px 100px',
    fontWeight: '400',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  viewAllBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    background: 'var(--BG-gray, #f6f5f5)',
    display: 'flex',
    gap: '4px',
    overflow: 'hidden',
    fontSize: '14px',
    color: 'var(--Cool, #8d8883)',
    lineHeight: '1',
    margin: 'auto 0',
    padding: '8px 16px 8px 12px',
    border: 'none',
    cursor: 'pointer'
  },
  icon: {
    width: '14px',
    height: '14px'
  },
  membersIcon: {
    width: '24px',
    height: '24px'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '18px',
    color: 'var(--Text, #252422)',
    textAlign: 'right'
  }
};


const initialmembers = [
  {
    id : 1,
    joinDate: "10/15/2024",
    phone:  "966 123456789",
    isNumberVerified : true,
    email: "email@gmail.com",
    name: "هشام",
    isVerified: false,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
    idCard : [
      { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
      { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
    ]
  },
  {
    id : 2,
    joinDate: "10/15/2024",
    phone: "966 123456789",
    isNumberVerified : true,
    email: "email@gmail.com",
    name: "اسم المستخدم ويمتد لسطرين",
    isVerified: false,
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
    idCard : [
      { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
      { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
    ]
  }
];



const NewMembersCard = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(pendingcustomer())
dispatch(pendingsellers())
  },[dispatch])

  const {  pending_customer,pending_sellers } = useSelector((state) => state.seller_products);
const allpending=[...pending_sellers,...pending_customer]
     
  const [members, setMembers] = useState(initialmembers);


  const togglerefused = async(id) => {
    if(id.hasOwnProperty("sellername")){
      const user = allpending.find(user => user.id === id.id); 

      if (!user) return allpending;
  
      const sellerData = { ...user, status:'rejected',active:false}; 
        
      await dispatch(UpdatesellerAdmin({id:id.id,sellerData}))
      await dispatch(pendingcustomer())
      await dispatch(pendingsellers())
      console.log("mmm",sellerData)
  
    }
    else{
      const user = allpending.find(user => user.id === id.id); 

      if (!user) return allpending;
  
      const customerData = { ...user, status:'rejected',active:false}; 
        
    await  dispatch(UpdatecustomerAdmin({id:id.id,customerData}))
    await dispatch(pendingcustomer())
    await dispatch(pendingsellers())
      console.log("kkk",customerData)
  
    }


  

  
  
    // setUsers((prevOwners) =>
    //     prevOwners.map(user =>
    //         user.id === Id
    //             ? { ...user, status: user.status === 'approved' ,active:"true"}
    //             : user
    //     )
    // );
  };
  const toggleUserVerified = async(id) => {


    if(id.hasOwnProperty("sellername")){
      
    const user = allpending.find(user => user.id === id.id); 

    if (!user) return allpending;


   const  sellerData = { ...user, status:'approved',active:true}; 
     
   await dispatch(UpdatesellerAdmin({id:id.id,sellerData}));
   await dispatch(pendingcustomer())
   await dispatch(pendingsellers())
  //  awaitconsole.log(sellerData)

  
    }
    else{
      
    const user = allpending.find(user => user.id === id.id); 

    if (!user) return allpending;

   const  customerData = { ...user, status:'approved',active:true}; 
     
   await dispatch(UpdatecustomerAdmin({id:id.id,customerData}))
   await dispatch(pendingcustomer())
   await dispatch(pendingsellers())
    console.log(customerData)

  
    }


  
    // setUsers((prevOwners) =>
    //     prevOwners.map(user =>
    //         user.id === Id
    //             ? { ...user, status: user.status === 'approved' ,active:"true"}
    //             : user
    //     )
    // );
  };
    // useEffect(() => {
    //   console.log('Members have changed:', members);
    // }, [members]);

  return (
    <section style={styles.membersSection}>
      <header style={styles.membersHeader}>
        <button style={styles.viewAllBtn} tabIndex="0">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae96818e45715f1a827a229643aec834784b498c298553ca983744f29b67715?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6" alt="" style={styles.icon} />
          <span>عرض الكل</span>
        </button>
        <div style={styles.titleContainer}>
          <h2>الأعضاء الجدد</h2>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/56d208f53244e116c0da8ec64dfa0d6ad282bc72c8a304d623bd1aedbf41cb29?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6" alt="" style={styles.membersIcon} />
        </div>
      </header>
      {allpending.map((member, index) => (
        <MemberCard key={index} member = {member} verified={toggleUserVerified} refused={togglerefused}/>
      ))}
    </section>
  );
};

export default NewMembersCard;