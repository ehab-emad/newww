import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
    getPendingProducts, 
    getConfirmedProducts , 
    getRejectedProducts,
    getPublichedProductsTrue,
    getPublichedProductsFalse,
    getDraftProducts ,
    addProducts,
    getPublichedRentedTrue,// Import the new function
    getPublichedRentedFalse,
    getPendingProductsAdmin,
    deleteSeller,
    updateCustomerDetails,
    deleteCustomer,
    deleteProduct,
    addEmployee,
    deleteemployee,
    appendChatToTicket,
    updateemployeeDetails,
    getSellerById,
    getProductById,
    getcustomerById,
    changeTicketstatus,
    updateeticket,
    updateProduct,
    // Import the new function


} from './firebasefunctions'; // Adjust the import path
import { 
    getPendingSellers, 
    getInactiveSellers , 
    getActiveSellers,
    updateSellerDetails,
    getAllSellers,
    getAllCustomers,
    getActiveCustomers ,
    getInactiveCustomers,
    getActiveEmployees,// Import the new function
    getInactiveEmployees,
    getAllEmployees,
    getpendingCustomer,
    // Import the new function


} from './firebasefunctions'; // Adjust the import path
import { toast } from "react-toastify";
export const AddingProducts = createAsyncThunk(
    'product/add_Products',
    async (productData, { fulfillWithValue, rejectWithValue }) => { // Accept productData as an argument
        try {
            const Product_added = await addProducts(productData); // Pass productData to addProducts
            console.log('added', Product_added);
            return fulfillWithValue({ Product_added }); // Wrap products in an object
        } catch (error) {
            console.log(error); // Log the error directly
            return rejectWithValue(error.message); // Pass the error message to the rejected action
        }
    }
);
export const Addingemployee = createAsyncThunk(
    'product/Addingemployee',
    async (employeeData, { fulfillWithValue, rejectWithValue }) => { // Accept productData as an argument
        try {
            const employee_added = await addEmployee(employeeData); // Pass productData to addProducts
            console.log('added', employee_added);
            toast.success("تم اضافة موظف جديد بنجاح")
            return fulfillWithValue({ employee_added }); // Wrap products in an object
        } catch (error) {
            console.log(error); // Log the error directly
            return rejectWithValue(error.message); // Pass the error message to the rejected action
        }
    }
);


