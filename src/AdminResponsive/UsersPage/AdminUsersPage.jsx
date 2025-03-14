import  { useState, useEffect } from 'react';

// Import child components
import TopProductFilter from '../OrderPage/TopProductFilter'; // Replace with the correct path
import ProductListingFilter from '../OrderPage/ProductListingFilter'; // Replace with the correct path
import SearchBar from '../OrderPage/SearchBar'; // Replace with the correct path
import EmployeesListingFilter from './UsersPage/EmployeesListingFilter'; // Replace with the correct path
import { UsersTable } from './UsersPage/Usersdata/UsersTable';
import {EmployeesTable} from './UsersPage/Usersdata/EmployeesTable'
import { useDispatch, useSelector } from 'react-redux';
import { AllCustomers, AllEmployees, Allsellers, DeletesellerAdmin, UpdatesellerAdmin } from '../../store/reducers/sellerProductsReducer';

// Main AdminOrders Component
const AdminUsersPage = () => {
  // State placeholders
  const {  delete_employee} = useSelector((state) => state.seller_products);
    
   
  // useEffect(()=>{

  // },[delete_employee])
  const userId = '8TktT8pFc6L8Dd5YPIod';

  const dispatch=useDispatch()

 
  useEffect(()=>{
dispatch(Allsellers())
dispatch(AllCustomers(userId))
dispatch(AllEmployees())

  },[dispatch,delete_employee])

  const {  Allsellerss ,employees,customerss} = useSelector((state) => state.seller_products);

  const removeUser = (id) => {
    dispatch(DeletesellerAdmin(id))
    dispatch(dispatch(Allsellers()))
    };
    const togglerefused = (id) => {
      const user = Allsellerss.find(user => user.id === id); 
  
      if (!user) return Allsellerss;
  
      const sellerData = { ...user, status:'reject',active:false}; 
        
      dispatch(UpdatesellerAdmin({id,sellerData}))
      dispatch(Allsellers())
      console.log(sellerData)
    };
    const toggleUserVerified = (id) => {
      const user = Allsellerss.find(user => user.id === id); 
  
      if (!user) return Allsellerss;
    if(user.active===true){
      const sellerData = { ...user, status:'suspended',active:false}; 
        
      dispatch(UpdatesellerAdmin({id,sellerData}))
      dispatch(Allsellers())
      console.log(sellerData)
  
  
    }
    else if(user.active===false){
     const  sellerData = { ...user, status:'approved',active:true}; 
       
     dispatch(UpdatesellerAdmin({id,sellerData}))
     dispatch(Allsellers())
     console.log(sellerData)
  
    }
    
      // setUsers((prevOwners) =>
      //     prevOwners.map(user =>
      //         user.id === Id
      //             ? { ...user, status: user.status === 'approved' ,active:"true"}
      //             : user
      //     )
      // );
    };
  // const [members, setMembers] = useState(initialmembers);
  const [activeTop, setActiveTop] = useState('الملاك (أصحاب المنتجات)');
  const [activeFilterText, setActiveFilterText] = useState('');
  const [requestSearch, setRequestSearch] = useState('');
  const [newEmployee, setnewEmployee] = useState('');

  const [RequestsTopFilter, setRequestsTopFilter] = useState([
    { text: 'موظفي الموقع', isActive: false },
    { text: 'المستأجرين', isActive: false },
    { text: 'الملاك (أصحاب المنتجات)', isActive: true },
  ]);

  const [AllRequest, setAllRequest] = useState([
    { text: 'العضويات المرفوضة / الموقوفة', isActive: false },
    { text: 'العضويات الموثقة', isActive: false },
    { text: 'العضويات الغير موثقة', isActive: false },
    { text: 'الكل', isActive: true },
  ]);

  //data for renters or users 
  const [RequestRecord, setRequestRecord] = useState([
    { text: 'الطلبات الملغاة', isActive: false },
    { text: 'الطلبات المنتهية', isActive: false },
    { text: 'الكل', isActive: true },
  ]);


  let owners = [
    {
      id : 1,
      name: "اسم المستخدم ويمتد لسطرين",
      email: "email@gmail.com",
      phone: "966 ",
      registrationDate: "10/15/2024",
      productsCount: "0",
      rentalsCount: "0",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2b4b0680dff15b2c6fcd3dfb8d3a35f3aae415d004bfa31262d56859744012?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      isVerified: true,
      status: "active",
 
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
      idCard : [
      ]
    },
    {
      id : 2,
      name: "اسم المستخدم ويمتد لسطرين",
      email: "email@gmail.com",
      phone: "966 123456789",
      registrationDate: "10/15/2024",
      productsCount: "0",
      rentalsCount: "0",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      isVerified: false,
      status: "active",

      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
      idCard : [
        { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
        { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
      ]
    },
    {
      id : 3,
      name: "اسم المستخدم ويمتد لسطرين",
      email: "email@gmail.com",
      phone: "966 123456789",
      registrationDate: "10/15/2024",
      productsCount: "0",
      rentalsCount: "20",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      isVerified: true,
      status: "suspended",

      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
      idCard : [
        { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
        { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
      ]
    },
    {
      id : 4,
      name: "اسم المستخدم ويمتد لسطرين",
      email: "email@gmail.com",
      phone: "966 123456789",
      registrationDate: "10/15/2024",
      productsCount: "0",
      rentalsCount: "0",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      isVerified: false,
      status: "suspended",

      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
      idCard : [
        { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
        { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
      ]
    },
  ];

  let renters  = [
    {
      id : 1,
      name: "اسم المستخدم ويمتد لسطرين",
      email: "email@gmail.com",
      phone: "966 123456789",
      registrationDate: "10/15/2024",
      productsCount: "0",
      rentalsCount: "0",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2b4b0680dff15b2c6fcd3dfb8d3a35f3aae415d004bfa31262d56859744012?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      isVerified: false,
      status: "active",

      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
      idCard : [
      ],

    },
    {
      id : 2,
      name: "اسم المستخدم ويمتد لسطرين",
      email: "email@gmail.com",
      phone: "966 123456789",
      registrationDate: "10/15/2024",
      productsCount: "0",
      rentalsCount: "0",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      isVerified: false,
      status: "active",

      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
      idCard : [
        { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
        { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
      ],

    },
    {
      id : 3,
      name: "اسم المستخدم ويمتد لسطرين",
      email: "email@gmail.com",
      phone: "966 123456789",
      registrationDate: "10/15/2024",
      productsCount: "0",
      rentalsCount: "20",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      isVerified: true,
      status: "active",
 
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
      idCard : [
        { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
        { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
      ],

    },
    {
      id : 4,
      name: "اسم المستخدم ويمتد لسطرين",
      email: "email@gmail.com",
      phone: "966 123456789",
      registrationDate: "10/15/2024",
      productsCount: "0",
      rentalsCount: "0",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
      isVerified: false,
      status: "suspended",

      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
      idCard : [
        { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
        { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
      ],

    },
  ];


  // Placeholder functions
  const handleRequestsTopFilterClick = (index) => {
    const updatedButtons = RequestsTopFilter.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setRequestsTopFilter(updatedButtons);
    setActiveTop(updatedButtons[index].text);
  };



  const handleAllRequest = (index) => {
    const updatedButtons = AllRequest.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setAllRequest(updatedButtons);
    setActiveFilterText(updatedButtons[index].text);
  };

  // useEffect to update activeFilterText
  useEffect(() => {
    // const activeButton = RequestRecord.find((button) => button.isActive);
    // if (activeButton) {
    //   setActiveFilterText(activeButton.text);
    // }
    const activeButton1 = AllRequest.find((button) => button.isActive);
    if (activeButton1) {
      setActiveFilterText(activeButton1.text);
    }
  }, [RequestRecord]);

  // CSS styles
  const group = {
    background: 'white',
    padding: '16px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  return (
    <div>
      <TopProductFilter
        handleFilterTypeClick={handleRequestsTopFilterClick}
        FilterType={RequestsTopFilter}
      />
      <div style={group}>
        
         {/*it  depends on the top filter **/}
        {activeTop === 'الملاك (أصحاب المنتجات)' ? (
          <ProductListingFilter
            handlebuttonclick={handleAllRequest}
            filterbuttons={AllRequest}
            title="قائمة الملاك"
        />
        ) : activeTop === 'موظفي الموقع' ? (
            <EmployeesListingFilter
            title="قائمة موظفي الموقع"
            setnewEmployee={setnewEmployee}


             />
        ) : (
        <ProductListingFilter
          handlebuttonclick={handleAllRequest}
          filterbuttons={AllRequest}
          title="قائمة المستأجرين"
       />
        )}

      {/*does not depends  the top filter **/}

        <SearchBar setSearch={setRequestSearch} />

      {/*it  depends on the top filter **/}
        {activeTop === 'الملاك (أصحاب المنتجات)' ? 
        (
           <UsersTable removeUser={removeUser} togglerefused={togglerefused} toggleUserVerified={toggleUserVerified}  data={Allsellerss} activeFilterText={activeFilterText}/>
        ) 
        : activeTop === 'موظفي الموقع' ? (
          <EmployeesTable  newEmployee={employees} />
        ) : (
          /* lren*/ 
          <UsersTable  data={customerss} activeFilterText={activeFilterText}/>
        )}
      
      </div>
    </div>
  );
};

export default AdminUsersPage