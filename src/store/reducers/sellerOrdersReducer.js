import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
    getOrdersBySellerId, 
    getOrdersCancelled , 
    getOrdersClosed,

    getOrdersNew ,
    getOrdersNewAdmin,
    getOrdersRented,
    setOrdersStatus,
    // Import the new function

} from './firebasefunctions'; // Adjust the import path


export const ChangeOrderStatus = createAsyncThunk(
    'order/ChangeOrderStatus',
    async ({ sellerid, orderid, newStatus }, { rejectWithValue }) => {
        try {
            const neworder_status = await setOrdersStatus(sellerid, orderid, newStatus);
            console.log('New status is', neworder_status);
            return neworder_status; // Return the data directly
        } catch (error) {
            console.error('Error changing order status:', error);
            return rejectWithValue(error.message || 'Failed to change order status');
        }
    }
);

export const getSellerOrders = createAsyncThunk(
    'order/getSellerOrders',
    async () => {
        try {
            const sellerorders = await getOrdersBySellerId();
            console.log('seller orders are', sellerorders);
            return { sellerorders }; // Return the data directly
        } catch (error) {
            console.log(error);
            // return rejectWithValue(error.message);
        }
    }
);

// New action to get new orders, taking sellerId as a parameter

export const getNewOrders = createAsyncThunk(
    'order/getNewOrders',
    async ( ) => {
        try {
            const new_orders = await getOrdersNew(); // Call the actual function with sellerId
            console.log('new orders are', new_orders);
            return { new_orders }; // Return the data directly
        } catch (error) {
            console.error('Error fetching new orders:', error);

        }
    }
);
//new action to get new order for admin
export const getNewOrdersAdmin = createAsyncThunk(
    'order/getNewOrdersAdmin',
    async ( ) => {
        try {
            const new_ordersAdmin = await getOrdersNewAdmin(); // Call the actual function with sellerId
            // console.log('new ordersAdmin are', new_ordersAdmin);
            return { new_ordersAdmin }; // Return the data directly
        } catch (error) {
            console.error('Error fetching new orders:', error);
            
        }
    }
);



// New action to get new orders, taking sellerId as a parameter
export const getRentedOrders = createAsyncThunk(
    'order/getRentedOrders',
    async ( { rejectWithValue }) => {
        try {
            const rented_orders = await getOrdersRented(); // Call the actual function with sellerId
            console.log('Rented Orders are', rented_orders);
            return { rented_orders }; // Return the data directly
        } catch (error) {
            console.error('Error fetching new orders:', error);
            return rejectWithValue(error.message);
        }
    }
);

export const getSellerCancelledOrders = createAsyncThunk(
    'order/getSellerCancelledOrders',
    async () => {
        try {
            const sellerCancelledOrders = await getOrdersCancelled();
            console.log('seller cancelled orders', sellerCancelledOrders);
            return { sellerCancelledOrders }; // Return the data directly
        } catch (error) {
            console.log(error);
            // return rejectWithValue(error.message);
        }
    }
);

export const ClosedOrders = createAsyncThunk(
    'order/ClosedOrders',
    async () => {
        try {
            const allclosedorders = await getOrdersClosed(); // Use the imported function
            console.log('closed orders are', allclosedorders);
            return { allclosedorders }; // Return the data directly
        } catch (error) {
            console.error('Error fetching closed orders:', error);
            // return rejectWithValue(error.message);
        }
    }
);

// Initial state
const initialState = {
    seller_orders: [], // Array to store seller's orders
    seller_CancelledOrders: [], // Array to store cancelled orders
    all_closedorders: [], // Array to store closed orders
    new_orders: [], // Array to store new orders
    new_ordersAdmin: [], // Array to store new ordersAdmin
    rented_orders:[],
    neworder_status:[],
    seller:[],
    loading: false,
    error: null,
    success: false,
};


export const sellerOrdersReducer = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        resetSuccess: (state) => {
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSellerOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(getSellerOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.seller_orders = action.payload.sellerorders; // Correctly store orders
            })
            .addCase(getSellerOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(getSellerCancelledOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.seller_CancelledOrders = action.payload.sellerCancelledOrders; // Update the cancelled orders
            })
            .addCase(getSellerCancelledOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

             // Handle getOrdersClosed lifecycle
             .addCase(ClosedOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(ClosedOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.all_closedorders = action.payload.allclosedorders; // Update the closed orders
            })
            .addCase(ClosedOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
             // Handle getNewOrders lifecycle
             .addCase(getNewOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getNewOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.new_orders = action.payload.new_orders; // Update the new orders
            })
            .addCase(getNewOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //handle new ordersAdmin
            .addCase(getNewOrdersAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getNewOrdersAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.new_ordersAdmin = action.payload.new_ordersAdmin; // Update the new orders
            })
            .addCase(getNewOrdersAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getRentedOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRentedOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.rented_orders = action.payload.rented_orders; // Update the new orders
            })
            .addCase(getRentedOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(ChangeOrderStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(ChangeOrderStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.neworder_status = action.payload.neworder_status; // Update the new orders
            })
            .addCase(ChangeOrderStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

       

    
        }
    
});

// Export actions
export const { resetSuccess } = sellerOrdersReducer.actions;

// Export the reducer
export default sellerOrdersReducer.reducer;