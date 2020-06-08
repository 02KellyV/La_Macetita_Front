import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { withRouter } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HamburgerMenuWrapper = styled.div`
  position: fixed;
  right: 0;
  z-index: 10;
  padding: 20px;
  cursor: pointer;
`;

const StyledMenu = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  position: fixed;
  right: 0;
  z-index: 9;
  width: 300px;
  height: 100%;
  background-color: #3d673e;
  padding-top: 60px;
  ul {
    list-style-type: none;
    .sign-in-sign-up-wrapper {
      margin-bottom: 0;
    }
    li {
      margin-bottom: 20px;
      font-size: 30px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        text-decoration: underline;
      }
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HamburgerMenuWrapper>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={toggleMenu}
          width={30}
          height={20}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </HamburgerMenuWrapper>
      <StyledMenu isOpen={isOpen}>
        <ul>
          <li className="sign-in-sign-up-wrapper">
            <Link to="/">
              <img width="170" src="/images/beet-sign-in-sign-up.png" />
            </Link>
          </li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/garden">Garden</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </StyledMenu>
    </div>
  );
}

export default withRouter(Menu);
