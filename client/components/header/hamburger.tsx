import React from 'react';
import { jsx, css } from '@emotion/react';
import { hamburgerStyles } from './hamburgerStyles';

interface HamburgerProps {
  active: boolean;
  setActive: () => void;
  position: string;
}

export function Hamburger({
  active = true,
  setActive,
  position,
}: HamburgerProps) {
  return (
    <button
      css={[hamburgerStyles(active), position]}
      onClick={setActive}
      aria-label="Open main menu"
    >
      <label htmlFor="navi-toggle" hidden>
        <span>&nbsp;</span>
      </label>
    </button>
  );
}
