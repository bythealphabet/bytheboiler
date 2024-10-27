import React, { useState } from 'react';
import { css, keyframes } from '@emotion/react';

const HamburgerMenu = ({ cssstyle }: { cssstyle?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

  return (
    <button
      onClick={toggleMenu}
      css={css`
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        padding: 0;
        z-index: 10;

        &:focus {
          outline: none;
        }

        div {
          width: 2rem;
          height: 0.25rem;
          background: ${isOpen ? '#0D0C1D' : '#EFFFFA'};
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;

          &:first-of-type {
            transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
          }

          &:nth-of-type(2) {
            opacity: ${isOpen ? '0' : '1'};
            transform: ${isOpen ? 'translateX(20px)' : 'translateX(0)'};
          }

          &:nth-of-type(3) {
            transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
          }
        }

        &:hover {
          animation: ${spin} 1s linear;
        }

        ${cssstyle}
      `}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default HamburgerMenu;
