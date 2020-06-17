import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { notification, saveUser } from "../../store/actions";
import Loader from "../loader/Loader";

const Wrapper = styled.div``;

function Menu({ user, notification, onNotification }) {
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      dispatch(saveUser(user));
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
      </div>
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
