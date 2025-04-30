import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Landingpage/Home/Home";
import LandingPage from './Landingpage/LandingPage'
import Login from "./Pages/Login"
import AdminDashboard from './Pages/AdminDashboard';
import EmployeeDashboard from './Pages/EmployeeDashboard';
import PrivateRoutes from './Utils/PrivateRoutes';
import RoleBaseRoutes from './Utils/RoleBaseRoutes';
import AdminSummary from './Components/dashboard/AdminSummary';
import DepartmentList from './Components/department/DepartmentList';
import AddDepartment from './Components/department/AddDepartment';
import EditDepartment from './Components/department/EditDepartment';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        {/* <Route path='/home' element={<Home/>}/> */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin-dashboard' element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["admin"]}>
              <AdminDashboard/>
            </RoleBaseRoutes>
          </PrivateRoutes>
        }>

          <Route index element={<AdminSummary/>}></Route>

          <Route path='/admin-dashboard/departments' element={<DepartmentList/>}></Route>
          <Route path='/admin-dashboard/add-department' element={<AddDepartment/>}></Route>
          <Route path='/admin-dashboard/department/:id' element={<EditDepartment/>}></Route>

        </Route>
        <Route path='/employee-dashboard' element={<EmployeeDashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App