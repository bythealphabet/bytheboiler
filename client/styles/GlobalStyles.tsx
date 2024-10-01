import { css, Global, useTheme } from '@emotion/react';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Prevent font size inflation */
        html {
          -moz-text-size-adjust: none;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
          font-size: 16px;
        }

        /* Remove default margin in favour of better control in authored CSS */
        body,
        h1,
        h2,
        h3,
        h4,
        p,
        figure,
        blockquote,
        dl,
        dd {
          margin-block-end: 0;
        }

        /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
        ul[role='list'],
        ol[role='list'] {
          list-style: none;
        }

        /* Set core body defaults */
        body {
          min-height: 100vh;
          line-height: 1.5;
        }

        /* Set shorter line heights on headings and interactive elements */
        h1,
        h2,
        h3,
        h4,
        button,
        input,
        label {
          line-height: 1.1;
        }

        /* Balance text wrapping on headings */
        h1,
        h2,
        h3,
        h4 {
          text-wrap: balance;
        }

        /* A elements that don't have a class get default styles */
        a:not([class]) {
          text-decoration-skip-ink: auto;
          color: currentColor;
        }

        /* Make images easier to work with */
        img,
        picture {
          max-width: 100%;
          display: block;
        }

        /* Inherit fonts for inputs and buttons */
        input,
        button,
        textarea,
        select {
          font-family: inherit;
          font-size: inherit;
        }

        /* Make sure textareas without a rows attribute are not tiny */
        textarea:not([rows]) {
          min-height: 10em;
        }

        /* Anything that has been anchored to should have extra scroll margin */
        :target {
          scroll-margin-block: 5ex;
        }

        .base-grid {
          display: grid;

          grid-template-columns:
            minmax(1em, 1fr) repeat(6, minmax(30px, 125px))
            minmax(1em, 1fr);

          @media (min-width: 900px) {
            grid-template-columns:
              minmax(5em, 1fr) repeat(12, minmax(50px, 125px))
              minmax(5em, 1fr);
          }
        }
      `}
    />
  );
}
