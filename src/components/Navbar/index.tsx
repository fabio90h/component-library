import React from 'react';
import styled from 'styled-components';

type Props = {
  logo: React.ReactNode;
  menu: React.ReactNode;
};

const NavContainer = styled.nav`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: ${(props) => props.theme.navbar.background};
`;

const Navbar: React.FC<Props> = (props) => {
  const { logo, menu } = props;

  return (
    <NavContainer>
      {/* LOGO */}
      {logo}
      {/* MENU */}
      {menu}
    </NavContainer>
  );
};

export default Navbar;
