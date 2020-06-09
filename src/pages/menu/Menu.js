import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { withRouter } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./menu.css";

const HamburgerMenuWrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 10;
  padding: 20px;
  cursor: pointer;
  background: #080D04;
  border-radius:100%
`;

const StyledMenu = styled.div`
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  position: fixed;
  right: 0;
  z-index: 9;
  width: 300px;
  height: 100%;
  background-color: #080D04;
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
      .a {
        color: white;
        text-decoration: none;
        position: relative;
      }

      .a:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #c4356f;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all .5s cubic-bezier(1,.25,0,.75) 0s;
        transition: all .5s cubic-bezier(1,.25,0,.75) 0s;
      }
      .a:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
     }
    }
  }
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [classSignIn, setClassSignIn] = useState('');
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const nameClass = "sign-in-sign-up-wrapper shake-top";
    console.log(!isOpen?nameClass:'');
    setClassSignIn(!isOpen?nameClass:'');
  };

  return (
    <div>
      <HamburgerMenuWrapper>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={toggleMenu}
          width={25}
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
          <li className={classSignIn}>
            <div>
              <Link to="/sign">
                <img width="170" src="/images/beet-sign-in-sign-up.png" alt="sign in/up" />
              </Link>
            </div>
          </li>
          <li>
            <Link className="a" to="/">Home</Link>
          </li>
          <li>
            <Link className="a" to="/garden">Garden</Link>
          </li>
          <li>
            <Link className="a" to="/stories">Stories</Link>
          </li>
          <li>
            <Link className="a" to="/about">About</Link>
          </li>
          <li>
            <Link className="a" to="/contact">Contact</Link>
          </li>
        </ul>
      </StyledMenu>
    </div>
  );
}

export default withRouter(Menu);
