import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${(props) => props.theme.modal.backgroundColor};
  color: ${(props) => props.theme.modal.color};
  padding: 50px;
  z-index: 1000;
  transform: translate(-50%, -50%);
`;

type Props = {
  open: boolean;
  handleClose: () => void;
};

/**
 * TODO:
 * 1. Make it look nicer
 * 2. Add Animations
 */

const Modal: React.FC<Props> = (props) => {
  const { open = false, children, handleClose } = props;
  if (!open) return null;
  return createPortal(
    <div>
      <Overlay onClick={() => handleClose()} />
      <ModalContainer>
        <button onClick={() => handleClose()}>close</button>
        {children}
      </ModalContainer>
    </div>,
    document.body,
  );
};

export default Modal;
