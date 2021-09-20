import { Section, Title } from '../../components/common/PageElement';
import { Container, Row, Col } from 'react-bootstrap';
import {
    AboutTitle,
    AboutText,
    ProfilePicture,
    AboutSocialButtons,
    AboutCol,
} from './StyledAbout';
import SocialButton from '../../components/SocialButton';
import ProfilePic from '../../assets/profile.png';
import Dabi from '../../assets/dabi.jpeg';
import { SocialItems } from './Socialtems';

const About = () => {
    return (
        <Section id="about" height="fit">
            <Container>
                <Row>
                    <AboutCol md={7}>
                        <ProfilePicture src={Dabi} alt="ProfilePicure" />
                        <AboutSocialButtons>
                            {SocialItems.map((item, key) => (
                                <SocialButton key={key}>
                                    {item.icon ? 
                                        <i class={item.icon}></i>
                                    :
                                        item.text
                                    }
                                </SocialButton>
                            ))}
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
    );
}
 
export default About;