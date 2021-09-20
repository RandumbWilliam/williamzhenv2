import React from 'react';
import { 
    Bar,
    Foot, 
    FooterLogo, 
    FooterMenu, 
    FooterCenterCol, 
    FooterLink, 
    FooterA, 
    FooterCopyright 
} from './StyledFooter';
import { Container, Row } from 'react-bootstrap';
import { FooterItems } from './FooterItems';
import Logo from '../../assets/common/logo.png'

const Footer = () => {
    return (
        <Foot>
            <Container>
                <Row>
                    <FooterCenterCol>
                        <FooterLogo to="/">
                            <img src={Logo} alt="AlignDx"/>
                        </FooterLogo>
                    </FooterCenterCol>
                </Row>
                <Row>
                    <FooterCenterCol>
                        <FooterMenu>
                            {FooterItems.map((item, key) => (
                                <FooterLink key={key} to={item.url}><i class={item.icon}></i></FooterLink>
                            ))}
                        </FooterMenu>
                    </FooterCenterCol>
                </Row>
                <Row>
                    <FooterCenterCol>
                        <FooterCopyright>
                            © William Zhen 2021.
                        </FooterCopyright>
                    </FooterCenterCol>
                </Row>
            </Container>
        </Foot>
    )
}

export default Footer;