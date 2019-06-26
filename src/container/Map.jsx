import React, { Component } from 'react';
import styled from 'styled-components';
import { 
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  DirectionsRenderer,
  Marker,
  InfoWindow
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
    directions: null,
    showInfoWindow: {}
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

  toggleInfoWindow = (index) => {
    this.setState(prevState => {
      debugger;
      return {
        showInfoWindow: {
          ...prevState.showInfoWindow,
          [index]: !prevState.showInfoWindow[index],
        }
      };
    });
  }


  render(){
    const { routes, routeIndex  } = this.props;
    let markers = [];

    if (routeIndex > -1) {
      const { latitude, longitude, name } = routes[routeIndex].schedule.am[0].stations[0];
      const { latitude: latitude2, longitude: longitude2, name: name2 } = routes[routeIndex].schedule.am[0].stations[1];
  
      const origin = { position: { lat: Number(latitude), lng: Number(longitude) }, name };
      const destination = { position: { lat: Number(latitude2), lng: Number(longitude2) }, name: name2 };
  
      markers = [ origin, destination ]
    }
  
    return(
      <Div>
        <GoogleMap
          defaultCenter = {{ lat: 19.3990994, lng: -99.2138232 }}
          defaultZoom = { 13 }
        >
          <React.Fragment>
            {markers.map((marker, index) => (
              <Marker
                key={marker.name}
                position={marker.position}
                onMouseOver={() => this.toggleInfoWindow(index)}
                onMouseOut={() => this.toggleInfoWindow(index)}
              >
                {this.state.showInfoWindow[index] && (
                  <InfoWindow>
                    <p>{marker.name}</p>
                  </InfoWindow>
                )}
              </Marker>
            ))}
            {this.state.directions && (
              <DirectionsRenderer
                directions={this.state.directions}
                options={{
                  suppressInfoWindows: true,
                  suppressMarkers: true,
                  polylineOptions: {
                    strokeColor:'#4c59a4',
                    strokeWeight: 5,
                    strokeOpacity: 0.7,
                  },
                }}
                
              />
            )}
            
          </React.Fragment>
        </GoogleMap>
      </Div>
    )
  }
}

export default withScriptjs(withGoogleMap(Map));