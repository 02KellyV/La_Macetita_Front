import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import Hero from "./Hero";
import Categories from "./Categories";

const Wrapper = styled.div``;

function HomePage() {
  return (
    <Wrapper>
      <Hero />
      <Categories />
    </Wrapper>
  );
}

export default withRouter(HomePage);
