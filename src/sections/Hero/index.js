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
import HeroImg from '../../assets/hero.png';

const Hero = () => {
    return (
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
                        <Button>Contact Me</Button>
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
    );
}
 
export default Hero;