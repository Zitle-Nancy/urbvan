import React from 'react';
import styled from 'styled-components';
import support from '../../img/support.png';
import mail from '../../img/mail.png';

const ContainerFooter = styled.footer`
  height: 100%;
`;

const Container = styled.div`
  height: 100px;
  background-color: #303850;
  display: flex;
  justify-content: space-evenly;
`;
const Icon = styled.div`
  display: flex;
  height: 100%;

  img {
    height: 80%;
    align-self: flex-end;
  }
`;

const GroupText = styled.div`
  height: 80%;
  align-self: flex-end;
`;

const Text = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  color: #ffffff;
  margin: 1% 0;
  text-align: left;

  :last-child {
    font-size: 0.9rem;
    font-weight: 200;
  }
`;

const Contacts = styled.div`
  border: soolid red 1px;

  img{
    height: 12px;
    margin-right: 15px;
  }

  a{
    cursor: pointer;
    color: #ffffff;
  }
`;

const ContainerInfo = styled.div`
  height: 50px;
  background-color: #252c41;
  display: flex;
  justify-content: center;
  align-items: center;
  
  a, span {
    font-weight: 300;
    font-size: 0.75rem;
    color: #ffffff;
    text-decoration: none;
    margin-right: 10px;
  }

  span{
    margin-right: 0;
    color: #a7a7a7;
  }
`;

const ContainerLiks = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Footer = props => {
  return(
    <ContainerFooter>
      <Container>
        <Icon>
          <img src={support} />
          <GroupText>
            <Text>Customer Service: </Text>
            <Text>Horario de atención de 6AM a 10PM</Text>
          </GroupText>
        </Icon>
        <Contacts>
          <p>
            <img src={mail} />
            <a>hola@urbvan.com</a>
          </p>
        </Contacts>
      </Container>
      <ContainerInfo>
        <ContainerLiks>
          <a href="https://www.urbvan.com/aviso-privacidad/">Póliticas de privacidad</a>
          <a href="https://www.urbvan.com/terminos-condiciones/">Términos y condiciones</a>
          <span>Urbvan ® 2018 es una marca registrada.</span>
        </ContainerLiks>
      </ContainerInfo>
    </ContainerFooter>
  );
}

export default Footer 