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

// Main AdminOrders Component
const AdminOrdersPage = () => {
  // State placeholders
  const [activeTop, setActiveTop] = useState('كل الطلبات');
  const [activeFilterText, setActiveFilterText] = useState('');
  const [requestSearch, setRequestSearch] = useState('');
  const {all_closedorders,seller_CancelledOrders,rented_orders,new_orders,seller_orders}=useSelector((state) => state.seller_orders);
const userId = 'zTC4dLSjCIS2I3YAl9QTJUkro0p2'; // Replace with dynamic user ID
const dispatch=useDispatch()
const allorderss=[...new_orders,...rented_orders]
const order_Review=[...all_closedorders,...seller_CancelledOrders]
  useEffect(() => {
       dispatch(getRentedOrders(userId));
       dispatch(getSellerCancelledOrders());
       dispatch(ClosedOrders());
dispatch(getSellerOrders())
dispatch(getNewOrders())
     
 
     }, [dispatch]);
  const [RequestsTopFilter, setRequestsTopFilter] = useState([
    { text: 'سجل الطلبات', isActive: false },
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
        {activeTop === 'سجل الطلبات' ? (
          <ProductListingFilter
            handlebuttonclick={handleRequestRecord}
            filterbuttons={RequestRecord}
            title="قائمة الطلبات"
          />
        ) : (
          <ProductListingFilter
            handlebuttonclick={handleAllRequest}
            filterbuttons={AllRequest}
            title="قائمة الطلبات"
          />
        )}
        <SearchBar setSearch={setRequestSearch} />
        
        <HeaderRequest  />
          {activeTop === 'سجل الطلبات' ? 
                (
                  <RequestDetails1  activeFilterText={activeFilterText} data={order_Review}/>
                ) 
                : (
                  <RequestDetails  activeFilterText={activeFilterText} data={allorderss}/>)
                }
      </div>
    </div>
  );
};

export default AdminOrdersPage;