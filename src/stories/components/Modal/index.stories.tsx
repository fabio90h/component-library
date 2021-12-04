import React from 'react';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';

export default {
  title: 'Component/Modal/Primary',
  component: Text,
};

// Normal Button
export const Base = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
        Hello World
      </Modal>
    </>
  );
};
