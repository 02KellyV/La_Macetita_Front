import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";
import { hideLoader, notification, saveUser, showLoader } from "../../store/actions";

const Wrapper = styled.div`
  .background_image {
  }
`;

function Register({ user: loggedUser, onNotification, onShowLoader, onHideLoader }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    if (loggedUser && loggedUser.id) {
      history.push({
        pathname: "/",
      });
    }
  });

  const register = () => {
    onShowLoader();
    axios.post("http://www.lamacetita.com:8000/api/auth/signup", user).then(
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
        onNotification("Welcome!", "success");
      },
      (error) => {
        onHideLoader();
        onNotification("Algo salió mal, por favor intenta nuevamente", "error");
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
                  <div className="background_image" style={{ backgroundImage: "url(/images/bg3.jpg)" }}></div>
                  <div className="home_container">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 offset-md-3">
                          <div className="home_content ">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title text-white">Register</h3>
                              </div>
                              <div className="panel-body">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    register();
                                  }}
                                >
                                  <fieldset>
                                    <div className="form-group mt-2">
                                      <input
                                        value={user.name}
                                        onChange={(e) =>
                                          setUser({
                                            ...user,
                                            name: e.target.value,
                                          })
                                        }
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="name"
                                        type="text"
                                        required={true}
                                      />
                                    </div>
                                    <div className="form-group mt-4">
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
                                    <div className="form-group mt-4">
                                      <input
                                        value={user.confirm_password}
                                        onChange={(e) =>
                                          setUser({
                                            ...user,
                                            confirm_password: e.target.value,
                                          })
                                        }
                                        className="form-control"
                                        placeholder="Confirm password"
                                        name="password"
                                        type="password"
                                        required={true}
                                      />
                                    </div>
                                    <input className="btn btn-lg btn-success btn-block mt-5" type="submit" value="Register" />
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

const mapStateToProps = (state) => ({});

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

export default connecter(Register);
