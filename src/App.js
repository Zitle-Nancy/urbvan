import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './component/Header/Header';
import RouteList from './container/RouteList';

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    line-height: 1.23;
    font-family: "Helvetica Neue";
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    font-weight: 300;
  }
`

const Title = styled.h1`
  color: #252c41;
  margin-top: 4%;
`;

const Container = styled.div`
  width: 75%;
  border: solid red 1px;
  margin: 0 auto;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Title>Rutas en la CDMX</Title>
      <p>
        Checa al es el que más te conviene para llegar a Santa Fe.
        Contamos con muchos horarios para llevarte a tiempo.
      </p>
      <Container>
        <RouteList />
      </Container>
    </Fragment>
  );
}

export default App;
