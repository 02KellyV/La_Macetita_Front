import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div``;

function Categories() {
  return (
    <Wrapper className="container h-auto">
      <div className="row py-5">
        <div className="col-2">
          <img
            src="https://i.picsum.photos/id/1042/100/100.jpg"
            className="rounded-circle"
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            src="https://i.picsum.photos/id/1042/100/100.jpg"
            className="rounded-circle"
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            src="https://i.picsum.photos/id/1042/100/100.jpg"
            className="rounded-circle"
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            src="https://i.picsum.photos/id/1042/100/100.jpg"
            className="rounded-circle"
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            src="https://i.picsum.photos/id/1042/100/100.jpg"
            className="rounded-circle"
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            src="https://i.picsum.photos/id/1042/100/100.jpg"
            className="rounded-circle"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default withRouter(Categories);
