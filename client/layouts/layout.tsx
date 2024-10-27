import { GlobalStyles } from '../styles/GlobalStyles';
import { css } from '@emotion/react';
import HamburgerMenu from '../components/header/hamburger-menu';
import { Hamburger } from '../components/header/hamburger';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header
        className="base-grid"
        css={css`
          grid-row: 1;
          grid-column: 1 / -1;
          background-color: red;
        `}
      >
        <Hamburger
          active={true}
          setActive={() => {}}
          position={`
            grid-column: 2 / span2
            grid-row: 1;
            align-self: center;
          `}
        />
        <nav
          css={css`
            /* display: flex;
            justify-content: flex-end;
            align-items: center;
            grid-column: 2 / -2;
            grid-row: 1; */

            border: solid 1px salmon;
            background: rgba(0, 100, 0, 0.3) !important;
          `}
        >
          <ul
            role="list"
            css={css`
              display: flex;
              justify-content: flex-end;
              gap: 2.4rem;
              align-items: center;
              text-decoration: none;
            `}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <GlobalStyles />
      <main
        css={css`
          grid-row: 2;
        `}
      >
        {children}
      </main>
      <footer
        css={css`
          grid-row: 3;
          grid-column: 1 / -1;
          background-color: blue;
        `}
      >
        Footer
      </footer>
    </>
  );
}
