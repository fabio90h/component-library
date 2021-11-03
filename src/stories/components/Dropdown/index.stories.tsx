import React from 'react';
import { lock } from 'react-icons-kit/fa/lock';
import Dropdown from '../../../components/Dropdown';

export default {
  title: 'Component/Dropdown/Primary',
  component: Dropdown,
};

const MOCK_LINKS = ['Free Tutorial', 'Courses', 'Blog', 'Other'];

// Normal Button
export const Base = () => (
  <Dropdown icon={lock} size={30}>
    {MOCK_LINKS.map((link) => (
      <div key={link} style={{ padding: '5px' }}>
        <b>{link}</b>
      </div>
    ))}
  </Dropdown>
);
