import { useState } from 'react';
import { Section, Title } from '../../components/Common/PageElement';
import { Container, Row, Col } from 'react-bootstrap';
import {
    AboutText,
    ProfilePicture,
    AboutSocialButtons,
    AboutSocialBtn,
    AboutCol,
} from './StyledAbout';
import ProfilePic from '../../assets/profile.jpg';
import Dabi from '../../assets/dabi.jpeg';
import { SocialItems } from './Socialtems';
import ContactForm from '../../components/ContactForm';
import Modal from 'react-bootstrap/Modal';

const About = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    return (
        <>
        <Section id="about" height="fit">
            <Container>
                <Row>
                    <AboutCol md={7}>
                        <ProfilePicture src={ProfilePic} alt="ProfilePicure" />
                        <AboutSocialButtons>
                            {SocialItems.map((item, key) => {
                                if (item.id === "email") {
                                    return (
                                        <AboutSocialBtn key={key} onClick={() => handleShow()}><i class={item.icon}></i></AboutSocialBtn>
                                    )
                                } else {
                                    return (
                                        <AboutSocialBtn key={key} href={item.url} target="_blank">
                                            {item.icon ? 
                                                <i class={item.icon}></i>
                                            :
                                                item.text
                                            }
                                        </AboutSocialBtn>
                                    )
                                }
                            })}
                        </AboutSocialButtons>
                    </AboutCol>
                    <Col md={5}>
                        <Title align="left">About Me</Title>
                        <AboutText>
                            Hello! I am a third year Nanotechnology Engineering student taking the Computing Option at
                            the University of Waterloo. My main area of interest and focus is in nanoelectronics and
                            nanobiotechnology. I am a designer and developer who enjoys building and desiging scalable
                            products with great user experience.
                            <br></br>
                            <br></br>
                            During my free time, I enjoy skateboarding, fitness training, and doing art. I am always
                            down for a chat about anything!
                        </AboutText>
                    </Col>
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
 
export default About;