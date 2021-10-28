import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationItem,
    NavigationList,
    StyledNav,
    Header,
    Container } from '../../styles/DashCSS'

const ManagerDashboard = () => {
    return (
        <Container>
            Manager dashboard
            <Header>
                <StyledNav>
                    <NavigationItem>
                        <NavigationList>
                            <Link exact path to="/manager/NewClient">
                            New Application
                            </Link>
                            </NavigationList>
                            <NavigationList>
                            <Link exact path to ="/manager/currentapplication">
                              Application In Progress 
                            </Link>
                            </NavigationList>
                            <NavigationList>
                            <Link exact path to="/manager/FeeInformation">
                             Pending Application
                            </Link>
                            </NavigationList>
                            <NavigationList>
                            <Link exact path to="/manager/agentupdate">
                              Change Agent
                            </Link>
                            </NavigationList>
                            <NavigationList>
                            <Link exact path to="/manager/FeeInformation">
                              Fee Management
                            </Link>
                            </NavigationList>
                            <NavigationList>
                            <Link exact path to="/manager/ems">
                              Employee Management
                            </Link>
                            </NavigationList>
                          
                            
                    </NavigationItem>
                </StyledNav>
            </Header>
        </Container>
    )
}

export default ManagerDashboard
