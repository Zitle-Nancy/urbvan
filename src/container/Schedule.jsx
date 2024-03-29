import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  z-index: 1;
  position: relative;
  padding: 0 4%;
  left: -18px;
  height: ${props => props.height}px;
  width: ${props => props.width / 1.2}px;
  background-color: #f8f8f8;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  box-sizing: border-box;
  display : ${props => props.visibility ? 'block' : 'none'};
`;

const Title = styled.p`
  font-size: 1.5rem;;
  font-width: 400;
  color: #252c41;
  text-align: center;
`;

const Turn = styled.p`
  color: #a7a7a7;
  text-align: right;
  font-size: 1.5em;
`;

const List = styled.div`
  p {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.2;
    color: #252c41;
    padding: 5% 0;
    border-bottom: solid 0.5px #b1b1b1;
  }

  p:last-child{
    border-bottom: none;
  }
`;
class Schedule extends Component{

  render(){
    const { schedule, properties } = this.props;
    const { am } = schedule;
    return(
      <Container
        width={properties.width}
        height={properties.height}
        visibility={properties.visibility}
      >
        <Title>HORARIOS</Title>
        <Turn>
          AM
        </Turn>
        {am.map( (item) => {
          return(
            <List>
              <p>Llegar a las {item.departure_time} am</p>
              <p>Salir a las {item.arrival_time} am</p>
            </List>
          )
        })}
        <Turn>
          PM
        </Turn>
      </Container>
    )
  }
}

export default Schedule;