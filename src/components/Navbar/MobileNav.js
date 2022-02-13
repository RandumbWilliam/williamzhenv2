import React, { useEffect } from "react";
import styled from "styled-components";
import { useMedia, useScrollFreeze } from "../../hooks";
import { useMenuContext } from "../../state";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  const { isMenuOpen, closeMenu } = useMenuContext();
  const { isMobile } = useMedia();
  useScrollFreeze(isMenuOpen);

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
