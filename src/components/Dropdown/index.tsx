import React from 'react';
import styled from 'styled-components';
import Icon, { IconProp } from 'react-icons-kit';
import { useComponentVisible } from '../../hooks/useComponentVisible';

type Props = IconProp & {
  openDirection?: 'left' | 'right';
};

const IconContainer = styled.span`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.dropdownMenu.iconHoverColor};
  }
`;

const DropdownContainer = styled.span`
  position: relative;
`;

const DropdownMenu = styled.div<{
  isOpen: boolean;
  openDirection: 'left' | 'right';
}>`
  position: absolute;
  left: ${({ openDirection }) =>
    openDirection === 'left' ? '-200px' : '0'};
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
  min-width: 200px !important;
  max-width: 240px !important;
  display: block !important;

  & > div:hover {
    color: ${(props) => props.theme.dropdownMenu.hover};
    cursor: pointer;
  }

  /* Animations */
  transform: ${(props) =>
    props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
`;

const Dropdown: React.FC<Props> = ({
  children,
  icon,
  size,
  openDirection = 'left',
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <DropdownContainer
      ref={ref}
      onClick={() => setIsComponentVisible(!isComponentVisible)}
    >
      <IconContainer>
        <Icon icon={icon} size={size} />
      </IconContainer>
      <DropdownMenu
        isOpen={isComponentVisible}
        openDirection={openDirection}
        id="dropdownMenu"
      >
        {children}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
