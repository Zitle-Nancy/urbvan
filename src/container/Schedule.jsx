import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  height: 100%;
  border: solid green 2px;
`;

class Schedule extends Component{
  render(){
    return(
      <Container>
        Horarios
      </Container>
    )
  }
}

export default Schedule;