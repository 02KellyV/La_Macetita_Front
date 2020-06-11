import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import Hero from "./Hero";
import Categories from "./Categories";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";

const Wrapper = styled.div``;

function HomePage() {
  return (
    <Wrapper>
      <Menu />
      <Hero />
      <Categories />
      <Footer/>
    </Wrapper>
  );
}

export default withRouter(HomePage);
