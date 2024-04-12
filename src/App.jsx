import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import NoPage from './pages/NoPage/NoPage';
import MyState from './context/data/MyState';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/Admin/pages/AddProduct';
import UpdateProduct from './pages/Admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/AllProducts/AllProducts'

function App() {
  return (
    <>
<MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<ProtectedRoutes><Order /></ProtectedRoutes>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Dashboard" element={<ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproduct" element={<ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={<ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
    </>
  )
}

export default App


export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  // console.log(admin.user.email)
  if (admin.user.email === 'admin@xyz.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}