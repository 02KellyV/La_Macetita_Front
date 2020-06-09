import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("/images/landing.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

function Hero() {
  return (
    <Wrapper className="d-flex align-items-center">
      <div className="w-100">
        <div className="row">
          <div className="col-md-6 text-white text-center">
            <img width="200" src="/images/logo.png" />
            <h1>Welcome to</h1>
            <h1>Healthy Food Paradise</h1>
            <h4>Directory of harvest & fresh food locations</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default withRouter(Hero);
