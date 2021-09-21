import { useState } from 'react'
import { Section } from '../../components/common/PageElement';
import { Container, Row, Col } from 'react-bootstrap';
import {
    HeroIntro,
    HeroName,
    HeroSubtitle,
    HeroParagraph,
    HeroText,
    HeroImage,
    HeroCredit,
    HeroCol
} from './StyledHero';
import Button from '../../components/Button';
import ContactForm from '../../components/ContactForm';
import HeroImg from '../../assets/hero.png';
import Modal from 'react-bootstrap/Modal';
import './CustomModal.css';

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
                        <HeroText>
                            <HeroIntro>Hey there! I'm</HeroIntro>
                            <HeroName uppercase>William</HeroName>
                            <HeroSubtitle uppercase>Engineer + Developer</HeroSubtitle>
                            <HeroParagraph>I'm design minded and like to craft solid and scaleable products</HeroParagraph>
                        </HeroText>
                        <Button onClick={() => handleShow()}>Contact Me</Button>
                    </HeroCol>
                    <HeroCol md={{ span: 6, offset: 2 }}>
                        <HeroImage>
                            <img src={HeroImg} alt="HeroImage"/>
                        </HeroImage>
                        <HeroCredit>Created in Adobe Illustrator by Me</HeroCredit>
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
                    <Row style={{marginBottom: '1.5rem'}}>
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