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
import List from './Components/employee/List';
import Add from './Components/employee/Add';
import View from './Components/employee/View';
import Edit from './Components/employee/Edit';
import ViewSalary from './Components/salary/View'
import AddSalary from "./Components/salary/Add"
import Summary from "./Components/EmployeeDashboard/Summary"
import LeaveList from "./Components/leave/List"
import AddLeave from "./Components/leave/Add"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          {/* <Route path='/home' element={<Home/>}/> */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin-dashboard' element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }>

            <Route index element={<AdminSummary />}></Route>

            <Route path='/admin-dashboard/departments' element={<DepartmentList />}></Route>
            <Route path='/admin-dashboard/add-department' element={<AddDepartment />}></Route>
            <Route path='/admin-dashboard/department/:id' element={<EditDepartment />}></Route>

            <Route path='/admin-dashboard/employees' element={<List />}></Route>
            <Route path='/admin-dashboard/add-employee' element={<Add />}></Route>
            <Route path='/admin-dashboard/employees/:id' element={<View />}></Route>
            <Route path='/admin-dashboard/employees/edit/:id' element={<Edit />}></Route>
            <Route path='/admin-dashboard/employees/salary/:id' element={<ViewSalary />}></Route>

            <Route path='/admin-dashboard/salary/add' element={<AddSalary />}></Route>

          </Route>
          <Route path='/employee-dashboard'
           element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin", "employee"]}>
                <EmployeeDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
           }
           >
             <Route index element={<Summary/>}></Route>

             <Route path='/employee-dashboard/profile/:id' element={<View/>}></Route>
             <Route path='/employee-dashboard/leaves' element={<LeaveList/>}></Route>
             <Route path='/employee-dashboard/add-leave' element={<AddLeave/>}></Route>

           </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App