import React, { useEffect, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { notification, saveUser } from "../../store/actions";
import Loader from "../loader/Loader";
import "./menu.css";

const HamburgerMenuWrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 10;
  padding: 20px;
  cursor: pointer;
  background: #080d04;
  border-radius: 100%;
`;

const Wrapper = styled.div``;

const StyledMenu = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  position: fixed;
  right: 0;
  z-index: 9;
  width: 300px;
  height: 100%;
  background-color: #080d04;
  padding-top: 60px;
  ul {
    list-style-type: none;
    padding: 40px;
    .sign-in-sign-up-wrapper {
      margin-bottom: 0;
    }
    li {
      margin-bottom: 20px;
      font-size: 30px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      .a {
        color: white;
        text-decoration: none;
        position: relative;
      }
      .a:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #c4356f;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
        transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
      }
      .a:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
`;

function Menu({ user, notification, onNotification }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [classSignIn, setClassSignIn] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const nameClass = "sign-in-sign-up-wrapper shake-top";
    console.log(!isOpen ? nameClass : "");
    setClassSignIn(!isOpen ? nameClass : "");
  };

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      if (user.id) {
        dispatch(saveUser(user));
      }
    }
  }, []);

  useEffect(() => {
    if (notification && notification.message) {
      if (notification.type === "success") {
        toast.success(notification.message);
      } else if (notification.type === "error") {
        toast.error(notification.message);
      }
      onNotification("", "");
    }
  });

  const logout = () => {
    dispatch(
      saveUser({
        id: null,
        name: null,
        email: null,
        token: null,
      })
    );
  };

  return (
    <Wrapper>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Loader />
      <div>
        <HamburgerMenuWrapper>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={toggleMenu}
            width={25}
            height={20}
            strokeWidth={2}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </HamburgerMenuWrapper>
        <StyledMenu isOpen={isOpen}>
          <ul>
            <li className={classSignIn}>
              <div>
                <Link to="/login">
                  <img width="170" src="/images/beet-sign-in-sign-up.png" alt="sign in/up" />
                </Link>
              </div>
            </li>
            <li>
              <Link className="a" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="a" to="/stories">
                Stories
              </Link>
            </li>
            <li>
              <Link className="a" to="/about-us">
                About
              </Link>
            </li>
            <li>
              <Link className="a" to="/contact">
                Contact
              </Link>
            </li>
            {user.id ? (
              <>
                <li>
                  <Link className="a" to="/harvests">
                    Cosechas
                  </Link>
                </li>
                <li>
                  <Link className="a" to="/products">
                    Productos
                  </Link>
                </li>
                <li>
                  <a className="">{user.name}</a>
                </li>
                <li>
                  <Link className="a" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Entrar</Link>
                </li>
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
              </>
            )}
          </ul>
        </StyledMenu>
      </div>
      {/*
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
                <a href="#">Listings</a>
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
                <img src="/images/logo.png" width="90" />
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
                    <Link to="/about-us">Acerca de nosotros</Link>
                  </li>
                  {!user.id ? (
                    <>
                      <li>
                        <Link to="/login">Entrar</Link>
                      </li>
                      <li>
                        <Link to="/register">Registrarse</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/harvests">Cosechas</Link>
                      </li>
                      <li>
                        <Link to="/products">Productos</Link>
                      </li>
                      <li>
                        <a className="text-white">{user.name}</a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            logout();
                          }}
                        >
                          Salir
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </nav>

              <div className="hamburger">
                <i className="fa fa-bars trans_200"></i>
              </div>
            </div>
          </div>
        </header>
                        </div>*/}
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.Auth.user,
    notification: state.Notification,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onNotification: (message, type) => {
    dispatch(notification({ message, type }));
  },
});

const connecter = connect(mapStateToProps, mapDispatchToProps);

export default connecter(Menu);
