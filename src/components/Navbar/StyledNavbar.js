import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import {Link} from 'react-scroll';

export const MenuLink = styled(Link)`
  &&& {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    color: #fff;
    transition: all 0.3s ease-in;
    font-size: 1.0rem;
    font-weight: 600;
    transition-duration: 300ms;
    &::after {
      content: "";
      display: block;
      margin: auto;
      height: 2px;
      width: 0;
      background: transparent;
      transition: width 500ms ease;
    }
    &:hover {
      text-decoration: none;
      color: #fff;
    }
    &:hover::after {
      width: 100%;
      background: #fff;
    }
  }
`;

export const Nav = styled(Container)`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  
  img {
    width: 100px;
    height: auto;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;