export const UpdatesellerAdmin = createAsyncThunk(
    'order/UpdatesellerAdmin',
    async ({ id,  sellerData }, { rejectWithValue }) => {
        try {
            const newDataSeller = await updateSellerDetails(id,sellerData);
            console.log('New status is', sellerData);
            if(sellerData.status==="approved"){
            toast.success("تم توثيق المالك ")

            }
             else if(sellerData.status==="rejected"){
                toast.warn("تم رفض  المالك ")
    
                }
            else{
                toast.warn("تم الغاء تفعيل هذا المالك ")
            }
           

            return newDataSeller; // Return the data directly
        } catch (error) {
            console.error('Error changing order status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    }
);
export const UpdatecustomerAdmin = createAsyncThunk(
    'order/UpdatecustomerAdmin',
    async ({ id,  customerData }, { rejectWithValue }) => {
        try {
            const newDataCustomer = await updateCustomerDetails(id,customerData);
            console.log('New status is', customerData);
            if(customerData.status==="approved"){
                toast.success("تم توثيق المستأجر")
    
                }
                else{
                    toast.warn("تم الغاء تفعيل هذا المستأجر")
                }
               
            return newDataCustomer; // Return the data directly
        } catch (error) {
            console.error('Error changing customer status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    }
);
export const UpdateProductAdmin = createAsyncThunk(
    'order/UpdateProductAdmin',
    async ({ id,  productData }, { rejectWithValue }) => {
        try {
            const newDataProduct = await updateProduct(id,productData);
            console.log('New status is', productData);
            if(productData.status==="approved"){
                toast.success("تم قبول المنتج")
    
                }
                else{
                    toast.warn("تم رفض المنتج  ")
                }
               
            return newDataProduct; // Return the data directly
        } catch (error) {
            console.error('Error changing customer status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    }
);
export const UpdateemployeeAdmin = createAsyncThunk(
    'order/UpdateemployeeAdmin',
    async ({ id,  employeeData }, { rejectWithValue }) => {
        try {
            const newDataemployee = await updateemployeeDetails(id,employeeData);
            console.log('New status is', employeeData);
            if(employeeData.active===true){
                toast.success("تم تفعيل هذا الموظف ")
    
                }
                else{
                    toast.warn("تم الغاء تفعيل هذا الموظف ")
                }
            return newDataemployee; // Return the data directly
        } catch (error) {
            console.error('Error changing customer status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    }
);


export const addcommentAdmin = createAsyncThunk(
    "order/addcommentAdmin",
    async ({ ticketid, newChatMessages }, { rejectWithValue }) => {
      try {
        const updatedTicket = await appendChatToTicket(ticketid, newChatMessages);
  
        if (!updatedTicket) {
          throw new Error("Firestore update failed, no data returned.");
        }
  
        console.log("✅ New ticket data:", updatedTicket);
        toast.success("تم اضافه تعليق جديد")
        return updatedTicket; // إرجاع البيانات الجديدة إلى Redux
      } catch (error) {
        console.error("❌ Error adding comment:", error);
        return rejectWithValue(error.message || "Failed to add comment");
      }
    }
  );
  export const newstateActive = createAsyncThunk(
    "order/newstateActive",
    async ({ ticketid, sellerData }, { rejectWithValue }) => {
      try {
        console.log(ticketid)
        const updatedTicket1 = await updateeticket(ticketid, sellerData);
  
        if (!updatedTicket1) {
          throw new Error("Firestore update failed, no data returned.");
        }
  
        console.log("✅ New ticket data:", updatedTicket1);
        if(sellerData.active===true)
        toast.success("تم فتح التذكره ")
    else{
        toast.success("تم غلق التذكره ")

    }
        return updatedTicket1; // إرجاع البيانات الجديدة إلى Redux
      } catch (error) {
        console.error("❌ Error adding comment:", error);
        return rejectWithValue(error.message || "Failed to add comment");
      }
    }
  );
export const DeletesellerAdmin = createAsyncThunk(
    'order/DeletesellerAdmin',
    async (id, { rejectWithValue }) => {
        try {
            const delete_Seller = await deleteSeller(id);
            toast.warn("تم حذف هذا البائع بنجاح")

            return delete_Seller; // Return the data directly
        } catch (error) 
        {
            console.error('Error changing order status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    
    }
);
export const DeleteemployeeAdmin = createAsyncThunk(
    'order/DeleteemployeeAdmin',
    async (id, { rejectWithValue }) => {
        try {
            const delete_employee = await deleteemployee(id);
            toast.warn("تم حذف هذا الموظف بنجاح")
            return delete_employee; // Return the data directly
        } catch (error) 
        {
            console.error('Error changing order status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    
    }
);
export const DeleteproductAdmin = createAsyncThunk(
    'order/DeleteproductAdmin',
    async (id, { rejectWithValue }) => {
        try {
            console.log("yes deleted ",id)
            const delete_Product = await deleteProduct(id);
            toast.warn("تم حذف هذا المنتج بنجاح")

            return delete_Product; // Return the data directly
        } catch (error) 
        {
            console.error('Error changing prducts status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    
    }
);
export const DeletecustomerAdmin = createAsyncThunk(
    'order/DeletecustomerAdmin',
    async (id, { rejectWithValue }) => {
        try {
            const delete_customer = await deleteCustomer(id);

            toast.warn("تم حذف هذا المستأجر بنجاح")

            return delete_customer; // Return the data directly
        } catch (error) 
        {
            console.error('Error changing customer status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    
    }
);
export const PublishedRentedTrue = createAsyncThunk(
    'products/PublishedRentedTrue',
    async () => {
        try {
            const published_rentedtrue = await getPublichedRentedTrue();
            console.log('[published rented true  are ', published_rentedtrue);
            return { published_rentedtrue }; // Return the data directly
        } catch (error) {
            console.error('Error published rented ture prducts:', error);
            // return rejectWithValue(error.message);
        }
    }
);

export const pendingsellers = createAsyncThunk(
    'products/pendingsellers',
    async () => {
        try {
            const pending_sellers = await getPendingSellers();
            // console.log('[pending_sellers are ', pending_sellers);
            return { pending_sellers }; // Return the data directly
        } catch (error) {
            console.error('Error published rented false prducts:', error);
           
        }
    }
);

export const pendingcustomer = createAsyncThunk(
    'products/pendingcustomer',
    async () => {
        try {
            const pending_customer = await getpendingCustomer();
            // console.log('[pending_sellers are ', pending_customer);
            return { pending_customer }; // Return the data directly
        } catch (error) {
            console.error('Error ppending_customer false prducts:', error);
           
        }
    }
);

export const PublishedRentedFalse = createAsyncThunk(
    'products/PublishedRentedFalse',
    async (sellerid,{ rejectWithValue }) => {
        try {
            const published_rentedfalse = await getPublichedRentedFalse(sellerid);
            console.log('[published rented false  are ', published_rentedfalse);
            return { published_rentedfalse }; // Return the data directly
        } catch (error) {
            console.error('Error published rented false prducts:', error);
            return rejectWithValue(error.message);
        }
    }
);


export const PublishedTrue = createAsyncThunk(
    'products/PublishedTrue',
    async () => {
        try {
            const published_true = await getPublichedProductsTrue();
            console.log('[published true', published_true);
            return { published_true }; // Return the data directly
        } catch (error) {
            console.error('Error published true:', error);
            // return rejectWithValue(error.message);
        }
    }
);


export const PublishedFalse = createAsyncThunk(
    'products/PublishedFalse',
    async () => {
        try {
            const published_false = await getPublichedProductsFalse();
            console.log('[published false', published_false);
            return { published_false }; // Return the data directly
        } catch (error) {
            console.error('Error published false:', error);
            // return rejectWithValue(error.message);
        }
    }
);

// New action to get new orders, taking sellerId as a parameter
export const DraftProducts = createAsyncThunk(
    'order/DraftProducts',
    async (sellerid, { rejectWithValue }) => {
        try {
            const products_draft = await getDraftProducts(sellerid); // Call the actual function with sellerId
            console.log('draft products', products_draft);
            return { products_draft }; // Return the data directly
        } catch (error) {
            console.error('Error fetching new orders:', error);
            return rejectWithValue(error.message);
        }
    }
);

export const ConfirmedProducts = createAsyncThunk(
    'products/ConfirmedProducts',
    async (sellerid, { rejectWithValue }) => {
        try {
            const products_confirmed = await getConfirmedProducts(sellerid);
            console.log('confiremd products', products_confirmed);
            return { products_confirmed }; // Return the data directly
        } catch (error) {
            console.error('Error confiremd prducts:', error);
            return rejectWithValue(error.message);
        }
    }
);

export const SellerbyId = createAsyncThunk(
    'products/SellerbyId',
    async (sellerid, { rejectWithValue }) => {
console.log(sellerid)
        try {
            const Sellerby_Id = await getSellerById(sellerid);
            console.log('confiremd products', Sellerby_Id);
            return { Sellerby_Id }; // Return the data directly
        } catch (error) {
            console.error('Error confiremd prducts:', error);
            return rejectWithValue(error.message);
        }
    }
);
export const customerbyId = createAsyncThunk(
    'products/customerbyId',
    async (customerid, { rejectWithValue }) => {
console.log(customerid)
        try {
            const customerby_Id = await getcustomerById(customerid);
            console.log('confiremd products', customerby_Id);
            return { customerby_Id }; // Return the data directly
        } catch (error) {
            console.error('Error confiremd prducts:', error);
            return rejectWithValue(error.message);
        }
    }
);
export const productbyId = createAsyncThunk(
    'products/productbyId',
    async (productid, { rejectWithValue }) => {
console.log(productid)
        try {
            const productby_Id = await getProductById(productid);
            console.log('confiremd products', productby_Id);
            return { productby_Id }; // Return the data directly
        } catch (error) {
            console.error('Error confiremd prducts:', error);
            return rejectWithValue(error.message);
        }
    }
);
export const PendingProducts = createAsyncThunk(
    'products/PendingProducts',
    async (sellerid, { rejectWithValue }) => {
        try {
            const products_pending = await getPendingProducts(sellerid); // Use the imported function
            console.log('pending prducts', products_pending);
            return { products_pending }; // Return the data directly
        } catch (error) {
            console.error('Error pending prducts:', error);
            return rejectWithValue(error.message);
        }
    }
);
//productpendingAdmin
export const PendingProductsAdmin = createAsyncThunk(
    'products/PendingProductsAdmin',
    async () => {
        try {
            const products_pendingAdmin = await getPendingProductsAdmin(); // Use the imported function
            // console.log('pending prducts', products_pendingAdmin);
            return { products_pendingAdmin }; // Return the data directly
        } catch (error) {
            console.error('Error pending prducts:', error);
           
        }
    }
);



export const RejectedProducts = createAsyncThunk(
    'products/RejectedProducts',
    async (sellerid, { rejectWithValue }) => {
        try {
            const products_rejected = await getRejectedProducts(sellerid); // Use the imported function
            console.log('rejected product', products_rejected);
            return { products_rejected }; // Return the data directly
        } catch (error) {
            console.error('Error fetching rejected products:', error);
            return rejectWithValue(error.message);
        }
    }
);

export const Allsellers = createAsyncThunk(
    'seller/Allsellers',
    async () => {
        try {
            const sellers = await getAllSellers(); // Call the actual function with sellerId
    
            return { sellers }; // Return the data directly
        } catch (error) {
            console.error('Error fetching new sellers:', error);
            // return rejectWithValue(error.message);
        }
    }
);

export const AllCustomers = createAsyncThunk(
    'seller/AllCustomers',
    async () => {
        try {
            const customers = await getAllCustomers(); // Call the actual function with sellerId
    console.log("the customers",customers)
            return { customers }; // Return the data directly
        } catch (error) {
          
            // return rejectWithValue(error.message);
        }
    }
);
export const AllEmployees = createAsyncThunk(
    'seller/AllEmployees',
    async () => {
        try {
            const employees = await getAllEmployees(); // Call the actual function with sellerId
    
            return { employees }; // Return the data directly
        } catch (error) {
            console.error('Error fetching new employees:', error);
            // return rejectWithValue(error.message);
        }
    }
);
export const AddProducts = createAsyncThunk(
    'product/AddProducts',
    async (productData, { fulfillWithValue, rejectWithValue }) => { // Accept productData as an argument
        try {
            const addedProduct = await addProducts(productData); // Pass productData to addProducts
            console.log('added product is ', addedProduct);
            return fulfillWithValue({ addedProduct }); // Wrap products in an object
        } catch (error) {
            console.log(error); // Log the error directly
            return rejectWithValue(error.message); // Pass the error message to the rejected action
        }
    }
);

// Initial state
const initialState = {
    add_comment:[],
    products: [], // Array to store user's products
    published_true: [], // Array to store seller's orders
    published_false: [], // Array to store seller's orders
    products_rejected: [], // Array to store cancelled orders
    products_confirmed: [], // Array to store closed orders
    products_pending: [],
    products_pendingAdmin:[], // Array to store closed orders
    products_draft: [], // Array to store closed orders
    products_added:[],
    updatedTicket1:[],
    published_rentedtrue:[],
    productby_Id:[],
    Allsellerss:[],
    published_rentedfalse:[],
    Product_added:[],
    delete_Seller:[],
    add_employee:[],
    delete_Customer:[],
    delete_Product:[],
    employees:[],
    newDataemployee:[],
    Sellerby_Id:[],
    customerby_Id:[],
    delete_employee:[],
    pending_sellers:[],
    pending_customer:[],
    customerss:[],
    loading: false,
    error: null,
    newDataSeller:[],
    newDataCustomer:[],
    success: false,
};


export const sellerPrdouctsReducer = createSlice({
    name: 'sellerproducts',
    initialState,
    reducers: {
        resetSuccess: (state) => {
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(PublishedTrue.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(PublishedTrue.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.published_true = action.payload.published_true; // Correctly store orders
            })
            .addCase(PublishedTrue.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(newstateActive.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(newstateActive.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.updatedTicket1 = action.payload.updatedTicket1; // Correctly store orders
            })
            .addCase(newstateActive.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(productbyId.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(productbyId.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.productby_Id = action.payload.productby_Id; // Correctly store orders
            })
            .addCase(productbyId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(SellerbyId.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(SellerbyId.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.Sellerby_Id = action.payload.Sellerby_Id; // Correctly store orders
            })
            .addCase(SellerbyId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(UpdateemployeeAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(UpdateemployeeAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.newDataemployee = action.payload.newDataemployee; // Correctly store orders
            })
            .addCase(UpdateemployeeAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(addcommentAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(addcommentAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.add_comment = action.payload.updatedTicket; // Correctly store orders
            })
            .addCase(addcommentAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(DeleteemployeeAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(DeleteemployeeAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.delete_employee = action.payload.delete_employee; // Correctly store orders
            })
            .addCase(DeleteemployeeAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(Addingemployee.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(Addingemployee.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.add_employee = action.payload.employee_added; // Correctly store orders
            })
            .addCase(Addingemployee.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(DeleteproductAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(DeleteproductAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.delete_Product = action.payload.delete_Product; // Correctly store orders
            })
            .addCase(DeleteproductAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(DeletesellerAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(DeletesellerAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.delete_Seller = action.payload.delete_Seller; // Correctly store orders
            })
            .addCase(DeletesellerAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(DeletecustomerAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(DeletecustomerAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.delete_Customer = action.payload.delete_customer; // Correctly store orders
            })
            .addCase(DeletecustomerAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(UpdatesellerAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(UpdatesellerAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.newDataSeller = action.payload.newDataSeller;
                 // Correctly store orders
            })
            .addCase(UpdatesellerAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(customerbyId.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(customerbyId.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.customerby_Id = action.payload.customerby_Id;
                 // Correctly store orders
            })
            .addCase(customerbyId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(UpdatecustomerAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(UpdatecustomerAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.newDataCustomer = action.payload.newDataCustomer;
                 // Correctly store orders
            })
            .addCase(UpdatecustomerAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(pendingsellers.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(pendingsellers.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.pending_sellers = action.payload.pending_sellers; // Correctly store orders
            })
            .addCase(pendingsellers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(pendingcustomer.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(pendingcustomer.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.pending_customer = action.payload.pending_customer; // Correctly store orders
            })
            .addCase(pendingcustomer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(AllCustomers.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(AllCustomers.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.customerss = action.payload.customers; // Correctly store orders
            })
            .addCase(AllCustomers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(AllEmployees.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(AllEmployees.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.employees = action.payload.employees;
            })
            .addCase(AllEmployees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            }) .addCase(Allsellers.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(Allsellers.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.Allsellerss = action.payload.sellers; // Correctly store orders
            })
            .addCase(Allsellers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(PublishedFalse.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(PublishedFalse.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.published_false = action.payload.published_false; // Correctly store orders
            })
            .addCase(PublishedFalse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(DraftProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(DraftProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products_draft = action.payload.products_draft; // Update the cancelled orders
            })
            .addCase(DraftProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

             // Handle getOrdersClosed lifecycle
             .addCase(ConfirmedProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(ConfirmedProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products_confirmed = action.payload.products_confirmed; 
            })
            .addCase(ConfirmedProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
             .addCase(RejectedProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(RejectedProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products_rejected = action.payload.products_rejected; // Update the new orders
            })
            .addCase(RejectedProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(AddingProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            // Handle the fulfilled state when the product is added successfully
            .addCase(AddingProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.products_added = action.payload.products_added; // Store as a single object
            })
            // Handle the rejected state if there's an error
            .addCase(AddingProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Use action.payload instead of action.error.message
                state.success = false;
            })
            .addCase(PendingProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            // Handle the fulfilled state when the product is added successfully
            .addCase(PendingProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.products_pending = action.payload.products_pending; // Store as a single object
            })
            // Handle the rejected state if there's an error
            .addCase(PendingProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Use action.payload instead of action.error.message
                state.success = false;
            })
            //handle productpendingAdmin
            .addCase(PendingProductsAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            // Handle the fulfilled state when the product is added successfully
            .addCase(PendingProductsAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.products_pendingAdmin = action.payload.products_pendingAdmin; // Store as a single object
            })
            // Handle the rejected state if there's an error
            .addCase(PendingProductsAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Use action.payload instead of action.error.message
                state.success = false;
            })
            .addCase(PublishedRentedTrue.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            // Handle the fulfilled state when the product is added successfully
            .addCase(PublishedRentedTrue.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.published_rentedtrue = action.payload.published_rentedtrue; // Store as a single object
            })
            // Handle the rejected state if there's an error
            .addCase(PublishedRentedTrue.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Use action.payload instead of action.error.message
                state.success = false;
            })
            .addCase(PublishedRentedFalse.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            // Handle the fulfilled state when the product is added successfully
            .addCase(PublishedRentedFalse.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.published_rentedfalse = action.payload.published_rentedfalse; // Store as a single object
            })
            // Handle the rejected state if there's an error
            .addCase(PublishedRentedFalse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Use action.payload instead of action.error.message
                state.success = false;
            })
            .addCase(AddProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            // Handle the fulfilled state when the product is added successfully
            .addCase(AddProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.product_added = action.payload.product_added; // Store as a single object
            })
            // Handle the rejected state if there's an error
            .addCase(AddProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Use action.payload instead of action.error.message
                state.success = false;
            })
                    
    
        }
    
});

// Export actions
export const { resetSuccess } = sellerPrdouctsReducer.actions;

// Export the reducer
export default sellerPrdouctsReducer.reducer;