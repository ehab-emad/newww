import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 

    getSellerNotifications,
    getAdminNotifications,// Import the new function
    getTickets,
    getTransactions,
    
    addCommentTicket,
    

} from './firebasefunctions'; // Adjust the import path



export const TicketAddComment = createAsyncThunk(
    'seller/TicketAddComment',
    async ({ ticketid, comment }, { rejectWithValue }) => { // Accept a single payload object
        try {
            console.log('Adding comment to ticket:', ticketid, comment);

            // Call the Firestore function to add the comment
            await addCommentTicket(ticketid, comment);

            // Return the ticketid and comment to update the Redux state
            return { ticketid, comment };
        } catch (error) {
            console.error('Error adding comment to ticket:', error);
            return rejectWithValue(error.message);
        }
    }
);


export const SellerTransactions = createAsyncThunk(
    'seller/SellerTransactions',
    async ( { rejectWithValue }) => {
        try {
            const seller_transactions = await getTransactions(); // Call the actual function with sellerId
            console.log('Seller Transactions are', seller_transactions);
            return {seller_transactions}; // Return the data as seller_notification
        } catch (error) {
            console.error('Error fetching seller notifications:', error);
            return rejectWithValue(error.message);
        }
    }
);



export const SellerNotifications = createAsyncThunk(
    'notification/SellerNotifications',
    async (sellerid, { rejectWithValue }) => {
        try {
            const seller_notification = await getSellerNotifications(sellerid); // Call the actual function with sellerId
            console.log('seller notifications are', seller_notification);
            return {seller_notification}; // Return the data as seller_notification
        } catch (error) {
            console.error('Error fetching seller notifications:', error);
            return rejectWithValue(error.message);
        }
    }
);
export const AdminNotifications = createAsyncThunk(
    'notification/AdminNotifications',
    async () => {
        try {
            const admin_notification = await getAdminNotifications(); // Call the actual function with sellerId
            // console.log('admin notifications are', admin_notification);
            return {admin_notification}; // Return the data as seller_notification
        } catch (error) {
            console.error('Error fetching admin notifications:', error);
            // return rejectWithValue(error.message);
        }
    }
);

export const GetAllTickets = createAsyncThunk(
    'tickets/GetAllTickets',
    async () => {
        try {
            const seller_tickets = await getTickets(); // Call the actual function with sellerId
            console.log('tickets are ', seller_tickets);
            return {seller_tickets}; // Return the data as seller_notification
        } catch (error) {
            console.error('Error fetching seller notifications:', error);
            // return rejectWithValue(error.message);
        }
    }
);



// Initial state
const initialState = {
    admin_notification:[],
    seller_notification:[], 
    seller_tickets:[], 
    seller_transactions:[],
    seller_comment:[],
    loading: false,
    error: null,
    success: false,
};


export const sellerStuffReducer = createSlice({
    name: 'stuff',
    initialState,
    reducers: {
        resetSuccess: (state) => {
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(SellerNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(SellerNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.seller_notification = action.payload.seller_notification; // Correctly store orders
            })
            .addCase(SellerNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(AdminNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(AdminNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.admin_notification = action.payload.admin_notification; // Correctly store orders
            })
            .addCase(AdminNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(GetAllTickets.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(GetAllTickets.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.seller_tickets = action.payload.seller_tickets; // Correctly store orders
            })
            .addCase(GetAllTickets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(SellerTransactions.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(SellerTransactions.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.seller_transactions = action.payload.seller_transactions; // Correctly store orders
            })
            .addCase(SellerTransactions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
            .addCase(TicketAddComment.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(TicketAddComment.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.seller_comment = action.payload.seller_comment; // Correctly store orders
            })
            .addCase(TicketAddComment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            })
 
 
 
       
  
                    
    
        }
    
});

// Export actions
export const { resetSuccess } = sellerStuffReducer.actions;

// Export the reducer
export default sellerStuffReducer.reducer;