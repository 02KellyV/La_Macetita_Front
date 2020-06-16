import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .parallax_background {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <footer class="page-footer font-small unique-color-dark">

        <div class="container text-center text-md-left mt-5">

          <div class="row mt-3">

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 class="text-uppercase font-weight-bold">Navigate</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p>
                <a href="#!">Home</a>
              </p>
              <p>
                <a href="#!">Garden</a>
              </p>
              <p>
                <a href="#!">Stories</a>
              </p>
              <p>
                <a href="#!">About</a>
              </p>

            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 class="text-uppercase font-weight-bold">Need help?</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p>
                <a href="#!">FAQ</a>
              </p>
              <p>
                <a href="#!">Contact</a>
              </p>
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Privacy Policy - T&amp;C</a>
              </p>

            </div>

            <div class="col-md-4 col-lg-2 col-xl-3 mx-auto mb-4">

              <h6 class="text-uppercase font-weight-bold">Us</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p>
              <i class="fa fa-instagram" aria-hidden="true"></i> Instragram
              </p>
              <p>
                <i class="fa fa-envelope"></i> Support@lamacetita.com</p>
              <p>
                <i class="fa fa-map-marker"></i> From Medellín, Colombia ♡</p>
            </div>

            <div class="col-md-4 col-lg-4 col-xl-5 mx-auto mb-4">

              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>


            </div>

          </div>

        </div>

        <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
{/* <div className="cta container_custom">
  <div className="parallax_background" style={{ backgroundImage: "url(/images/cta.jpg)" }}></div>
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="cta_content">
          <div className="cta_title">
            <h1>Alimentos frescos cuando tu quieras!</h1>
          </div>
          <div className="cta_text">
            <p>
              El campo, nos da vida y tranquilidad. No hay nada más saludable que alimentarnos de cosechas frescas. Acércate a tu huerta
              orgánica más cerca y llénate de la energía de una huerta.
            </p>
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
</footer>*/}
    </Wrapper>
  );
}

export default Footer;
