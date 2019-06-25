import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Van from '../component/Svg/Van';
import Schedule from './Schedule';
import routesList from '../routes';

const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const Container = styled.div`
  height: 80%;
  width: 50%;
  padding-right: 5%;
  position: relative;
  border-radius: 25px;
  box-sizing: border-box;  
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;    
`;

const GroupRoutes = styled.div`
  display: flex;
  justify-content: center;
  margin: 10% 0;

  :hover{
    background-color: #f8f8f8;
  }
`;

const GroupRoutesName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align:left;
`;

const Group = styled.div`
  cursor: pointer;
  width: 75%;
  display: inline-flex;
  padding: 5% 0;
  border-bottom: solid 0.5px #b1b1b1;
`;

const Div = styled.div`
  height: 407px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background-color: #e5e5e5;
    width: 6px;
    height: 90%;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

const RouteName = styled.span`
  font-size: 15px;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: #252c41;
  text-align: left;
  margin-left: 15%;
`;

const colors = ['#f1a640','#f140b4', '#31a222', '#f15b40','#467ec0'];

class RouteList extends Component {
  state = {
    propertiesContainer:{
      width:0,
      height: 0,
      opacity:0
    }
  }

  componentDidMount(){
    this.getSizeContainerRouteList();
  }

  getSizeContainerRouteList = () => {
    const container = document.querySelector('.container-route-list');
    const { width, height } = container.getBoundingClientRect();
    this.setState({
      propertiesContainer:{
        ...this.state.propertiesContainer,
        width,
        height,
      }
    })
  }

  hoverOn = () => {
    this.setState({
      propertiesContainer:{
        ...this.state.propertiesContainer,
        opacity: 1
      }
    })
  }

  hoverOff = () => {
    this.setState({
      propertiesContainer:{
        ...this.state.propertiesContainer,
        opacity: 0
      }
    })
  }
  render(){
    const { body:{ routes } } = routesList;
    const { propertiesContainer } = this.state;
    return(
    <ContainerInfo>
      <Container className='container-route-list'>
          <Title>RUTAS</Title>
          <Div>
            {routes.map((item, index) => {
              return(
                <GroupRoutes 
                  key={index}
                >
                  <Group 
                    onMouseEnter={this.hoverOn} 
                    onMouseLeave={this.hoverOff}
                  >
                    <Van 
                    color={colors[index]}
                    />
                    <GroupRoutesName>
                      <RouteName>{item.origin}</RouteName>
                      <RouteName>{item.destination}</RouteName>
                    </GroupRoutesName>
                  </Group>
                </GroupRoutes>
              )
            })}
          </Div>
          </Container>
          <Schedule
            schedule={routes[0].schedule}
            properties={propertiesContainer}
          />
    </ContainerInfo>
    )
  }

}

export default RouteList;