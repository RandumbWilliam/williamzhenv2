import styled from "styled-components";
import Col from 'react-bootstrap/Col';

export const Bar = styled.div`
  border-left: 2px solid #7c8ba1;
  height: auto;
  margin: 0 15px;
`

export const Foot = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 250px;
  background: #ffffff;
  font-weight: 500;
  border-top: solid;
  border-top-width: 1px;
  border-top-color: rgba(124, 139, 161, 0.1);
`

export const FooterCenterCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterCopyright = styled.p`
  font-size: 0.8rem;
`

export const FooterLogo = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  font-weight: bold;
  text-decoration: none;
  z-index: 1;
  margin-bottom: 1.2rem;
  img {
    width: 70px;
    height: auto;
  }
`

export const FooterMenu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    text-align: center;
    margin-bottom: 2rem;
    padding: 0;
`

export const FooterLink = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 2.4rem;
  transition-duration: 300ms;
  i {
    &:hover {
      color: #243e63 ;
    };
  }
`