// Import Firebase services
import { firestore } from '../firebaseConfig'; // Adjust the import path as needed
import { collection, getDocs,getDoc,addDoc, deleteDoc ,query, orderBy, limit , where,doc, updateDoc, arrayUnion } from 'firebase/firestore';
import axios from 'axios'; // Import axios


// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = 'dbztvm0io'; // Replace with your Cloudinary cloud name
const CLOUDINARY_UPLOAD_PRESET = 'trent_images'; // Replace with your upload preset

export const uploadProfileImage = async (file, sellerId) => {
    try {
      // Convert the file to a base64 string
      const formData = new FormData();
    formData.append('file', file); // Append the file directly
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dbztvm0io/image/upload`,
      formData
    );

  
      const imageUrl = response.data.secure_url;
      console.log( 'image upload succss',imageUrl )
  
      // Save the image URL to Firestore in the sellers collection
      const sellerRef = doc(firestore, 'sellers', sellerId);
      await updateDoc(sellerRef, {
        profileimage: imageUrl, // Add the URL to the personalImages array
      });
  
      console.log('Image uploaded and URL saved to Firestore:', imageUrl);
      return imageUrl; // Return the image URL
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

export const uploadIdImages = async (file, side,sellerId) => {
 
      try {
        // Upload the file to Cloudinary
        const formData = new FormData();
        formData.append('file', file); // Append the file directly
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
  
        const imageUrl = response.data.secure_url; // Get the Cloudinary URL
  
        // Save the image URL to Firestore
        const sellerRef = doc(firestore, 'sellers', sellerId); // Reference the seller document
        await updateDoc(sellerRef, {
          [`idimages.${side}`]: imageUrl, // Update the idImages object with the new URL
        });
  
        console.log(`${side} image uploaded and URL saved to Firestore:`, imageUrl);
        return imageUrl;

      } catch (error) {
        console.error(`Error uploading ${side} image:`, error);
        alert(`Failed to upload ${side} image. Please try again.`);
      }
    }
  
export const updateSellerStatus = async (sellerId) => {
        try {
          // Reference the seller document
          const sellerRef = doc(firestore, 'sellers', sellerId);
      
          // Fetch the current document
          const sellerDoc = await getDoc(sellerRef);
      
          if (sellerDoc.exists()) {
            // Get the current status (default to false if the field doesn't exist)
            const currentStatus = sellerDoc.data().active || false;
            console.log ('current status is',currentStatus)
      
            // Toggle the status
            const newStatus = !currentStatus;
      
            // Update the status field
            await updateDoc(sellerRef, {
              active: newStatus, // Set the new status
            });
      
            console.log(`Seller status toggled to "${newStatus}" for sellerId:`, sellerId);
            return newStatus; // Return the new status for further use
          } else {
            throw new Error('Seller document not found');
          }
        } catch (error) {
          console.error('Error updating seller status:', error);
          throw error; // Re-throw the error to handle it in the calling code
        }
};

// Function to fetch and format products based on different criteria
export const getProducts = async () => {
    try {
        // Fetch latest products (sorted by createdAt in descending order)
        const latestQuery = query(
            collection(firestore, 'products'),
            orderBy('createdAt', 'desc'),
            limit(9)
        );
        const latestSnapshot = await getDocs(latestQuery);
        const latestProducts = latestSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        const latest_product = latestProducts;

        // Fetch top-rated products (sorted by rating in descending order)
        const topRatedQuery = query(
            collection(firestore, 'products'),
            orderBy('rating', 'desc'),
            limit(9)
        );
        const topRatedSnapshot = await getDocs(topRatedQuery);
        const topRatedProducts = topRatedSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        const topRated_product = topRatedProducts;
        // Fetch discounted products (sorted by discount in descending order)
        const discountQuery = query(
            collection(firestore, 'products'),
            orderBy('discount', 'desc'),
            limit(9)
        );
        const discountSnapshot = await getDocs(discountQuery);
        const discountProducts = discountSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        const discount_product = discountProducts;

        // Fetch all products (limit to 12, sorted by createdAt in descending order)
        const allProductsQuery = query(
            collection(firestore, 'products'),
            orderBy('createdAt', 'desc'),
            limit(12)
        );
        const allProductsSnapshot = await getDocs(allProductsQuery);
        const products = allProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log(' hi '
    
        );


        // Return the formatted data
        return {
            products,
            latest_product,
            topRated_product,
            discount_product,
            
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Re-throw the error for handling in the calling code
    }
};
export const getSellerById = async (sellerId) => {
    try {
        console.log(sellerId)
        const sellerQuery = query(
            collection(firestore, 'sellers'),
            where('id', '==', sellerId) // البحث باستخدام ID
        );
        const ordersSnapshot = await getDocs(sellerQuery);
        const newordersadmin = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(newordersadmin)
        return newordersadmin;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};
export const getProductById = async (productid) => {
    try {
        console.log(productid)
        const sellerQuery = query(
            collection(firestore, 'products'),
            where('id', '==', productid) // البحث باستخدام ID
        );
        const ordersSnapshot = await getDocs(sellerQuery);
        const newordersadmin = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(newordersadmin)
        return newordersadmin;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};
export const getcustomerById = async (customerrId) => {
    try {
        console.log(customerrId)
        const sellerQuery = query(
            collection(firestore, 'customer'),
            where('id', '==', customerrId) // البحث باستخدام ID
        );
        const ordersSnapshot = await getDocs(sellerQuery);
        const newordersadmin = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(newordersadmin)
        return newordersadmin;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};

// export const getseller = async () => {
//     try {
//         // Fetch latest products (sorted by createdAt in descending order)
//         const latestQuery = query(
//             collection(firestore, 'sellers'),
//             orderBy('createdAt', 'desc'),
//             limit(9)
//         );
//         const latestSnapshot = await getDocs(latestQuery);
//         const latestseller = latestSnapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data(),
//         }));
//         const latest_seller = latestseller;

      
//         // Fetch all products (limit to 12, sorted by createdAt in descending order)
//         const allsellers = query(
//             collection(firestore, 'sellers'),
//             orderBy('createdAt', 'desc'),
//             limit(12)
//         );
//         const allsellersSnapshot = await getDocs(allsellers);
//         const sellers = allsellersSnapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data(),
//         }));

//         console.log(' hi '
    
//         );


//         // Return the formatted data
//         return {
//             sellers,
//             latest_seller,
          
            
//         };
//     } catch (error) {
//         console.error('Error fetching seller:', error);
//         throw error; // Re-throw the error for handling in the calling code
//     }
// };

export const addProducts = async ( productData) => {
    try {
 

        // Add document to products collection
        const docRef = await addDoc(
            collection(firestore, 'products'), 
            productData
        );

        console.log('Product added with ID:', docRef.id);
        return productData;

    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

/**
 * Deletes a product by productId and sellerId.
 * @param {string} productId - The ID of the product to delete.
 * @param {string} sellerId - The ID of the seller who owns the product.
 * @returns {Promise<void>}
 */

export const deleteProductFromDB = async (DeletProductId, userId) => {
    try {
      // Reference the document directly using its ID
      const productDocRef = doc(firestore, 'products', DeletProductId);
  
      // Fetch the document to ensure it belongs to the correct user
      const productDoc = await getDoc(productDocRef);
  
      if (!productDoc.exists()) {
        console.log('No matching product found.');
        throw new Error('No matching product found.');
      }
  
      // Check if the product belongs to the correct user
      if (productDoc.data().sellerid !== userId) {
        console.log('You do not have permission to delete this product.');
        throw new Error('You do not have permission to delete this product.');
      }
  
      // Delete the document
      await deleteDoc(productDocRef);
    //   console.log('Product deleted successfully:', documentId);
  
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };
// Function to fetch admin notifications by user ID


// Function to fetch customer notifications by user ID
export const getCustomerNotifications = async (userId) => {
    try {
        const customerNotificationsQuery = query(
            collection(firestore, 'customernotifications'),
            where('userId', '==', userId),
            orderBy('createdAt', 'desc')
        );
        const customerNotificationsSnapshot = await getDocs(customerNotificationsQuery);
        const customerNotifications = customerNotificationsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return customerNotifications;
    } catch (error) {
        console.error('Error fetching customer notifications:', error);
        throw error;
    }
};
export const getAdminNotifications = async () => {
    try {
        const adminNotificationsQuery = query(
            collection(firestore, 'adminnotifications'),
            // where('adminid', '==', adminid),
            where('status', '==', 'active'),
            // orderBy('createdAt', 'desc')
        );
        const adminNotificationsSnapshot = await getDocs(adminNotificationsQuery);
        const adminNotifications = adminNotificationsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return adminNotifications;
    } catch (error) {
        console.error('Error fetching admin notifications:', error);
        throw error;
    }
};


// Function to fetch seller notifications by user ID
export const getSellerNotifications = async (sellerid) => {
    try {
        const sellerNotificationsQuery = query(
            collection(firestore, 'sellernotifications'),
            where('sellerid', '==', sellerid),
            where('status', '==', 'active'),
            orderBy('createdAt', 'desc')
        );
        const sellerNotificationsSnapshot = await getDocs(sellerNotificationsQuery);
        const sellerNotifications = sellerNotificationsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return sellerNotifications;
    } catch (error) {
        console.error('Error fetching seller notifications:', error);
        throw error;
    }
};


// Function to fetch orders by sellerId or customerId
export const getOrders = async (userId, role) => {
    try {
        let ordersQuery;

        if (role === 'seller') {
            // Fetch orders for a seller
            ordersQuery = query(
                collection(firestore, 'orders'),
                where('sellerId', '==', userId),
                orderBy('createdAt', 'desc')
            );
        } else if (role === 'customer') {
            // Fetch orders for a customer
            ordersQuery = query(
                collection(firestore, 'orders'),
                where('id', '==', userId),
                orderBy('createdAt', 'desc')
            );
        } else {
            throw new Error('Invalid role specified. Use "seller" or "customer".');
        }

        const ordersSnapshot = await getDocs(ordersQuery);
        const orders = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return orders;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

// Function to fetch tickets by userId
export const getTickets = async () => {

    try {
        const ticketsQuery = query(
            collection(firestore, 'tickets'),
            // where('userid', '==', userid),
            // orderBy('createdAt', 'desc')

        );
        const ticketsSnapshot = await getDocs(ticketsQuery);
        const tickets = ticketsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return tickets;
    } catch (error) {
        console.error('Error fetching pending products:', error);
        throw error;
    }

};

export const addCommentTicket = async (ticketid, comment) => {
    try {
        console.log('ticket  info is add', ticketid,comment)
        // Reference the ticket document by its ID
        const ticketRef = doc(firestore, 'tickets', ticketid);

        // Update the document by appending the new comment to the `chat` array
        await updateDoc(ticketRef, {
            chat: arrayUnion(comment), // Use arrayUnion to add the comment to the array
        });

        console.log('Comment added successfully!');
        return true; // Indicate success
    } catch (error) {
        console.error('Error adding comment to ticket:', error);
        throw error;
    }
};
// Function to fetch tickets by userId
export const getTransactions = async () => {

    try {
        const TransactionsQuery = query(
            collection(firestore, 'transactions'),
            // where('status', '==', 'processed'),
            // orderBy('createdAt', 'desc')
    

        );
        const transactionsSnapshot = await getDocs(TransactionsQuery);
        const transactions = transactionsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return transactions;
    } catch (error) {
        console.error('Error fetching pending products:', error);
        throw error;
    }

};
// Function to fetch transactions by sellerid

// Function to fetch pending products by user ID
export const getPendingProducts = async (sellerid) => {
    try {
        const pendingProductsQuery = query(
            collection(firestore, 'products'),
            where('sellerid', '==', sellerid),
            where('status', '==', 'pending'),
            where('published','==',false),
            orderBy('createdAt', 'desc')

        );
        const pendingProductsSnapshot = await getDocs(pendingProductsQuery);
        const pendingProducts = pendingProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingProducts;
    } catch (error) {
        console.error('Error fetching pending products:', error);
        throw error;
    }
};
// Function to fetch pending products admin
export const getPendingProductsAdmin = async () => {
    try {
        const pendingProductsQuery = query(
            collection(firestore, 'products'),
   
            where('status', '==', 'pending'),
            // where('published','==',false),
            // orderBy('createdAt', 'desc')

        );
        const pendingProductsSnapshot = await getDocs(pendingProductsQuery);
        const pendingProducts = pendingProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
// console.log(pendingProducts)
        return pendingProducts;
    } catch (error) {
        console.error('Error fetching pending products:', error);
        throw error;
    }
};
// Function to fetch confirmed products by user ID
export const getConfirmedProducts = async (sellerid) => {
    try {
        const confirmedProductsQuery = query(
            collection(firestore, 'products'),
            where('sellerid', '==', sellerid),
            where('status', '==', 'confirmed'),
            where('published','==',false),
            orderBy('createdAt', 'desc')

        );
        const confirmedProductsSnapshot = await getDocs(confirmedProductsQuery);
        const confirmedProducts = confirmedProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return confirmedProducts;
    } catch (error) {
        console.error('Error fetching confirmed products:', error);
        throw error;
    }
};

// Function to fetch rejected products by user ID
export const getRejectedProducts = async (sellerid) => {
    try {
        const rejectedProductsQuery = query(
            collection(firestore, 'products'),
            where('sellerid', '==', sellerid),
            where('status', '==', 'rejected'),
            where('published','==',false),
            orderBy('createdAt', 'desc')

        );
        const rejectedProductsSnapshot = await getDocs(rejectedProductsQuery);
        const rejectedProducts = rejectedProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return rejectedProducts;
    } catch (error) {
        console.error('Error fetching rejected products:', error);
        throw error;
    }
};

// Function to fetch rejected products by user ID
export const getDraftProducts = async (sellerid) => {
    try {
        const draftProductsQuery = query(
            collection(firestore, 'products'),
            where('sellerid', '==', sellerid),
            where('status', '==', 'draft'),
            where('published','==',false),
            orderBy('createdAt', 'desc')
        );
        const draftProductsSnapshot = await getDocs(draftProductsQuery);
        const draftProducts = draftProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return draftProducts;
    } catch (error) {
        console.error('Error fetching rejected products:', error);
        throw error;
    }
};

// Function to fetch rejected products by user ID
export const getPublichedProductsFalse = async () => {
    try {
        const rejectedProductsQuery = query(
            collection(firestore, 'products'),
            // where('sellerid', '==', sellerid),
            where('published', '==', false),
            // orderBy('createdAt', 'desc')
        );
        const rejectedProductsSnapshot = await getDocs(rejectedProductsQuery);
        const rejectedProducts = rejectedProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return rejectedProducts;
    } catch (error) {
        console.error('Error fetching rejected products:', error);
        throw error;
    }
};

export const getPublichedProductsTrue = async () => {
    try {
        const publishedTrueQuery = query(
            collection(firestore, 'products'),
            // where('sellerid', '==', sellerid),
            where('published', '==', true),
            // orderBy('createdAt', 'desc')
        );
        const publishedTrueSnapshot = await getDocs(publishedTrueQuery);
        const publishedTrue = publishedTrueSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return publishedTrue;
    } catch (error) {
        console.error('Error fetching rejected products:', error);
        throw error;
    }
};

//////
export const getPublichedRentedTrue = async (sellerid) => {
    try {
        const rentedPublishedTrueQuery = query(
            collection(firestore, 'products'),
            where('sellerid', '==', sellerid),
            orderBy('createdAt', 'desc'),
            where('published', '==', true),
            where('rented', '==', true)
        );
        const rentedPublishedSnapshot = await getDocs(rentedPublishedTrueQuery);
        const rentedPublishedTrue = rentedPublishedSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return rentedPublishedTrue;
    } catch (error) {
        console.error('Error fetching rejected products:', error);
        throw error;
    }
};

/////
export const getPublichedRentedFalse = async (sellerid) => {
    try {
        const publishedRenteFalsedQuery = query(
            collection(firestore, 'products'),
            where('sellerid', '==', sellerid),
            where('published', '==', true),
            where('rented', '==', false),
            orderBy('createdAt', 'desc')
        );
        const publishedRentedFalseQSnapshot = await getDocs(publishedRenteFalsedQuery);
        const publishedRentedFalse = publishedRentedFalseQSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return publishedRentedFalse;
    } catch (error) {
        console.error('Error fetching rejected products:', error);
        throw error;
    }
};


// get seller
export const getPendingSellers = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'sellers'),
            where('status', '==', 'pending'),
            // orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};


export const getInactiveSellers = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'sellers'),
            where('status', '==', 'inactive'),
            orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};


export const getActiveSellers = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'sellers'),
            where('status', '==', 'active'),
            orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};


export const getAllSellers = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'sellers'),
            // orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};


/// customers 

export const getAllCustomers = async () => {
    try {
        const pendingcustomerQuery = query(
            collection(firestore, 'customer'),
            // orderBy('createdAt', 'desc')
        );
        const pendingcustomerSnapshot = await getDocs(pendingcustomerQuery);
        const pendingcustomer = pendingcustomerSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingcustomer;
    } catch (error) {
        console.error('Error fetching pending customer:', error);
        throw error;
    }
};
export const getpendingCustomer = async () => {
    try {
        const pendingcustomerQuery = query(
            collection(firestore, 'customer'),
            where('status', '==', 'pending'),

            // orderBy('createdAt', 'desc')
        );
        const pendingcustomerSnapshot = await getDocs(pendingcustomerQuery);
        const pendingcustomer = pendingcustomerSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingcustomer;
    } catch (error) {
        console.error('Error fetching pending customer:', error);
        throw error;
    }
};



export const getActiveCustomers = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'customers'),
            where('status', '==', 'active'),
            orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};


export const getInactiveCustomers = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'customers'),
            where('status', '==', 'inactive'),
            orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};

///get employees ///

export const getActiveEmployees = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'employees'),
            where('status', '==', 'active'),
            orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};


export const getInactiveEmployees = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'employees'),
            where('status', '==', 'active'),
            orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};

export const getAllEmployees = async () => {
    try {
        const pendingSellersQuery = query(
            collection(firestore, 'employee'),
            // orderBy('createdAt', 'desc')
        );
        const pendingSellersSnapshot = await getDocs(pendingSellersQuery);
        const pendingSellers = pendingSellersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return pendingSellers;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};

// seller order reducer /// 
export const getOrdersBySellerId = async () => {
    try {
        const ordersQuery = query(
            collection(firestore, 'orders'),
            // where('sellerid', '==', sellerid),
            // orderBy('createdAt', 'desc') // Order by createdAt in descending order

        );
        const ordersSnapshot = await getDocs(ordersQuery);
        const orders = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return orders;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};


export const getOrdersCancelled = async () => {
    try {
        const ordersQuery = query(
            collection(firestore, 'orders'),
            // where('sellerid', '==', 'zTC4dLSjCIS2I3YAl9QTJUkro0p2'),
            where('status','==', 'cancelled') ,
            // orderBy('createdAt', 'desc') // Order by createdAt in descending order

            // Order by createdAt in descending order

        );
        const ordersSnapshot = await getDocs(ordersQuery);
        const cancelledorders = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return cancelledorders;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};

export const getOrdersClosed = async () => {
    try {
        const ordersQuery = query(
            collection(firestore, 'orders'),
            // where('sellerid', '==', sellerid),
            where('status','==', 'closed') ,
            // orderBy('createdAt', 'desc') // Order by createdAt in descending order

            // Order by createdAt in descending order

        );
        const ordersSnapshot = await getDocs(ordersQuery);
        const closedorders = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return closedorders;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};

//new order for  seller
export const getOrdersNew = async () => {
    try {
        const ordersQuery = query(
            collection(firestore, 'orders'),
            // where('sellerid', '==', sellerid),
            where('status','==', 'pending') ,
            // orderBy('createdAt', 'desc') // Order by createdAt in descending order

            // Order by createdAt in descending order

        );
        const ordersSnapshot = await getDocs(ordersQuery);
        const neworders = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return neworders;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};
//new order for admin
export const getOrdersNewAdmin = async () => {
    try {
        const ordersQuery = query(
            collection(firestore, 'orders'),
            
            where('status','==', 'pending') ,
            // orderBy('createdAt', 'desc') // Order by createdAt in descending order

            // Order by createdAt in descending order

        );
        const ordersSnapshot = await getDocs(ordersQuery);
        const newordersadmin = ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return newordersadmin;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};

export const getOrdersRented = async () => {
    try {
        const rentedordersQuery = query(
            collection(firestore, 'orders'),
            // where('sellerid', '==', sellerid),
            where('status','==', 'active') ,
            // orderBy('createdAt', 'desc') // Order by createdAt in descending order

            // Order by createdAt in descending order

        );
        const rentedordersSnapshot = await getDocs(rentedordersQuery);
        const rentedorders = rentedordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return rentedorders;
    } catch (error) {
        console.error('Error fetching pending sellers:', error);
        throw error;
    }
};

export const setOrdersStatus = async (sellerid, orderid, newStatus) => {
    try {
        // Query to find the specific order
        const setordersQuery = query(
            collection(firestore, 'orders'),
            where('sellerid', '==', sellerid),
            where('status', '==', 'pending')
        );

        const setorderSnapshot = await getDocs(setordersQuery);
        const rentedorders = setorderSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // Find the specific order by orderid
        const orderToUpdate = rentedorders.find(order => order.id === orderid);

        if (orderToUpdate) {
            // Update the order status
            const orderRef = doc(firestore, 'orders', orderToUpdate.id);
            await updateDoc(orderRef, {
                status: newStatus
            });

            console.log(`Order ${orderid} status updated to ${newStatus}`);
            return { success: true, message: `Order status updated to ${newStatus}` };
        } else {
            console.log(`Order ${orderid} not found or not active`);
            return { success: false, message: `Order ${orderid} not found or not active` };
        }
    } catch (error) {
        console.error('Error updating order status:', error);
        throw error;
    }
};
///

export const updateSellerDetails = async (id, sellerData) => {
    try {
        // Query to find the specific order
        const setsellersQuery = query(
            collection(firestore, 'sellers'),
            where('id', '==', id),
            // where('status', '==', 'pending')
        );

        const setsellerSnapshot = await getDocs(setsellersQuery);
        const rentedseler = setsellerSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // Find the specific order by orderid
        const selerToUpdate = rentedseler.find(order => order.id === id);

        if (selerToUpdate) {
            // Update the order status
            console.log(sellerData)
            const orderRef = doc(firestore, 'sellers', selerToUpdate.id);
            await updateDoc(orderRef, {
               ...sellerData
            });

            console.log(`seller ${id} status updated to ${sellerData}`);
            return { success: true, message: `Order status updated to ${sellerData}` };
        } else {
            console.log(`Order ${id} not found or not active`);
            return { success: false, message: `Order ${id} not found or not active` };
        }
    } catch (error) {
        console.error('Error updating order status:', error);
        throw error;
    }
    // try {
    //   // Reference the seller document by its ID
    //   const sellerRef = doc(firestore, 'sellers', id);
  
    //   // Update the document with the new details
    //   await updateDoc(sellerRef, {
    //     ...sellerData, // Spread the sellerData object to update multiple fields
    //     updatedAt: new Date().toISOString(), // Add a timestamp for the update
    //   });
  
    //   console.log('Seller details updated successfully!');
    //   return true; // Indicate success
    // } catch (error) {
    //   console.error('Error updating seller details:', error);
    //   throw error; // Re-throw the error for handling in the calling code
    // }
  };
  export const updateCustomerDetails = async (id, customerData) => {
    try {
        // Query to find the specific order
        const setcustomersQuery = query(
            collection(firestore, 'customer'),
            where('id', '==', id),
            // where('status', '==', 'pending')
        );

        const setcustomerSnapshot = await getDocs(setcustomersQuery);
        const rentedcustomer = setcustomerSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // Find the specific order by orderid
        const customerToUpdate = rentedcustomer.find(order => order.id === id);

        if (customerToUpdate) {
            // Update the order status
            // console.log(sellerData)
            const orderRef = doc(firestore, 'customer', customerToUpdate.id);
            await updateDoc(orderRef, {
               ...customerData
            });

            console.log(`customer ${id} status updated to ${customerData}`);
            return { success: true, message: `customer status updated to ${customerData}` };
        } else {
            console.log(`customer ${id} not found or not active`);
            return { success: false, message: `Order ${id} not found or not active` };
        }
    } catch (error) {
        console.error('Error updating order status:', error);
        throw error;
    }
    // try {
    //   // Reference the seller document by its ID
    //   const sellerRef = doc(firestore, 'sellers', id);
  
    //   // Update the document with the new details
    //   await updateDoc(sellerRef, {
    //     ...sellerData, // Spread the sellerData object to update multiple fields
    //     updatedAt: new Date().toISOString(), // Add a timestamp for the update
    //   });
  
    //   console.log('Seller details updated successfully!');
    //   return true; // Indicate success
    // } catch (error) {
    //   console.error('Error updating seller details:', error);
    //   throw error; // Re-throw the error for handling in the calling code
    // }
  };
  export const updateemployeeDetails = async (id, employeeData) => {
    try {
        console.log("nnn")
        // Query to find the specific order
        const setcustomersQuery = query(
            collection(firestore, 'employee'),
            where('id', '==', id),
            // where('status', '==', 'pending')
        );

        const setcustomerSnapshot = await getDocs(setcustomersQuery);
        const rentedcustomer = setcustomerSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // Find the specific order by orderid
        const customerToUpdate = rentedcustomer.find(order => order.id === id);

        if (customerToUpdate) {
            // Update the order status
            console.log(employeeData)
            const orderRef = doc(firestore, 'employee', customerToUpdate.id);
            await updateDoc(orderRef, {
               ...employeeData
            });

            console.log(`customer ${id} status updated to ${employeeData}`);
            return { success: true, message: `customer status updated to ${employeeData}` };
        } else {
            console.log(`customer ${id} not found or not active`);
            return { success: false, message: `Order ${id} not found or not active` };
        }
    } catch (error) {
        console.error('Error updating order status:', error);
        throw error;
    }
  
  };


export const deleteSeller = async (id) => {
    try {
        // إنشاء استعلام للبحث عن البائع المطلوب
        const sellerQuery = query(
            collection(firestore, "sellers"),
            where("id", "==", id)
        );

        // جلب البيانات بناءً على الاستعلام
        const sellerSnapshot = await getDocs(sellerQuery);
        const sellers = sellerSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // التأكد من أن البائع موجود قبل الحذف
        const sellerToDelete = sellers.find(seller => seller.id === id);

        if (sellerToDelete) {
            // حذف المستند من Firestore
            const sellerRef = doc(firestore, "sellers", sellerToDelete.id);
            await deleteDoc(sellerRef);

            console.log(`Seller ${id} has been deleted successfully.`);
            return { success: true, message: `Seller ${id} deleted successfully.` };
        } else {
            console.log(`Seller ${id} not found.`);
            return { success: false, message: `Seller ${id} not found.` };
        }
    } catch (error) {
        console.error("Error deleting seller:", error);
        return { success: false, message: "Failed to delete seller." };
    }
};
export const deleteProduct = async (id) => {

    try {
        console.log("deleted")
        const productQuery = query(
            collection(firestore, "products"),
            where("productid", "==", id)

        );

        // جلب البيانات بناءً على الاستعلام
        const productSnapshot = await getDocs(productQuery);
        const products = productSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        const productsellerToDelete = products.find(seller => seller.id === id);

        if (productsellerToDelete) {
            // حذف المستند من Firestore
            const productRef = doc(firestore, "products", productsellerToDelete.id);
            await deleteDoc(productRef);

            console.log(`products ${id} has been deleted successfully.`);
            return { success: true, message: `products ${id} deleted successfully.` };
        } else {
            console.log(`products ${id} not found.`);
            return { success: false, message: `products ${id} not found.` };
        }
    } catch (error) {
        console.error("Error deleting seller:", error);
        return { success: false, message: "Failed to delete seller." };
    }
};
export const deleteCustomer = async (id) => {
    try {
        // إنشاء استعلام للبحث عن البائع المطلوب
        const CustomerQuery = query(
            collection(firestore, "customer"),
            where("id", "==", id)
        );

        // جلب البيانات بناءً على الاستعلام
        const customerSnapshot = await getDocs(CustomerQuery);
        const customers = customerSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // التأكد من أن البائع موجود قبل الحذف
        const customerToDelete = customers.find(customer => customer.id === id);

        if (customerToDelete) {
            // حذف المستند من Firestore
            const customerRef = doc(firestore, "customer", customerToDelete.id);
            await deleteDoc(customerRef);

            console.log(`customer ${id} has been deleted successfully.`);
            return { success: true, message: `customer ${id} deleted successfully.` };
        } else {
            console.log(`customer ${id} not found.`);
            return { success: false, message: `customer ${id} not found.` };
        }
    } catch (error) {
        console.error("Error deleting customer:", error);
        return { success: false, message: "Failed to delete seller." };
    }
};
export  const deleteemployee = async (id) => {
    try {
        // إنشاء استعلام للبحث عن البائع المطلوب
        const CustomerQuery = query(
            collection(firestore, "employee"),
            where("id", "==", id)
        );

        // جلب البيانات بناءً على الاستعلام
        const customerSnapshot = await getDocs(CustomerQuery);
        const customers = customerSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // التأكد من أن البائع موجود قبل الحذف
        const customerToDelete = customers.find(customer => customer.id === id);

        if (customerToDelete) {
            // حذف المستند من Firestore
            const customerRef = doc(firestore, "employee", customerToDelete.id);
            await deleteDoc(customerRef);

            console.log(`customer ${id} has been deleted successfully.`);
            return { success: true, message: `customer ${id} deleted successfully.` };
        } else {
            console.log(`customer ${id} not found.`);
            return { success: false, message: `customer ${id} not found.` };
        }
    } catch (error) {
        console.error("Error deleting customer:", error);
        return { success: false, message: "Failed to delete seller." };
    }
};
export async function addEmployee(employeeData) {
    try {
      // Reference to the 'employee' collection
      const employeeCollection = collection(firestore, 'employee');
  
      // Add a new document with an auto-generated ID
      const docRef = await addDoc(employeeCollection, employeeData);
  
      // Add the document ID as a field in the document
      await updateDoc(docRef, {
        id: docRef.id // Add the document ID as a field
      });
  
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  export async function appendChatToTicket(ticketid, newChatMessages) {
    try {
      const ticketRef = doc(firestore, "tickets", ticketid);
  
      // تحديث Firestore بإضافة التعليق الجديد
      await updateDoc(ticketRef, {
        chat: arrayUnion(newChatMessages),
      });
  
      // جلب البيانات المحدثة من Firestore بعد التحديث
      const updatedDoc = await getDoc(ticketRef);
      if (!updatedDoc.exists()) {
        throw new Error("Failed to fetch updated ticket data.");
      }
  
      console.log("✅ Chat messages appended successfully!");
      return updatedDoc.data(); // إرجاع البيانات المحدثة
    } catch (error) {
      console.error("❌ Error appending chat messages:", error);
      throw error; // رمي الخطأ ليتم التعامل معه في الـ thunk
    }
  }
  export const updateeticket = async (id, sellerData) => {
    try {
        console.log(id)
        // Query to find the specific order
        const setcustomersQuery = query(
            collection(firestore, 'tickets'),
            where('ticketid', '==', id),
            // where('status', '==', 'pending')
        );

        const setcustomerSnapshot = await getDocs(setcustomersQuery);
        const rentedcustomer = setcustomerSnapshot.docs.map(doc => ({
            id: doc.ticketid,
            ...doc.data(),
        }));

        // Find the specific order by orderid
        const customerToUpdate = rentedcustomer.find(order => order.ticketid === id);

        if (customerToUpdate) {
            // Update the order status
            console.log(sellerData)
            const orderRef = doc(firestore, 'tickets', customerToUpdate.ticketid);
            await updateDoc(orderRef, {
               ...sellerData
            });

            // console.log(`customer ${id} status updated to ${employeeData}`);
            return { success: true, message: `customer status updated to ${sellerData}` };
        } else {
            console.log(`customer ${id} not found or not active`);
            return { success: false, message: `Order ${id} not found or not active` };
        }
    } catch (error) {
        console.error('Error updating order status:', error);
        throw error;
    }
  
  };
