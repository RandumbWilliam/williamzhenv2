import Col from 'react-bootstrap/Col';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
}
`

export const HeroCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`


export const HeroImage = styled.div`
    margin-bottom: 1.3rem;
    animation: ${float} 6s ease-in-out infinite;
    img {
        width: 100%;
        height: auto;
    }
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.3rem;
`

export const HeroName = styled.h1`
    font-weight: 700;
    font-size: 4.8rem;
    text-transform: ${props => props.uppercase ? 'uppercase' : ''}
`

export const HeroSubtitle = styled.p`
    font-weight: 600;
    font-size: 1.3rem;
    color: #256DB6;
    text-transform: ${props => props.uppercase ? 'uppercase' : ''}
`

export const HeroIntro = styled.p`
    font-weight: 500;
    font-size: 1.0rem;
    text-transform: ${props => props.uppercase ? 'uppercase' : ''}
`

export const HeroParagraph = styled.p`
    font-weight: 500;
    font-size: 1.0rem;
`

export const HeroCredit = styled.p`
    font-weight: 500;
    font-size: 0.8rem;
    color: #ccc;
    text-align: center;
`