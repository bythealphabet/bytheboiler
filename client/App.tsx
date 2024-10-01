import Layout from './layouts/layout';
import styled from '@emotion/styled';

function App() {
  const MyDiv = styled('div')({ fontSize: 12, color: 'red' });

  return (
    <Layout>
      <h1>ok</h1>
      <MyDiv>Text</MyDiv>
    </Layout>
  );
}

export default App;
