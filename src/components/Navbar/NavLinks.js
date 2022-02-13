import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useTheme } from "../../hooks";
import { useMenuContext } from "../../state";
import { DEFAULT_FONT_SIZE } from "../Common/StyleElement";

export const links = [
  {
    title: "Home",
    id: "hero"
  },
  {
    title: "About",
    id: "about"
  },
  {
    title: "Experience",
    id: "experience"
  },
  {
    title: "Works",
    id: "works"
  },
];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();
  const [theme, toggleTheme] = useTheme();

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link, key) => (
        <li key={key}>
          <NavLink
            key={key}
            to={link.id}
            spy={true}
            smooth={true}
            duration={500} onClick={closeMenu}>
            {link.title}
          </NavLink>
        </li>
      ))}
      {/* <li>
        <button onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li> */}
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  cursor: pointer;
  font-size: ${DEFAULT_FONT_SIZE};
  padding: 0;

  li {
    margin-right: 26px;
  }

  ${'' /* li:not(:last-child) {
    margin-right: 26px;
  }

  li:last-child {
    margin-left: auto;
  } */}

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  color: #fff !important;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: #fff;
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
