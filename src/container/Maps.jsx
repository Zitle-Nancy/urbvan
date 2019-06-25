import React, { Component } from 'react';
import styled from 'styled-components';
import mapa from '../img/mapa.png';

const Div = styled.div`
  position: absolute;
  z-index: -1;
  right: 0;
  top: 0;
  width: 77%;
  height: 100%;
  border: solid green 3px;

  img{
    width: 100%;
    height: 100%;
  }
`;

class Maps extends Component{
  render(){
    return(
      <Div>
        <img src={mapa}/>
      </Div>
    )
  }
}


 export default Maps;