import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items:center;
  width: 30%;
  object-fit: contain;

  img {
    padding-left: 5vw;
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
    font-family: "Helvetica Neue";
    font-size: 22px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.23;
    letter-spacing: normal;
    color: #ffffff;
  }

  div {
    display: inline-block;
    border: solid green 2px;
  }
`;

const Header = props => {
  return(
  <header>
    <Nav>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <Menu>
        <a>Rutas</a>
        <a>Experiencia</a>
        <a>Empresas</a>
        <a>Sugiere</a>
        <a>Blog</a>
        <div>
          <a>Tu van con nosotros</a>
        </div>
      </Menu>
    </Nav>
  </header>
  )
}

export default Header;