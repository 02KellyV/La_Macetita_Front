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
                              <h1>La Macetita</h1>
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
                        <img src="images/icon_6.svg" alt="" />
                      </div>
                      <div className="icon_box_title">Choose a category</div>
                      <div className="icon_box_text">
                        <p>
                          Donec cursus, risus non fermentum lacinia, felis lectus interdum velit, in pulvinar enim justo at sem. Quisque ut semper
                          neque.
                        </p>
                      </div>
                    </div>

                    <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                      <div className="icon_box_num">02.</div>
                      <div className="icon_box_icon">
                        <img src="images/icon_7.svg" alt="" />
                      </div>
                      <div className="icon_box_title">Find your pick</div>
                      <div className="icon_box_text">
                        <p>
                          Donec cursus, risus non fermentum lacinia, felis lectus interdum velit, in pulvinar enim justo at sem. Quisque ut semper
                          neque. Suspendisse quam est
                        </p>
                      </div>
                    </div>

                    <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                      <div className="icon_box_num">03.</div>
                      <div className="icon_box_icon">
                        <img src="images/icon_8.svg" alt="" />
                      </div>
                      <div className="icon_box_title">Go & have fun</div>
                      <div className="icon_box_text">
                        <p>
                          Donec cursus, risus non fermentum lacinia, felis lectus interdum velit, in pulvinar enim justo at sem. Quisque ut semper
                          neque. Suspendisse quam est
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
