import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import HeroImg from '../../assets/hero.png';
import Button from '../../components/Button';
import { Section } from '../../components/Common/PageElement';
import {
    HeroCol, HeroCredit, HeroImage, HeroIntro,
    HeroName, HeroParagraph, HeroSubtitle, HeroText
} from './StyledHero';

const Hero = () => {
    return (
        <Section id="hero" height="full" center background>
            <Container style={{ paddingTop: "60px" }}>
                <Row>
                    <HeroCol lg={4} sm={6} xs={12}>
                        <Fade left duration={1000} delay={600} distance="30px">
                            <HeroText>
                                <HeroIntro>Hey there! I'm</HeroIntro>
                                <HeroName uppercase>William</HeroName>
                                <HeroSubtitle uppercase>Engineer + Developer</HeroSubtitle>
                                <HeroParagraph>I'm design minded and like to craft solid and scaleable products</HeroParagraph>
                            </HeroText>
                            <Button onClick={(e) => {
                                window.location = "mailto:w2zhen@uwaterloo.ca";
                                e.preventDefault();
                            }}>Get in Touch</Button>
                        </Fade>
                    </HeroCol>
                    <HeroCol lg={{ span: 6, offset: 2 }} sm={6} xs={12}>
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
    );
}

export default Hero;