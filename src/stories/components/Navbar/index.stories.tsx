import React from 'react';
import { menu } from 'react-icons-kit/iconic/menu';
import styled from 'styled-components';
import A from '../../../components/A';
import Dropdown from '../../../components/Dropdown';
import Navbar from '../../../components/Navbar';
import AirbnbLogo from '../../assets/Logo/Airbnb';

export default {
  title: 'Component/Navbar/Primary',
  component: Navbar,
};

const MOCK_LINKS = ['Login', 'Sign in', 'About us'];

const MenuA = styled(A)`
  font-size: 14px;
  &:hover {
    color: ${(props) => props.theme.navbar.hoverItem};
  }
`;

const MenuContainer = styled.div`
  padding: 5px 0;
  & > * {
    margin: 0 20px;
    color: ${(props) => props.theme.navbar.itemColor};
  }
`;

// Normal Button
export const Base = () => (
  <Navbar
    logo={<AirbnbLogo />}
    menu={
      <MenuContainer>
        <MenuA>Become a host</MenuA>
        <MenuA>Help</MenuA>
        <MenuA>Sign up</MenuA>
        <Dropdown icon={menu} size={18}>
          {MOCK_LINKS.map((link) => (
            <div key={link} style={{ padding: '5px' }}>
              <span>{link}</span>
            </div>
          ))}
        </Dropdown>
      </MenuContainer>
    }
  />
);
