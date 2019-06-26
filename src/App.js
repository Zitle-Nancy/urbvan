import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Map from './container/Map';
import RouteList from './container/RouteList';
import routesList from './routes';

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
  margin: 0 auto;
  margin-bottom: 5%;
`;

const ContainerElement = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 77%;
  height: 100%;
`;


const MapElement = styled.div`
  height: 100%;
  border-radius: 25px;
`;

const LoadingElement = styled.div`
  height: 100%;
`;

const App = () =>{
  const [ selectedRoute, setSelectedRoute ] = useState(-1);
  const { body:{ routes } } = routesList;

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
        <RouteList 
          routesList={routesList}
          onSelectedRoute={setSelectedRoute}
        />
        <Map 
          isMarkerShown 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_KEY}`}
          loadingElement={<LoadingElement />}
          containerElement={<ContainerElement/>}
          mapElement={<MapElement/>}
          routes={routes}
          routeIndex={selectedRoute}
        />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
