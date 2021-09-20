import React, { useState } from "react";
import { Nav, Logo, MenuLink, Menu, Hamburger} from './StyledNavbar';
import LogoIcon from '../../assets/common/logo.png';
import {NavbarItems} from './NavbarItems'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Nav>
        <Logo href="">
          <img src={LogoIcon} alt="WilliamZhen"/>
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
    );
  };
  
  export default Navbar;