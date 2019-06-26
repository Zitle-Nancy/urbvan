import React, { Component } from 'react';
import styled from 'styled-components';
import { 
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  DirectionsRenderer
} from 'react-google-maps';

const Div = styled.div`
  position: absolute;
  z-index: -1;
  right: 0;
  top: 0;
  width: 77%;
  height: 100%;
  border: solid green 3px;
`;

class Map extends Component {
  state = {
    directions: null
  };

  componentDidUpdate(prevProps) {
    const { routes, routeIndex  } = this.props;
    if(routeIndex !== prevProps.routeIndex){
      const directionsService = new window.google.maps.DirectionsService();
      const { latitude, longitude } = routes[routeIndex].schedule.am[0].stations[0];
      const { latitude: latitude2 , longitude: longitude2} = routes[routeIndex].schedule.am[0].stations[1];
  
      const origin = { lat: Number(latitude), lng: Number(longitude) };
      const destination = { lat: Number(latitude2), lng: Number(longitude2)};
    
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }


  render(){
    return(
      <Div>
        <GoogleMap
          defaultCenter = {{ lat: 19.3990994, lng: -99.2138232 }}
          defaultZoom = { 13 }
        >
        <DirectionsRenderer
          directions={this.state.directions}
        />
        </GoogleMap>
      </Div>
    )
  }
}

export default withScriptjs(withGoogleMap(Map));