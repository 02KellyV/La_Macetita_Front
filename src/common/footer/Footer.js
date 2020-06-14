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
      <div className="cta container_custom">
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
      </footer>
    </Wrapper>
  );
}

export default Footer;
