import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div``;

function Menu() {
  return (
    <Wrapper>
      <div className="menu">
        <div className="menu_container text-right">
          <div className="menu_close">close</div>
          <nav className="menu_nav">
            <ul>
              <li>
                <Link to="/">Incio</Link>
              </li>
              <li>
                <a href="#">Como Funciona</a>
              </li>
              <li>
                <a href="#">Lis22tings</a>
              </li>
              <li>
                <a href="blog.html">News</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="super_container">
        <header className="header scrolled">
          <div className="header_overlay"></div>
          <div className="header_content d-flex flex-row align-items-center justify-content-start">
            <div className="logo">
              <Link to="/">
                <img src="images/logo.png" width="90" />
              </Link>
            </div>

            <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
              <nav className="main_nav">
                <ul className="d-flex flex-row align-items-center justify-content-start">
                  <li className="active">
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="#">Productos</a>
                  </li>
                  <li>
                    <a href="#">Como Funciona</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                  <li>
                    <Link to="/login">Entrar</Link>
                  </li>
                  <li>
                    <Link to="/register">Registrarse</Link>
                  </li>
                </ul>
              </nav>

              <div className="hamburger">
                <i className="fa fa-bars trans_200"></i>
              </div>
            </div>
          </div>
        </header>
      </div>
    </Wrapper>
  );
}

export default Menu;
