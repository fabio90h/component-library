import React from 'react';
import Dropdown from '../../../components/Dropdown';

export default {
  title: 'Component/Dropdown/Primary',
  component: Dropdown,
};

const MOCK_LINKS = ['Free Tutorial', 'Courses', 'Blog', 'Other'];

// Normal Button
export const Base = () => (
  <Dropdown
    buttonLabel={
      <div>
        <b>Tester React Nodes</b>
      </div>
    }
  >
    {MOCK_LINKS.map((link) => (
      <div key={link} style={{ padding: '5px' }}>
        <b>{link}</b>
      </div>
    ))}
  </Dropdown>
);
