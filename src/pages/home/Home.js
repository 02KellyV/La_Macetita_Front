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
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="listings.html">Listings</a>
              </li>
              <li>
                <a href="blog.html">News</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="menu_link">
            <a href="#">+Add Listing</a>
          </div>
        </div>
      </div>

      <div className="super_container">
        <header className="header">
          <div className="header_overlay"></div>
          <div className="header_content d-flex flex-row align-items-center justify-content-start">
            <div className="logo">
              <a href="#">
                Directory<span>Plus</span>
                <span>+</span>
              </a>
            </div>

            <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
              <nav className="main_nav">
                <ul className="d-flex flex-row align-items-center justify-content-start">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="listings.html">Listings</a>
                  </li>
                  <li>
                    <a href="blog.html">News</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="add_listing text-center trans_200">
                <a href="#">+Add Listing</a>
              </div>
              <div className="log_reg">
                <ul className="d-flex flex-row align-items-center justify-content-start">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                </ul>
              </div>
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
              <div className="owl-carousel owl-theme home_slider">
                <div className="slide">
                  <div className="background_image" style={{ backgroundImage: "url(images/index.jpg)" }}></div>
                  <div className="home_container">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                          <div className="home_content text-center">
                            <div className="home_title">
                              <h1>
                                The Best City <span>Guide</span>
                              </h1>
                            </div>
                            <div className="search_form_container">
                              <form action="#" className="search_form" id="search_form">
                                <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                  <input type="text" className="search_input" placeholder="What are you looking for?" required="required" />
                                  <button className="search_button">Search</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide">
                  <div className="background_image" style={{ backgroundImage: "url(images/index.jpg)" }}></div>
                  <div className="home_container">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                          <div className="home_content text-center">
                            <div className="home_title">
                              <h1>The Best City Guide</h1>
                            </div>
                            <div className="search_form_container">
                              <form action="#" className="search_form" id="search_form">
                                <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                  <input type="text" className="search_input" placeholder="What are you looking for?" required="required" />
                                  <button className="search_button">Search</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide">
                  <div className="background_image" style={{ backgroundImage: "url(images/index.jpg)" }}></div>
                  <div className="home_container">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                          <div className="home_content text-center">
                            <div className="home_title">
                              <h1>The Best City Guide</h1>
                            </div>
                            <div className="search_form_container">
                              <form action="#" className="search_form" id="search_form">
                                <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                  <input type="text" className="search_input" placeholder="What are you looking for?" required="required" />
                                  <button className="search_button">Search</button>
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

              <div className="home_slider_dots">
                <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
                  <li className="home_slider_custom_dot active">01.</li>
                  <li className="home_slider_custom_dot">02.</li>
                  <li className="home_slider_custom_dot">03.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="categories">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="categories_container d-flex flex-md-row flex-column align-items-start justify-content-start">
                    <div className="category text-center">
                      <a href="listings.html">
                        <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                          <div className="cat_icon">
                            <img src="images/icon_1.svg" className="svg" alt="https://www.flaticon.com/authors/monkik" />
                          </div>
                          <div className="cat_title">Restaurants</div>
                        </div>
                      </a>
                    </div>

                    <div className="category text-center">
                      <a href="listings.html">
                        <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                          <div className="cat_icon">
                            <img src="images/icon_2.svg" className="svg" alt="https://www.flaticon.com/authors/monkik" />
                          </div>
                          <div className="cat_title">Hotels</div>
                        </div>
                      </a>
                    </div>

                    <div className="category text-center">
                      <a href="listings.html">
                        <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                          <div className="cat_icon">
                            <img src="images/icon_3.svg" className="svg" alt="https://www.flaticon.com/authors/monkik" />
                          </div>
                          <div className="cat_title">Nightlife</div>
                        </div>
                      </a>
                    </div>

                    <div className="category text-center">
                      <a href="listings.html">
                        <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                          <div className="cat_icon">
                            <img src="images/icon_4.svg" className="svg" alt="https://www.flaticon.com/authors/monkik" />
                          </div>
                          <div className="cat_title">Coffeeshops</div>
                        </div>
                      </a>
                    </div>

                    <div className="category text-center">
                      <a href="listings.html">
                        <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                          <div className="cat_icon">
                            <img src="images/icon_5.svg" className="svg" alt="https://www.flaticon.com/authors/monkik" />
                          </div>
                          <div className="cat_title">Culture</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="locations container_custom">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="section_title text-center">
                    <h1>Explore Hot Locations</h1>
                  </div>
                  <div className="locations_container d-flex flex-row align-items-start justify-content-between flex-wrap">
                    <div className="location">
                      <img src="images/location_1.jpg" alt="" />
                      <div className="location_title text-center">
                        <div>
                          <a href="single.html">
                            Amsterdam<div>+</div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="location">
                      <img src="images/location_2.jpg" alt="" />
                      <div className="location_title text-center">
                        <div>
                          <a href="single.html">
                            Paris<div>+</div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="location">
                      <img src="images/location_3.jpg" alt="" />
                      <div className="location_title text-center">
                        <div>
                          <a href="single.html">
                            Singapore<div>+</div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="location">
                      <img src="images/location_4.jpg" alt="" />
                      <div className="location_title text-center">
                        <div>
                          <a href="single.html">
                            Chicago<div>+</div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="location">
                      <img src="images/location_5.jpg" alt="" />
                      <div className="location_title text-center">
                        <div>
                          <a href="single.html">
                            New York<div>+</div>
                          </a>
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
                    <h1>Find the best food near you</h1>
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
                    <h1>
                      How Directory<span>Plus+</span> works
                    </h1>
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

          <div className="cta_2">
            <div className="container">
              <div className="row row-lg-eq-height">
                <div className="col-lg-9 cta_2_col">
                  <div className="cta_2_content">
                    <div className="cta_2_title">
                      <h1>
                        Get the Directory<span>Plus+</span> App
                      </h1>
                    </div>
                    <div className="cta_2_text">
                      <p>
                        Donec cursus, risus non fermentum lacinia, felis lectus interdum velit, in pulvinar enim justo at sem. Quisque ut semper
                        neque. Suspendisse quam est, consequat ullamcorper tellus et, fauci bus laoreet nibh.Donec cursus, risus non fermentum
                        lacinia, felis lectus interdum velit, in pulvinar enim justo at sem.
                      </p>
                    </div>
                    <div className="store_links d-flex flex-row align-items-start justify-content-start flex-wrap">
                      <div className="store_link">
                        <a href="#">
                          <img src="images/store_1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="store_link">
                        <a href="#">
                          <img src="images/store_2.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 cta_2_col">
                  <div className="cta_2_image">
                    <img src="images/cta_2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="clients">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="clients_slider_container">
                    <div className="owl-carousel owl-theme clients_slider">
                      <div className="slide">
                        <div className="client_image">
                          <a href="#">
                            <img src="images/client_1.jpg" alt="" />
                          </a>
                        </div>
                      </div>

                      <div className="slide">
                        <div className="client_image">
                          <a href="#">
                            <img src="images/client_2.jpg" alt="" />
                          </a>
                        </div>
                      </div>

                      <div className="slide">
                        <div className="client_image">
                          <a href="#">
                            <img src="images/client_3.jpg" alt="" />
                          </a>
                        </div>
                      </div>

                      <div className="slide">
                        <div className="client_image">
                          <a href="#">
                            <img src="images/client_4.jpg" alt="" />
                          </a>
                        </div>
                      </div>

                      <div className="slide">
                        <div className="client_image">
                          <a href="#">
                            <img src="images/client_5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
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
                    <div className="copyright order-md-1 order-2">
                      Copyright &copy; All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                    </div>
                    <nav className="footer_nav ml-md-auto order-md-2 order-1">
                      <ul className="d-flex flex-row align-items-center justify-content-start">
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="listings.html">Listings</a>
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
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
