import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Fade from 'react-reveal/Fade';
import HeroImg from '../../assets/hero.png';
import Button from '../../components/Button';
import { Section } from '../../components/Common/PageElement';
import ContactForm from '../../components/ContactForm';
import './CustomModal.css';
import {
    HeroCol, HeroCredit, HeroImage, HeroIntro,
    HeroName, HeroParagraph, HeroSubtitle, HeroText
} from './StyledHero';

const Hero = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    return (
        <>
            <Section id="hero" center>
                <Container>
                    <Row>
                        <HeroCol md={4}>
                            <Fade left duration={1000} delay={600} distance="30px">
                                <HeroText>
                                    <HeroIntro>Hey there! I'm</HeroIntro>
                                    <HeroName uppercase>William</HeroName>
                                    <HeroSubtitle uppercase>Engineer + Developer</HeroSubtitle>
                                    <HeroParagraph>I'm design minded and like to craft solid and scaleable products</HeroParagraph>
                                </HeroText>
                                <Button onClick={() => handleShow()}>Contact Me</Button>
                            </Fade>
                        </HeroCol>
                        <HeroCol md={{ span: 6, offset: 2 }}>
                            <Fade right duration={1000} delay={600} distance="30px">
                                <HeroImage>
                                    <img src={HeroImg} alt="HeroImage" />
                                </HeroImage>
                                <HeroCredit>Created in Adobe Illustrator by Me</HeroCredit>
                            </Fade>
                        </HeroCol>
                    </Row>
                </Container>
            </Section>
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
    );
}

export default Hero;