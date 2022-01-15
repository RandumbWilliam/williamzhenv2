import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import LogoIcon from '../../assets/common/logo.png';
import { NavbarItems } from './NavbarItems';
import { Hamburger, Logo, Menu, MenuLink, Nav } from './StyledNavbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fade top duration={1000} delay={600} distance="15px">
      <Nav>
        <Logo href="">
          <img src={LogoIcon} alt="WilliamZhen" />
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          {NavbarItems.map((item, key) => (
            <MenuLink
              key={key}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
            >{item.title}</MenuLink>
          ))}
        </Menu>
      </Nav>
    </Fade>
  );
};

export default Navbar;