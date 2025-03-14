
import { useDispatch, useSelector } from 'react-redux';
import BankAccounts from './BankAccounts';
import PaymentServices from './PaymentServices';
import PaymentSummary from './PaymentSummary';
import Transactions from './Transactions';
import { SellerTransactions } from '../../store/reducers/sellerStuffReducer';
import { useEffect } from 'react';

const PaymentPage = () => {const {seller_transactions}=useSelector((state) => state.seller_stuff);

const sellerid = 'zTC4dLSjCIS2I3YAl9QTJUkro0p2';
const dispatch=useDispatch()
  useEffect(() => {
       dispatch(SellerTransactions(sellerid));
     
       console.log('new orders are',seller_transactions)

     
 
     }, [dispatch]);
  return (
    <>
      <PaymentSummary />
      <BankAccounts />
      <PaymentServices />
      <Transactions data={seller_transactions}/>
    </>
  );
};

export default PaymentPage;