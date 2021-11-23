import React from 'react';
import { menu } from 'react-icons-kit/iconic/menu';
import Dropdown from '../../../components/Dropdown';

export default {
  title: 'Component/Dropdown/Primary',
  component: Dropdown,
};

const MOCK_LINKS = ['Free Tutorial', 'Courses', 'Blog', 'Other'];

// Normal Button
export const Base = () => (
  <Dropdown openDirection="right" icon={menu} size={25}>
    {MOCK_LINKS.map((link) => (
      <div key={link} style={{ padding: '5px' }}>
        <span>{link}</span>
      </div>
    ))}
  </Dropdown>
);
