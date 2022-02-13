import Col from 'react-bootstrap/Col';
import styled, { keyframes } from 'styled-components';
import { BOLD_FONT_WEIGHT, DEFAULT_FONT_SIZE, MD_FONT_SIZE, MEDIUM_FONT_WEIGHT, SEMI_FONT_WEIGHT, SM_FONT_SIZE, XL2_FONT_SIZE, XL3_FONT_SIZE, XL4_FONT_SIZE, XL_PADDING, XS_FONT_SIZE } from '../../components/Common/StyleElement';
import { device } from '../../globalStyles';

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
    @media ${device.xs} {
        align-items: center;
        text-align: center;
    }
`


export const HeroImage = styled.div`
    margin-bottom: 1.3rem;
    animation: ${float} 6s ease-in-out infinite;
    @media ${device.xs} {
            margin-top: ${XL_PADDING};
        }
    img {
        @media ${device.xs} {
            width: 250px;
        }

        @media ${device.sm} {
            width: 250px;
        }

        @media ${device.md} {
            width: 300px;
        }

        @media ${device.lg} {
            width: 400px;
        }
        @media ${device.xl} {
            width: 500px;
        }
    }
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.3rem;
`

export const HeroName = styled.div`
    font-weight: ${BOLD_FONT_WEIGHT};
    text-transform: ${props => props.uppercase ? 'uppercase' : ''};
    @media ${device.xs} {
        font-size: ${XL3_FONT_SIZE};
    }
    @media ${device.sm} {
        font-size: ${XL2_FONT_SIZE};
    }

    @media ${device.md} {
        font-size: ${XL3_FONT_SIZE};
    }

    @media ${device.lg} {
        font-size: ${XL4_FONT_SIZE};
    }
`

export const HeroSubtitle = styled.div`
    font-weight: ${SEMI_FONT_WEIGHT};
    color: #256DB6;
    text-transform: ${props => props.uppercase ? 'uppercase' : ''};
    @media ${device.xs} {
        font-size: ${DEFAULT_FONT_SIZE};
    }
    @media ${device.sm} {
        font-size: ${SM_FONT_SIZE};
    }
    @media ${device.md} {
        font-size: ${DEFAULT_FONT_SIZE};
    }
    @media ${device.lg} {
        font-size: ${MD_FONT_SIZE};
    }
`

export const HeroIntro = styled.div`
    font-weight: ${MEDIUM_FONT_WEIGHT};
    text-transform: ${props => props.uppercase ? 'uppercase' : ''};
    @media ${device.xs} {
        font-size: ${DEFAULT_FONT_SIZE};
        text-align: center;
    }
    @media ${device.sm} {
        font-size: ${SM_FONT_SIZE};
    }
    @media ${device.md} {
        font-size: ${DEFAULT_FONT_SIZE};
    }

    @media ${device.lg} {
        font-size: ${MD_FONT_SIZE};
    }
`

export const HeroParagraph = styled.div`
    font-weight: 500;
    @media ${device.xs} {
        padding: 0 20px;
        font-size: ${SM_FONT_SIZE};
    }
    @media ${device.sm} {
        font-size: ${XS_FONT_SIZE};
    }
    @media ${device.md} {
        width: 80%;
        font-size: ${SM_FONT_SIZE};
    }

    @media ${device.lg} {
        font-size: ${DEFAULT_FONT_SIZE};
    }
`

export const HeroCredit = styled.div`
    font-weight: 500;
    font-size: 0.8rem;
    color: #ccc;
    text-align: center;
`