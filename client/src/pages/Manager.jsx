import React from 'react'
import { Container } from '../components/Container'
import ManagerDashboard from '../components/Dashboard/ManagerDashboard'
import { H1 } from '../components/Text'

const Manager = () => {


  return (
      <>
       <Container>
        <div className="row" >
          <div className="managerDashBoard">
         <ManagerDashboard />
          </div>
          <div className="ManagerMain">
          <H1>Manager Main</H1> 
          </div>
        </div>
      </Container>
        </>
    )
}

export default Manager
