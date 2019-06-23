import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './container/Header/Header';

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
      <div className="App">
        Hola
      </div>
    </Fragment>
  );
}

export default App;
