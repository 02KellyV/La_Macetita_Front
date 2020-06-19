import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";
import { hideLoader, notification, saveUser, showLoader } from "../../store/actions";

import Auth from "../../store/reducers/Auth";

const Wrapper = styled.div``;

function SignIn({ user: loggedUser, onNotification, onShowLoader, onHideLoader }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (loggedUser && loggedUser.id) {
      history.push({
        pathname: "/",
      });
    }
  });

  const login = () => {
    onShowLoader();
    axios.post("http://www.lamacetita.com:8000/api/auth/signin", user).then(
      (response) => {
        const { id, name, email, token } = response.data.data;
        dispatch(
          saveUser({
            id,
            name,
            email,
            token,
          })
        );
        onHideLoader();
        history.push({
          pathname: "/",
        });
        onNotification("Bienvenido!", "success");
      },
      (error) => {
        onHideLoader();
        onNotification(error.response.data.message, "error");
      }
    );
  };

  return (
    <Wrapper>
      <Menu />

      <div className="super_container">
        <div className="super_container_inner">
          <div className="super_overlay"></div>
          <div className="home">
            <div className="home_slider_container">
              <div className="owl-carousel owl-theme home_slider owl-loaded">
                <div className="slide">
                  <div className="background_image" style={{ backgroundImage: "url(images/bg3.jpg)" }}></div>
                  <div className="home_container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 offset-md-3">
                          <div className="home_content ">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title text-white">Sing In</h3>
                              </div>
                              <div className="panel-body">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    login();
                                  }}
                                >
                                  <fieldset>
                                    <div className="form-group mt-2">
                                      <input
                                        value={user.email}
                                        onChange={(e) =>
                                          setUser({
                                            ...user,
                                            email: e.target.value,
                                          })
                                        }
                                        className="form-control"
                                        placeholder="yourmail@example.com"
                                        name="email"
                                        type="text"
                                        required={true}
                                      />
                                    </div>
                                    <div className="form-group mt-4">
                                      <input
                                        value={user.password}
                                        onChange={(e) =>
                                          setUser({
                                            ...user,
                                            password: e.target.value,
                                          })
                                        }
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        required={true}
                                      />
                                    </div>
                                    <input className="btn btn-lg btn-success btn-block mt-5" type="submit" value="Sign In" />
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onShowLoader: () => {
    dispatch(showLoader());
  },
  onHideLoader: () => {
    dispatch(hideLoader());
  },
  onNotification: (message, type) => {
    dispatch(notification({ message, type }));
  },
});

const connecter = connect(mapStateToProps, mapDispatchToProps);

export default connecter(SignIn);