import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProfilePic from '../../assets/profile.jpg';
import { Section, Title } from '../../components/Common/PageElement';
import { SocialItems } from './Socialtems';
import {
    AboutCol, AboutSocialBtn, AboutSocialButtons, AboutText,
    ProfilePicture
} from './StyledAbout';

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
                        <AboutCol md={7} xs={12}>
                            <ProfilePicture src={ProfilePic} alt="ProfilePicure" />
                            <AboutSocialButtons>
                                {SocialItems.map((item, key) => {
                                    if (item.id === "email") {
                                        return (
                                            <AboutSocialBtn key={key} onClick={(e) => {
                                                window.location = "mailto:w2zhen@uwaterloo.ca";
                                                e.preventDefault();
                                            }}><i class={item.icon}></i></AboutSocialBtn>
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
                        <AboutCol md={5} xs={12}>
                            <Title align="left">About Me</Title>
                            <AboutText>
                                Hello! I am a Nanotechnology Engineering student taking the Computing Option at
                                the University of Waterloo. My main area of interest and focus is in nanoelectronics and
                                software development. I am a designer and developer who enjoys building and desiging scalable
                                products with a great user experience.
                                <br></br>
                                <br></br>
                                During my free time, I enjoy skateboarding, fitness training, and doing art. I am always
                                down for a chat about anything!
                            </AboutText>
                        </AboutCol>
                    </Row>
                </Container>
            </Section>
            {/* <Modal size="lg"
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
            </Modal> */}
        </>
    );
}

export default About;