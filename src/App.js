import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import LoginPage from './pages/customer/LoginPage';
import Register from './pages/customer/Register';
import About from './pages/customer/About';
import Menu from './pages/customer/Menu';
import NotFund from './pages/customer/NotFund';
import CommonQA from './pages/customer/CommonQA';
import Store from './pages/customer/Store';
import Cart from './pages/customer/Cart';
import UserProfile from './pages/customer/UserProfile';
import UserOrder from './pages/customer/UserOrder';
import Footer from './components/Footer';
import StoreIndex from './pages/store/StoreIndex';
import StoreLoginPage from './pages/store/StoreLoginPage';
import StoreRegister from './pages/store/StoreRegister';
import StoreProduct from './pages/store/StoreProduct';
import StoreAddNewMeal from './pages/store/StoreAddNewMeal';
import StoreOrder from './pages/store/StoreOrder';
import StoreOrderHistory from './pages/store/StoreOrderHistory';
import StoreCustomerFeedback from './pages/store/StoreCustomerFeedback';
import Activity from './pages/customer/Activity';
import ActivityPage from './pages/customer/activity/ActivityPage';
import PasswdTest from './components/PasswdTest';
import CheckOutPage from './pages/customer/CheckOutPage';


/*** 
 * 要使用時要啟動：
 * npm start
 * json-server --watch data/db.json --port 8000
 * 
 * 下面要先安裝（可能我有些忘記要裝啥了）：
 * npm install @mui/material @emotion/react @emotion/styled
 * npx json-server --watch data/db.json --port 8000
 * npm install react-bootstrap bootstrap
 * npm install react-slick --save
 * npm i bootstrap-icons
 * npm install react-icons --save
 * npm install slick-carousel --save
 * npm install uuidv4
 * npm i -S @react-google-maps/api
 * npm install axios
 * npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
 * npm install antd --save
 * npm install --force --save google-map-react
 * npm i qs
 * npm i react-infinite-scroll-component
 * npm install react-hook-form
 * npm i @hookform/resolvers
 * npm install formik --save
 * npm i yup
 ***/
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* customer */}
          <Route path='/' element={<Home/>} exact />
          <Route path='/LoginPage' element={<LoginPage/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Activity' element={<Activity/>} />
          <Route path='/CommonQA' element={<CommonQA/>} />
          <Route path='/Menu' element={<Menu/>} />
          <Route path='/store/:sid' element={<Store/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/UserProfile' element={<UserProfile/>} />
          <Route path='/orders' element={<UserOrder/>} />
          <Route path='/checkout' element={<CheckOutPage/>}/>
          <Route path='/activity/:actid' element={<ActivityPage/>}/>
          {/* store */}
          <Route path='/StoreIndex' element={<StoreIndex/>} />
          <Route path='/StoreLoginPage' element={<StoreLoginPage/>} />
          <Route path='/StoreRegister' element={<StoreRegister/>} />
          <Route path='/StoreProduct' element={<StoreProduct/>} />
          <Route path='/StoreAddMeal' element={<StoreAddNewMeal/>} />
          <Route path='/StoreOrder' element={<StoreOrder/>} />
          <Route path='/StoreOrderHistory' element={<StoreOrderHistory/>} />
          <Route path='/StoreCustomerFeedback' element={<StoreCustomerFeedback/>} />
          {/* 404 */}
          <Route path='*' element={<NotFund/>}/>
          {/* test */}
          <Route path='/passwdtest' element={<PasswdTest/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App