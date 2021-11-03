import React from 'react';
import styled from 'styled-components';
import Icon, { IconProp } from 'react-icons-kit';
import { useComponentVisible } from '../../hooks/useComponentVisible';

type Props = IconProp & {};

const IconContainer = styled.span`
  /* border: 1px solid red; */
`;

const DropdownContainer = styled.span`
  position: relative;

  &:hover {
    background-color: 'red';
  }

  /* Target the DropdownMenu when button is focused */
  /* & > button:focus + #dropdownMenu {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  } */
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: calc(100% + 0.85rem);
  background-color: ${(props) =>
    props.theme.dropdownMenu.backgroundColor};
  padding: 0.75rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
  border-radius: 12px !important;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 16px !important;
  color: ${(props) => props.theme.dropdownMenu.color};
  max-height: calc(100vh - 100px) !important;
  overflow-y: auto !important;
  z-index: 2 !important;
  min-width: 240px !important;
  display: block !important;

  /* Animations */
  transform: ${(props) =>
    props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
`;

const Dropdown: React.FC<Props> = ({ children, icon, size }) => {
  // const [isOpen, setIsOpen] = React.useState(false);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  return (
    <DropdownContainer
      ref={ref}
      onClick={() => setIsComponentVisible(!isComponentVisible)}
    >
      <IconContainer>
        <Icon icon={icon} size={size} />
      </IconContainer>
      <DropdownMenu isOpen={isComponentVisible} id="dropdownMenu">
        {children}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
