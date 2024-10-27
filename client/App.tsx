import Layout from './layouts/layout';
import { css } from '@emotion/react';

function App() {
  return (
    <Layout>
      <h1
        css={css`
          font-size: 20rem;
          color: red;
        `}
      >
        ok
      </h1>
    </Layout>
  );
}

export default App;
