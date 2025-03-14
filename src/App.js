import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import AdminDashboard from './AdminResponsive/Dashboard/AdminDashboard';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div className="App">
      
        <ToastContainer position="top-right" autoClose={3000} />
      <AdminDashboard/>
    </div>
  );
}

export default App;
