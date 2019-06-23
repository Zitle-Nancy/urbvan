import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png'
import urbvan from '../../img/urbvan.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  width: 25%;
  object-fit: contain;

  img {
    width: 130.8px;
    height: 32.9px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: 102px;
  background-color: #f1404b;
  border-bottom-left-radius:80px;
  padding-right: 4vw;

  a {
    text-decoration: none;
    font-weight: 330;
    font-size: 22px;
    color: #ffffff;
  }
`;

const GroupUrbvan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  border: solid white 0.5px;
  border-radius: 25px;
`;

const Urbvan = styled.div`
  width: 20px;
  height: 13px;
  background-image: url(${urbvan});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Header = props => {
  return(
  <header>
    <Nav>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <Menu>
        <a href="https://www.urbvan.com/rutas/">Rutas</a>
        <a href="https://www.urbvan.com/experiencias/">Experiencia</a>
        <a href="https://www.urbvan.com/empresas">Empresas</a>
        <a href="https://www.urbvan.com/sugiere/">Sugiere</a>
        <a href="https://blog.urbvan.com/">Blog</a>
        <GroupUrbvan>
          <Urbvan/>
          <a href="https://www.urbvan.com/socios/">Tu van con nosotros</a>
        </GroupUrbvan>
      </Menu>
    </Nav>
  </header>
  )
}

export default Header;