import React from 'react';
import styled from 'styled-components';
import A from '../../../components/A';
import Navbar from '../../../components/Navbar';
import AirbnbLogo from '../../assets/Logo/Airbnb';

export default {
  title: 'Component/Navbar/Primary',
  component: Navbar,
};

const MenuA = styled(A)`
  font-size: 14px;
`;

const MenuContainer = styled.div`
  padding: 5px 0;
  & a {
    margin: 0 8px;
  }
`;
// const MOCK_LINKS = ['Free Tutorial', 'Courses', 'Blog', 'Other'];

// Normal Button
export const Base = () => (
  <Navbar
    logo={<AirbnbLogo />}
    menu={
      <MenuContainer>
        <MenuA>Become a host</MenuA>
        <MenuA>Help</MenuA>
        <MenuA>Sign up</MenuA>
        <MenuA>Menu</MenuA>
      </MenuContainer>
    }
  />
);
