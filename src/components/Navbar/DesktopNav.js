import { Squash as Hamburger } from "hamburger-react";
import React from "react";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";
import Logo from "../../assets/common/logo.png";
import { device } from "../../globalStyles";
import { useScroll } from "../../hooks";
import { useMenuContext } from "../../state";
import NavLinks from "./NavLinks";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" style={{ width: "60px", height: "auto" }} />
      </Link>
      <NavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0.2} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  transition: all 150ms linear;
  ${(props) =>
    props.isScrolled &&
    css`
      background: #2A2B2A;
      box-shadow: rgba(0, 0, 0, 0.8) 0 1px 4px;
    `}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  z-index: 2;
  @media ${device.xs} {
    padding: 0 10px;
  }
  @media ${device.sm} {
    padding: 0 60px;
  }
  @media ${device.md} {
    justify-content: space-between;
    padding: 0 60px;
  }
  @media ${device.lg} {
    padding: 0 60px;
  }
  @media ${device.xl} {
    padding: 0 180px;
  }
  .logo {
    flex: 2;
    color: #000;
    font-size: 32px;
  }
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: #fff !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;