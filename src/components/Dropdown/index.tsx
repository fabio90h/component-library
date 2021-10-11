import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

type Props = {
  buttonLabel: React.ReactNode;
};

const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: relative;

  /* Target the DropdownMenu when button is focused */
  & > button:focus + #dropdownMenu {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 0.25rem);
  background-color: ${(props) => props.theme.dropdownMenu.backgroundColor};
  padding: 0.75rem;
  /* border-radius: 0.25rem; */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  opacity: 0;
  pointer-events: none;
  border-radius: 12px !important;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 16px !important;
  color: ${props => props.theme.dropdownMenu.color};
  max-height: calc(100vh - 100px) !important;
  overflow-y: auto !important;
  z-index: 2 !important;
  min-width: 240px !important;
  display: block !important;

  /* Animations */
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
`;

const Dropdown: React.FC<Props> = ({ buttonLabel, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownContainer isOpen={isOpen}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {buttonLabel}
      </Button>
      <DropdownMenu id="dropdownMenu">{children}</DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
