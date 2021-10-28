import styled from "styled-components";
import { color, shape } from "../styles";

const Container = styled.div`
    width:30%
    height: 100vh
    background:${color.backgroundGreen};
    
    `;
const Header = styled.header`
  padding: 20px;
`;
const StyledNav = styled.nav`
  display: flex;
`;

const NavigationList = styled.ul`
  display: flex;
horizentel 
  width: 100%;

  ${(props) =>
    props.float &&
    `
		justify-content: center;
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

export { NavigationItem, NavigationList, StyledNav, Header, Container };
