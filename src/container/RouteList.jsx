import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Van from '../component/Svg/Van';
import Schedule from './Schedule';
import routesList from '../routes';

const Container = styled.div`
  width: 25%;
  border: solid purple 2px;
  position: relative;
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
  width: 75%;
  display: inline-flex;
  padding: 5% 0;
  border-bottom: solid 0.5px #b1b1b1;
`;

const RouteName = styled.span`
  font-size: 15px;
`;

const Title = styled.p`
  font-size: 1.5rem;;
  font-width: 400;
  text-align: right;
  color: #252c41;
  text-align: left;
  margin-left: 15%;
`;

const colors = ['#f1a640','#f140b4', '#31a222', '#f15b40','#467ec0']
class RouteList extends Component { 
  render(){
    const { body:{ routes } } = routesList;
    console.log(routes);
    return(
    <Fragment>
      <Container>
        <Title>RUTAS</Title>
        {routes.map((item, index)=>{
          return(
            <GroupRoutes key={index}>
              <Group>
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
        <Schedule />
        
      </Container>
    </Fragment>
    )
  }

}

export default RouteList;