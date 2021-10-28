import React from "react";
import { Container } from "../components/Container";
import { H1 } from "../components/Text";
import AdminDashboard from '../components/Dashboard/AdminDashboard'
//import AuthNavData from '../components/userNav-old'

import NewClient from './NewClient'
import {Route, Router}from 'react-router-dom';


const Admin = () => {
  return (
    <>
      <Container>
        <div className="row" >
          <div className="adminDashBoard">
           <AdminDashboard />
          </div>
          <div className="adminMain">

          <H1>Admin Main</H1>Admin
        
          {/* <Route  path="/admin/NewClient" component={NewClient} /> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Admin;
