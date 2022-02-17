import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Logo from '../../assets/common/logo.png';
import ContactForm from '../ContactForm';
import { FooterItems } from './FooterItems';
import {
    Foot, FooterCenterCol, FooterCopyright, FooterLink, FooterLogo,
    FooterMenu
} from './StyledFooter';

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    return (
        <>
            <Foot>
                <Container>
                    <Row>
                        <FooterCenterCol>
                            <FooterLogo to="/">
                                <img src={Logo} alt="AlignDx" />
                            </FooterLogo>
                        </FooterCenterCol>
                    </Row>
                    <Row>
                        <FooterCenterCol>
                            <FooterMenu>
                                {FooterItems.map((item, key) => {
                                    if (item.id === "email") {
                                        return (
                                            <FooterLink key={key} onClick={(e) => {
                                                window.location = "mailto:w2zhen@uwaterloo.ca";
                                                e.preventDefault();
                                            }}><i class={item.icon}></i></FooterLink>
                                        )
                                    } else {
                                        return (
                                            <FooterLink key={key} href={item.href} target="_blank"><i class={item.icon}></i></FooterLink>
                                        )
                                    }
                                })}
                            </FooterMenu>
                        </FooterCenterCol>
                    </Row>
                    <Row>
                        <FooterCenterCol>
                            <FooterCopyright>
                                © William Zhen 2022.
                            </FooterCopyright>
                        </FooterCenterCol>
                    </Row>
                </Container>
            </Foot>
            <Modal size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Contact Me
                    </Modal.Title>
                    <i onClick={() => handleClose()} class="fas fa-times"></i>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row style={{ marginBottom: '1.5rem' }}>
                            <Col>
                                <ContactForm />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Footer;