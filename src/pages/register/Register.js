import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";
import axios from "axios";

const Wrapper = styled.div`
  .background_image {
  }
`;

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const register = () => {
    axios.post("http://localhost:8000/api/register", user).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
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
                            <div class="panel panel-default">
                              <div class="panel-heading">
                                <h3 class="panel-title text-white">Register</h3>
                              </div>
                              <div class="panel-body">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    register();
                                  }}
                                >
                                  <fieldset>
                                    <div class="form-group mt-2">
                                      <input
                                        value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        class="form-control"
                                        placeholder="John Doe"
                                        name="name"
                                        type="text"
                                        required={true}
                                      />
                                    </div>
                                    <div class="form-group mt-4">
                                      <input
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        class="form-control"
                                        placeholder="yourmail@example.com"
                                        name="email"
                                        type="text"
                                        required={true}
                                      />
                                    </div>
                                    <div class="form-group mt-4">
                                      <input
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        class="form-control"
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        required={true}
                                      />
                                    </div>
                                    <div class="form-group mt-4">
                                      <input
                                        value={user.confirm_password}
                                        onChange={(e) => setUser({ ...user, confirm_password: e.target.value })}
                                        class="form-control"
                                        placeholder="Confirm password"
                                        name="password"
                                        type="password"
                                        required={true}
                                      />
                                    </div>
                                    <input class="btn btn-lg btn-success btn-block mt-5" type="submit" value="Register" />
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

export default Register;
