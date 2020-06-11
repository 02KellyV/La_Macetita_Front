import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

function Home() {
  return (
    <Wrapper>
      <div className="menu">
        <div className="menu_container text-right">
          <div className="menu_close">close</div>
          <nav className="menu_nav">
            <ul>
              <li>
                <a href="index.html">Incio</a>
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
        <header className="header">
          <div className="header_overlay"></div>
          <div className="header_content d-flex flex-row align-items-center justify-content-start">
            <div className="logo">
              <img src="images/logo.png" width="90" />
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
                    <a href="#">Entrar</a>
                  </li>
                  <li>
                    <a href="#">Registrarse</a>
                  </li>
                </ul>
              </nav>

              <div className="hamburger">
                <i className="fa fa-bars trans_200"></i>
              </div>
            </div>
          </div>
        </header>

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
                  <div className="grid_container grid">
                    <div className="grid-item grid_large">
                      <div className="food_item">
                        <div className="food_item_tag">
                          <a href="#">Fusion</a>
                        </div>
                        <div className="background_image" style={{ backgroundImage: "url(images/food_1.jpg)" }}></div>
                      </div>
                    </div>

                    <div className="grid-item grid_small">
                      <div className="food_item">
                        <div className="food_item_tag">
                          <a href="#">Asian</a>
                        </div>
                        <div className="background_image" style={{ backgroundImage: "url(images/food_2.jpg)" }}></div>
                      </div>
                    </div>

                    <div className="grid-item grid_medium">
                      <div>
                        <div className="grid_half">
                          <div className="food_item">
                            <div className="food_item_tag">
                              <a href="#">Breakfast</a>
                            </div>
                            <div className="background_image" style={{ backgroundImage: "url(images/food_3.jpg)" }}></div>
                          </div>
                        </div>
                        <div className="grid_half">
                          <div className="food_item">
                            <div className="food_item_tag">
                              <a href="#">Pizza</a>
                            </div>
                            <div className="background_image" style={{ backgroundImage: "url(images/food_4.jpg)" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid-item grid_medium">
                      <div className="food_item">
                        <div className="food_item_tag">
                          <a href="#">Vine & Dine</a>
                        </div>
                        <div className="background_image" style={{ backgroundImage: "url(images/food_5.jpg)" }}></div>
                      </div>
                    </div>

                    <div className="grid-item grid_small">
                      <div className="food_item">
                        <div className="food_item_tag">
                          <a href="#">Coffee</a>
                        </div>
                        <div className="background_image" style={{ backgroundImage: "url(images/food_6.jpg)" }}></div>
                      </div>
                    </div>

                    <div className="grid-item grid_large">
                      <div className="food_item">
                        <div className="food_item_tag">
                          <a href="#">Fine Dine</a>
                        </div>
                        <div className="background_image" style={{ backgroundImage: "url(images/food_7.jpg)" }}></div>
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

          <div className="cta container_custom">
            <div className="parallax_background" data-image-src="images/cta.jpg"></div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="cta_content">
                    <div className="cta_title">
                      <h1>Find the best places in town!</h1>
                    </div>
                    <div className="cta_text">
                      <p>
                        Donec cursus, risus non fermentum lacinia, felis lectus interdum velit, in pulvinar enim justo at sem. Quisque ut semper
                        neque. Suspendisse quam est, consequat ullamcorper tellus et, fauci bus laoreet nibh.
                      </p>
                    </div>
                    <div className="button cta_button">
                      <a href="listings.html">See the list</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer container_custom">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="footer_container d-flex flex-md-row flex-column align-items-center justify-content-md-start justify-content-center">
                    <div className="copyright order-md-1 order-2">La Macetita</div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
