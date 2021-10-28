import React from "react";
import { Container } from "../components/Container";
import AgentDashboard from "../components/Dashboard/AgentDashboard";
import { H1 } from "../components/Text";

const Agent = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="adminDashBoard">
            <AgentDashboard />
          </div>
          <div className="adminMain">
            <H1>Agennt Main</H1>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Agent;
