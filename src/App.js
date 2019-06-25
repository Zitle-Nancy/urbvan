import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './component/Header/Header';
import Maps from './container/Maps';
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
  position: relative;
  width: 85%;
  height: 85vh;
  border: solid red 2px;
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
        <Maps />
      </Container>
    </Fragment>
  );
}

export default App;
