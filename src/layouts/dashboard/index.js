
import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { Stack } from "@mui/material";
import SideBar from "./SideBar.jsx";



const isAuthenticated= true

const DashboardLayout = () => {

 if(!isAuthenticated){
    return <Navigate to='/auth/login' />
 }
  return (
    <>
    <Stack direction={'row'}>

      <SideBar/>
      <Outlet/>
      

    </Stack>
      

     
      

     

      
    </>
  );
};

export default DashboardLayout;
 