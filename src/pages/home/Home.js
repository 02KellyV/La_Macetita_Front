import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Menu from "../../common/menu/Menu";
import Footer from "../../common/footer/Footer";

const Wrapper = styled.div``;

function Home() {
  const history = useHistory();
  const [query, setQuery] = useState("");

  const search = () => {
    history.push({
      pathname: `/search/` + query,
    });
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
                  <div className="background_image" style={{ backgroundImage: "url(images/landing.jpg)" }}></div>
                  <div className="home_container">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                          <div className="home_content text-center">
                            <div className="home_title">
                              <div className="row">
                                <div className="col-md-6 text-white text-center">
                                  <img width="200" src="/images/logo.png" alt="logo" />
                                  <h6>Welcome to</h6>
                                  <h6>Healthy Food Paradise</h6>
                                  <h6>Directory of harvest & fresh food locations</h6>
                                </div>
                              </div>
                            </div>
                            <div className="search_form_container">
                              <form action="#" className="search_form" id="search_form">
                                <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                  <input
                                    type="text" value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="search_input"
                                    placeholder="..."
                                  />
                                  <button className="search_button" onClick={search}>
                                    Search
                                  </button>
                                </div>
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

          <div className="food container_custom">
            <div className="container">
              <div className="row">
                <div className="col">
                <div className="row mt-3">
                  <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Fruits</a>
                        </div>
                        <img src="images/fruits.png" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Vegetables</a>
                        </div>
                        <img src="images/Vegetables.png" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Greens</a>
                        </div>
                        <img src="images/Hortal.png" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Tubers</a>
                        </div>
                        <img src="images/Tuber.png" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Grains</a>
                        </div>
                        <img src="images/Beans.png" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Nuts</a>
                        </div>
                        <img src="images/Nuts.png" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="how container_custom">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="icon_box_container d-flex flex-row align-items-start justify-content-between flex-wrap">
                    <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                      <div className="icon_box_num">01.</div>
                      <div className="icon_box_icon">
                        <img src="images/1.png" alt="" />
                      </div>
                      <div className="icon_box_title">Search</div>
                      <div className="icon_box_text">
                        <p>Go to the search bar, you can place the name of the product, food, fruit or vegetable, etc.. You can select a search by category as well</p>
                      </div>
                    </div>

                    <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                      <div className="icon_box_num">02.</div>
                      <div className="icon_box_icon">
                        <img src="images/2.png" alt="" />
                      </div>
                      <div className="icon_box_title">Select</div>
                      <div className="icon_box_text">
                        <p>
                        Once you choose a product, access the information of the harvest it belongs to, the market where you can buy it, and more.
                        </p>
                      </div>
                    </div>

                    <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                      <div className="icon_box_num">03.</div>
                      <div className="icon_box_icon">
                        <img src="images/3.png" alt="" />
                      </div>
                      <div className="icon_box_title">Post</div>
                      <div className="icon_box_text">
                        <p>
                        Would you like to publish your store? You only have to register, in the menu you find the option, fill in your information and start!
                        </p>
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

export default Home;
