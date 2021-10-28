import React from "react";
import { Link } from "react-router-dom";
import NewClient from "../../pages/NewClient";
import {
  NavigationItem,
  NavigationList,
  StyledNav,
  Header,
  Container,
} from "../../styles/DashCSS";
const AgentDashboard = () => {
  return (
    <Container>
      Agent dashboard
      <Header>
        <StyledNav>
          <NavigationList>
            <Link exact path to="/agent/NewClient">
              New Application
            </Link>
          </NavigationList>
          <NavigationList>
            <Link exact path to="/agent/currentapplication">
              Application In Progress
            </Link>
          </NavigationList>
          <NavigationList>
            <Link exact path to="/agent/pendingapplication">
              Pending Application
            </Link>
          </NavigationList>
          <NavigationList>
            <Link exact path to="agent/completed">
              Completed
            </Link>
          </NavigationList>
        </StyledNav>
      </Header>
    </Container>
  );
};

export default AgentDashboard;
