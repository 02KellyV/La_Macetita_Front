import React from "react";
import styled from "styled-components";
import Menu from "../../common/menu/Menu";
import Footer from "../../common/footer/Footer";

const Wrapper = styled.div``;

function Home() {
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
                  <div className="background_image" style={{ backgroundImage: "url(images/index.jpg)" }}></div>
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
                                  <input type="text" className="search_input" placeholder="Que deseas comer hoy?" required="required" />
                                  <button className="search_button">Buscar</button>
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
                  <div className="section_title text-center">
                    <h1>Encuentra los mejores products cerca</h1>
                  </div>
                  <div className="row mt-3">
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Fusion</a>
                        </div>
                        <img src="images/food_1.jpg" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Fusion</a>
                        </div>
                        <img src="images/food_7.jpg" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Fusion</a>
                        </div>
                        <img src="images/food_1.jpg" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Fusion</a>
                        </div>
                        <img src="images/food_7.jpg" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Fusion</a>
                        </div>
                        <img src="images/food_1.jpg" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col food_item">
                      <div className="">
                        <div className="food_item_tag">
                          <a href="#">Fusion</a>
                        </div>
                        <img src="images/food_7.jpg" className="img-fluid" />
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
                  <div className="section_title text-center">
                    <h1>Como Funciona</h1>
                  </div>
                  <div className="icon_box_container d-flex flex-row align-items-start justify-content-between flex-wrap">
                    <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                      <div className="icon_box_num">01.</div>
                      <div className="icon_box_icon">
                        <img src="images/icon_6.svg" alt="https://www.flaticon.com/authors/monkik" />
                      </div>
                      <div className="icon_box_title">Choose a category</div>
                      <div className="icon_box_text">
                        <p>
                          Donec cursus, risus non fermentum lacinia, felis lectus interdum velit, in pulvinar enim justo at sem. Quisque ut semper
                          neque. Suspendisse quam est
                        </p>
                      </div>
                    </div>

                    <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                      <div className="icon_box_num">02.</div>
                      <div className="icon_box_icon">
                        <img src="images/icon_7.svg" alt="https://www.flaticon.com/authors/monkik" />
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
                        <img src="images/icon_8.svg" alt="https://www.flaticon.com/authors/monkik" />
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
