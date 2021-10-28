import React from "react";
import Auth from "../utils/auth";

import { color, shape } from '../styles';
import NewClient from "../pages/NewClient";
import styled from 'styled-components';
import { Link } from "react-router-dom";



export default function AuthNavData() {
  const userData = Auth.getProfile();

  function isRole(userData, roleName) {
    return userData.data.role.toLowerCase() === roleName.toLowerCase();
  }

  const navItems = [
    {
     
      title: "Client Details",
      page:"/admin/NewClient",
      toShow() {

        return true;
      },
    },
    {
        title: 'title',
        toShow() {
          return isRole(userData, "Manager");
          
        },
      },
      {
        title: "Client Details",
        page:"/admin/NewClient",
        toShow() {
          return isRole(userData, "admin") || isRole(userData, 'agent');
        },
      },

    {
      title: "MyClient",
      toShow() {
        return isRole(userData, "agent");
      },
    },
    {
      title: "Agent Profile",
      toShow() {
        return isRole(userData, "agent");
      },
      
    },
  ];

  console.log(userData);
  function renderNavItems() {
    const items = navItems.filter((navItem) => navItem.toShow());
   
  //  renderNavLinks(items)

    return items.map((navItem) =><NavigationItem key={navItem.title}> <Link to={navItem.page}>{navItem.title} </Link> </NavigationItem>) ;
  }
// function renderNavLinks(links)
// {
//  const navz= [...links];  
//  console.log("Nav",navz)
//  //console.log("Nav", ...navz.title)

// }

//const filterFn = (navItem) => true

  return (
 	
    renderNavItems()
//        <StyledNav>
//        <NavigationList>
// {/*          
//          {navItems.filter(filterfn).map(navItem => (<NavigationItem key={}> ))}.}
//        <NavigationItem>
//          <Link to="/profile">
// 						{userData.data.email}
// 					</Link> */}
    
//             {renderNavItems()}
            
//       </NavigationList>
//       </StyledNav>
    
  );
}


//**css */



const Header = styled.header`
	// padding: 20px;
`;

const StyledNav = styled.nav`
	display: flex;
`;

const NavigationList = styled.ul`
	display: flex;
	vertical-align: top;
	width: 100%;

	${props => props.float && `
		justify-content: end;
	`}
`;

const NavigationItem = styled.li`
	margin: 1rem;
	padding: 1rem;
	border-radius: ${shape.borderRadius};
  color: ${color.textDark};
		text-decoration: none;
		font-size: 1.6rem;

	a {
		color: ${color.textDark};
		text-decoration: none;
		font-size: 1.6rem;
	}

	&:hover {
		background: ${color.backgroundLight};
	}
`;