import  { useState, useEffect } from 'react';

// Import child components
import TopProductFilter from './TopProductFilter'; // Replace with the correct path
import ProductListingFilter from './ProductListingFilter'; // Replace with the correct path
import SearchBar from './SearchBar'; // Replace with the correct path
import HeaderRequest from './HeaderRequest'; // Replace with the correct path
import RequestDetails from './RequestDetails'; // Replace with the correct path
import { useDispatch, useSelector } from 'react-redux';
import { ClosedOrders, getNewOrders, getRentedOrders, getSellerCancelledOrders, getSellerOrders } from '../../store/reducers/sellerOrdersReducer';
import RequestDetails1 from './requsrDetail1';
import { PendingProductsAdmin, UpdateProductAdmin } from '../../store/reducers/sellerProductsReducer';

// Main AdminOrders Component
const AdminOrdersPage = () => {
  // State placeholders
    const { products_pendingAdmin } = useSelector((state) => state.seller_products);
  
  const [activeTop, setActiveTop] = useState('كل الطلبات');
  const [activeFilterText, setActiveFilterText] = useState('');
  const [requestSearch, setRequestSearch] = useState('');
  const {all_closedorders,seller_CancelledOrders,rented_orders,new_orders,seller_orders}=useSelector((state) => state.seller_orders);
const userId = 'zTC4dLSjCIS2I3YAl9QTJUkro0p2'; // Replace with dynamic user ID
const dispatch=useDispatch()
const allorderss=[...new_orders,...rented_orders]
const order_Review=[...all_closedorders,...seller_CancelledOrders]
  useEffect(() => {
     dispatch(PendingProductsAdmin());
   }, [dispatch]);
  const [RequestsTopFilter, setRequestsTopFilter] = useState([
   
    { text: 'كل الطلبات', isActive: true },
  ]);
  const [RequestRecord, setRequestRecord] = useState([
    { text: 'الطلبات الملغاة', isActive: false },
    { text: 'الطلبات المنتهية', isActive: false },
    { text: 'الكل', isActive: true },
  ]);
  const [AllRequest, setAllRequest] = useState([
    { text: 'الطلبات النشطة', isActive: false },
    { text: 'الطلبات الجديدة', isActive: false },
    { text: 'الكل', isActive: true },
  ]);

  // Placeholder functions
  const handleRequestsTopFilterClick = (index) => {
    const updatedButtons = RequestsTopFilter.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setRequestsTopFilter(updatedButtons);
    setActiveTop(updatedButtons[index].text);
    
    // Reset to "الكل" when top filter is clicked
    if (updatedButtons[index].text !== 'سجل الطلبات') {
      const newActiveIndex = 2; // Index of "الكل"
      setRequestRecord((prev) => 
        prev.map((btn, i) => ({ ...btn, isActive: i === newActiveIndex }))
      );
      setAllRequest((prev) => 
        prev.map((btn, i) => ({ ...btn, isActive: i === newActiveIndex }))
      );
      setActiveFilterText('الكل');
    }
  };

  const handleRequestRecord = (index) => {
    const updatedButtons = RequestRecord.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setRequestRecord(updatedButtons);
    setActiveFilterText(updatedButtons[index].text);
  };

  const handleAllRequest = (index) => {
    const updatedButtons = AllRequest.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setAllRequest(updatedButtons);
    setActiveFilterText(updatedButtons[index].text);
  };
  const [ReviewOrder, setReviewOrder] = useState(false);

  const onReviewClick = (e) => {
    // Delay the state change to ensure it does not happen during rendering
    setReviewOrder(prevState => !prevState); // Toggle the review state
  };


  const addOrderToAnotherList = async (id) => {
    const user = products_pendingAdmin.find(user => user.id === id.id); 
    if (!user) return products_pendingAdmin;

    const productData = { ...user, status: 'approved' }; 
    await dispatch(UpdateProductAdmin({ id: id.id, productData }));
    await dispatch(PendingProductsAdmin());
  };
  const deleteOrderById = async (id) => {
    const user = products_pendingAdmin.find(user => user.id === id.id); 
    if (!user) return products_pendingAdmin;

    const productData = { ...user, status: 'rejected' }; 
    await dispatch(UpdateProductAdmin({ id: id.id, productData }));
    await dispatch(PendingProductsAdmin());
  };

  // useEffect to update activeFilterText
  useEffect(() => {
    const activeButton = RequestRecord.find((button) => button.isActive);
    if (activeButton) {
      setActiveFilterText(activeButton.text);
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
       
          {/* <ProductListingFilter
            handlebuttonclick={handleAllRequest}
            filterbuttons={AllRequest}
            title="قائمة الطلبات"
          /> */}
     
        <SearchBar setSearch={setRequestSearch} />
        
        <HeaderRequest  />
        
                  <RequestDetails   addOrderToAnotherList={addOrderToAnotherList} 
              deleteOrderById={deleteOrderById} ReviewOrder={ReviewOrder}    data={products_pendingAdmin}    onReviewClick={onReviewClick} />
              {console.log(products_pendingAdmin)}  
      </div>
    </div>
  );
};

export default AdminOrdersPage;