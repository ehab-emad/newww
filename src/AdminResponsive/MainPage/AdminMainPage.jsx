import MonthlyStatusComponent from './MonthlyStatusComponent'
import NewOrderAdmin from './NewOrderAdmin';
import AddProductRequest from './AddProductRequest';
import NewMembersCard from './NewMembersCard';


const AdminMainPage = () => {
  return (
    <>
      <MonthlyStatusComponent />
      <NewOrderAdmin />
      <AddProductRequest />
      <NewMembersCard />
    </>
  );
};

export default AdminMainPage;