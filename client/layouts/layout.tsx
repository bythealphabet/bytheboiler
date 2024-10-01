import { css } from '@emotion/react';
import { GlobalStyles } from '../styles/GlobalStyles';

const color = 'white';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        background-color: red;
      `}
    >
      <GlobalStyles />
      {children}
    </div>
  );
}
