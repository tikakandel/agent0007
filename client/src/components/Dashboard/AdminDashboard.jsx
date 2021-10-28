import React from "react";
import { Link, Swtch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  NavigationItem,
  NavigationList,
  StyledNav,
  Header,
  Container,
} from "../../styles/DashCSS";
import NewClient from "../../pages/NewClient";
import AuthedRoute from "../../utils/AuthedRoute";

const AdminDashboard = () => {
  return (
    <>
      <Container>
        <Header>
          <Router>
            <StyledNav>
              <NavigationList>
                <NavigationItem>
                  <Link exact path to="/admin/NewClient">NewClient</Link>
                </NavigationItem>
                <NavigationItem>
                  <Link exact path to="/admin/currentapplication">
                    Current Application
                  </Link>
                </NavigationItem>
                <NavigationItem>
                  <Link exact path to="/admin/fee">Fee Information</Link>
                </NavigationItem>
                <NavigationItem>
                  <Link exact path to="/admin/CancleApplication">Cancel Application</Link>
                </NavigationItem>
                <NavigationItem>
                  <Link exact path to="/admin/tota">Total Payment</Link>
                </NavigationItem>
              </NavigationList>
            </StyledNav>
          </Router>
        </Header>
      </Container>
      <hr />
    </>
  );
};

export default AdminDashboard;
