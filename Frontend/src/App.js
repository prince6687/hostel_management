import React from 'react'
import DashBoard from './components/DashBoard'
import DashBoardRoomDetails from './components/DashBoardRoomDetails'
import DashBoardRoomChange from './components/DashBoardRoomChange'
import LandingPage from './components/LandingPage'
import LandingPageAdmin from './components/LandingPageAdmin'
import AdminDB from './components/AdminDB'
import AdminDBnew from './components/AdminDBnew'
import AddHostel from './components/AddHostel'
import {
  Routes,
  Route,
} from "react-router-dom";
import AddRooms from './components/AddRooms'
import AddGuestRoom from './components/AddGuestRoom'
import AddCanteen from './components/AddCanteen'
import AdminProfile from './components/AdminProfile'
import Inbox from './components/Inbox'
import AccessLogs from './components/AccessLogs'
import Applications from './components/Applications'
import UserProfile from './components/UserProfile'
import UserCanteen from './components/UserCanteen'
import UserGuestHouse from './components/UserGuestHouse'
import UserContactAdmin from './components/UserContactAdmin'
import PaymentGateway from './components/PaymentGateway'
import PaymentSuccess from './components/PaymentSuccess'
import GetProfile from './components/GetProfile'
import GuesthousePaymentGateway from './components/Guesthousepayment' ;
import ConnectBusiness from './components/hosteerbusiness'
const App = () => {
  return (
    <div>
        {sessionStorage.getItem("id")?
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/dashboard/home" element={<DashBoard/>} />
          <Route path="/user/dashboard/room/details" element={<DashBoardRoomDetails/>} />
          <Route path="/user/dashboard/room/change" element={<DashBoardRoomChange/>} />
          <Route path="/user/dashboard/canteen" element={<UserCanteen/>} />
          <Route path="/user/dashboard/guest-house/req" element={<UserGuestHouse/>} />
          <Route path="/user/dashboard/contact-admin" element={<UserContactAdmin/>} />

          <Route path="/admin" element={<LandingPageAdmin/>} />
          <Route path="/admin/dashboard" element={<AdminDB/>} />
          <Route path="/admin/dashboard/new-admin" element={<AdminDBnew/>} />
          <Route path="/admin/dashboard/hostel/add" element={<AddHostel/>} />
          <Route path="/admin/dashboard/room/add" element={<AddRooms/>} />
          <Route path="/admin/dashboard/guest-room/add" element={<AddGuestRoom/>} />
          <Route path="/admin/dashboard/canteen/add" element={<AddCanteen/>} />
          <Route path="/admin/dashboard/profile" element={<AdminProfile/>} />
          <Route path="/admin/dashboard/inbox" element={<Inbox/>} />
          <Route path="/admin/dashboard/accesslogs" element={<AccessLogs/>} />
          <Route path="/admin/dashboard/applications" element={<Applications/>} />
          <Route path="/user/dashboard/profile" element={<UserProfile/>} />
          <Route path="/payment-gateway" element={<PaymentGateway/>} />
          <Route path="/payment-gateway/success" element={<PaymentSuccess/>} />
          <Route path="/get-profile" element={<GetProfile/>} />
          <Route path="/guesthouse/payment" element={<GuesthousePaymentGateway/>} />
           </Routes>
    : 
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/admin" element={<LandingPageAdmin/>} />
    <Route path="/user/dashboard/home" element={<LandingPage />} />
    <Route path="/user/dashboard/room/details" element={<LandingPage />} />
    <Route path="/user/dashboard/room/change" element={<LandingPage />} />
    <Route path="/user/dashboard/canteen" element={<LandingPage/>} />
    <Route path="/user/dashboard/guest-house/req" element={<LandingPage/>} />
    <Route path="/user/dashboard/contact-admin" element={<LandingPage/>} />
    <Route path="/admin/dashboard" element={<LandingPageAdmin/>} />
    <Route path="/admin/dashboard/new-admin" element={<LandingPageAdmin/>} />
    <Route path="/admin/dashboard/hostel/add" element={<LandingPageAdmin/>} />
    <Route path="/admin/dashboard/room/add" element={<LandingPageAdmin/>} />
    <Route path="/admin/dashboard/guest-room/add" element={<LandingPageAdmin/>} />
    <Route path="/admin/dashboard/canteen/add" element={<LandingPageAdmin/>} />
          <Route path="/admin/dashboard/profile" element={<LandingPageAdmin/>} />
          <Route path="/admin/dashboard/inbox" element={<LandingPageAdmin/>} />
          <Route path="/admin/dashboard/accesslogs" element={<LandingPageAdmin/>} />
          <Route path="/admin/dashboard/applications" element={<LandingPageAdmin/>} />
          <Route path="/payment-gateway" element={<LandingPage/>} />
          <Route path="/payment-gateway/success" element={<LandingPage/>} />
          <Route path="/get-profile" element={<LandingPage/>} />
          <Route path="/connect/business" element={<ConnectBusiness />} />
        </Routes>}
      {/* <LandingPage/> */}
      {/* <LandingPageAdmin/> */}
      {/* <DashBoard/> */}
      {/* <DashBoardRoomDetails/> */}
      {/* <DashBoardRoomChange/> */}
      {/* <AdminDB/> */}
      {/* <AdminDBnew/> */}
      {/* <AddHostel/> */}
    </div>
  )
}

export default App
