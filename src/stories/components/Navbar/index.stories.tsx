import React from 'react';
import styled from 'styled-components';
import A from '../../../components/A';
import Navbar from '../../../components/Navbar';
import AirbnbLogo from '../../assets/Logo/Airbnb';

export default {
  title: 'Component/Navbar/Primary',
  component: Navbar,
};

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
        <A>Become a host</A>
        <A>Help</A>
        <A>Sign up</A>
        <A>Menu</A>
      </MenuContainer>
    }
  />
);
