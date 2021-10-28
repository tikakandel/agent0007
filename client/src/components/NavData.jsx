import React from "react";
import Auth from "../utils/auth";

import { color, shape } from '../styles';

import styled from 'styled-components';
import { Link } from "react-router-dom";



export default function AuthNavData() {
  const userData = Auth.getProfile();

  function isRole(userData, roleName) {
    return userData.data.role.toLowerCase() === roleName.toLowerCase();
  }

  const linkdata="/"+userData.data.role;
  return (
 		
       <StyledNav>
       <NavigationList>
       <NavigationItem>
         <Link to={linkdata}>
						DashBoard
					</Link>
      </NavigationItem>
                       
      </NavigationList>
      </StyledNav>
    
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

