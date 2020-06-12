import React from "react";
import styled from "styled-components";
import Footer from "../../common/footer/Footer";
import Menu from "../../common/menu/Menu";

const Wrapper = styled.div`
  .background_image {
  }
`;

function Register() {
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
                                <form accept-charset="UTF-8" role="form">
                                  <fieldset>
                                    <div class="form-group mt-2">
                                      <input class="form-control" placeholder="John Doe" name="name" type="text" />
                                    </div>
                                    <div class="form-group mt-4">
                                      <input class="form-control" placeholder="yourmail@example.com" name="email" type="text" />
                                    </div>
                                    <div class="form-group mt-4">
                                      <input class="form-control" placeholder="Password" name="password" type="password" value="" />
                                    </div>
                                    <div class="form-group mt-4">
                                      <input class="form-control" placeholder="Confirm password" name="password" type="password" value="" />
                                    </div>
                                    <input class="btn btn-lg btn-success btn-block mt-5" type="submit" value="Login" />
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
