import { useEffect, useState } from 'react';
import TopProductFilter from './TopProductFilter';
import SearchBar from './SearchBar';
import ProductListingFilter from './ProductListingFilter';
import ProductInfo from './ProductInfo';
import LabelHeader from './LabelHeader';
import { useDispatch, useSelector } from 'react-redux';
import { PublishedFalse, PublishedTrue } from '../../store/reducers/sellerProductsReducer';

const MyProductsHeader = [
  { label: 'الصورة', className: 'image' },
  { label: 'بيانات المنتج', className: 'productData' },
  { label: 'التصنيف', className: 'category' },
  { label: 'حالة المنتج', className: 'productStatus' },
  { label: 'الماركة', className: 'brand' },
  { label: 'السعر', className: 'price' },
  { label: 'الخصم', className: 'discount' },
  { label: 'إجراءات', className: 'actions' }
];

const Products = ({ currentPage, setCurrentPage }) => {
  const [productsSearch, setProductsSearch] = useState('');
  const [myProductsFilter, setMyProductsFilter] = useState([
    // { text: 'طلبات رفع المنتجات', isActive: false },
    { text: 'كل المنتجات', isActive: true },
  ]);
  const [activeTop, setActiveTop] = useState('كل المنتجات');

  const [publishedFilterBtns, setPublishedFilterBtns] = useState([
    { text: 'المنتجات المنشورة', isActive: false },
    { text: 'المنتجات غير المنشورة', isActive: false },
    { text: 'الكل', isActive: true },
  ]);

  const [activeFilterText, setActiveFilterText] = useState('الكل');
  const {  delete_employee} = useSelector((state) => state.seller_products);

const dispatch=useDispatch()
  useEffect(() => {
    dispatch(PublishedTrue())
    dispatch(PublishedFalse())
    const activeTopFilter = myProductsFilter.find(button => button.isActive);
    setActiveTop(activeTopFilter ? activeTopFilter.text : '');

    const activeButton = activeTop === 'كل المنتجات' 
       ? publishedFilterBtns.find(button => button.isActive) 
       : null;

    setActiveFilterText(activeButton ? activeButton.text : 'الكل'); // Default to 'الكل'
  }, [myProductsFilter, activeTop, publishedFilterBtns,delete_employee,dispatch]);

  const handlePublishedButtons = (index) => {
    const updatedButtons = publishedFilterBtns.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setPublishedFilterBtns(updatedButtons);
    
    // Update activeFilterText based on new active button
    const activeButton = updatedButtons.find(button => button.isActive);
    setActiveFilterText(activeButton ? activeButton.text : 'الكل');
  };

  const handleFilterTypeClick = (index) => {
    const updatedButtons = myProductsFilter.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setMyProductsFilter(updatedButtons);

    // Reset published buttons to "الكل" active when changing filter type
    setPublishedFilterBtns(prev => 
      prev.map((btn, i) => ({ ...btn, isActive: i === 2 })) // Set "الكل" active
    );

    setActiveFilterText('الكل'); // Set to 'الكل' directly
  };

  const groupStyle = {
    background: "white",
    padding: "16px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    gap: '16px'
  };

  return (
    <>
      <TopProductFilter 
        handleFilterTypeClick={handleFilterTypeClick}  
        filterType={myProductsFilter} 
      />
      <div style={groupStyle}>
        {activeTop === 'كل المنتجات' && (
          <ProductListingFilter 
            handleButtonClick={handlePublishedButtons} 
            filterButtons={publishedFilterBtns} 
            title='قائمة المنتجات' 
          />
        )}
        <SearchBar setSearch={setProductsSearch} />
        <LabelHeader data={MyProductsHeader} />
        <ProductInfo 
          setCurrentPage={setCurrentPage} 
          activeFilterText={activeFilterText} 
          activeTop={activeTop} 
          productsSearch={productsSearch} 
        />
      </div>
    </>
  );
};

export default Products;