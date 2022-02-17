import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { DEFAULT_FONT_SIZE, LG_PADDING, PRIMARY_COLOR, SM_FONT_SIZE } from '../../components/Common/StyleElement';
import { device } from '../../globalStyles';

export const AboutCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.xs} {
        padding-bottom: ${LG_PADDING}
    }
    @media ${device.sm} {
        padding-bottom: ${LG_PADDING}
    }
`

export const ProfilePicture = styled.img`
    border-radius: 1rem;
    width: 450px;
    height: 280px;
    object-fit: cover;
    margin-bottom: 1.3rem;
    box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.2);
    @media ${device.xs} {
        width: 250px;
        height: 150px;
    }
    @media ${device.sm} {
        width: 300px;
        height: 300px;
    }
    @media ${device.lg} {
        width: 450px;
        height: 280px;
    }
`

export const AboutText = styled.p`
    font-weight: 500;
    font-size: ${DEFAULT_FONT_SIZE};
    @media ${device.xs} {
        font-size: ${SM_FONT_SIZE};
        padding: 0 10px;
        text-align: center;
    }
    @media ${device.sm} {
        font-size: ${SM_FONT_SIZE};
        text-align: center;
    }
`

export const AboutSocialButtons = styled.div`
    display: flex;
    flex-direction: row;
`

export const AboutSocialBtn = styled.a`
    &&& {
        padding: 10px 14px;
        border-radius: 5px;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        background: ${PRIMARY_COLOR};
        cursor: pointer;
        margin: 0 0.8rem;
        box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.2);
        transition: box-shadow .15s,transform .15s;
        &:hover {
            text-decoration: none;
            color: #fff;
            transform: translateY(-2px);
        }
        @media ${device.xs} {
            margin: 0 0.2rem;
        }
    }
`