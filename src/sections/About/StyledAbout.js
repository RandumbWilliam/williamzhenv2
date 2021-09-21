import styled from 'styled-components';
import Col from 'react-bootstrap/Col';

export const AboutCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProfilePicture = styled.img`
    border-radius: 1rem;
    width: 450px;
    height: 280px;
    object-fit: cover;
    margin-bottom: 1.3rem;
    box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.2);
`

export const AboutText = styled.p`
    font-weight: 500;
    font-size: 1.0rem;
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
        background: #00BCEF;
        cursor: pointer;
        margin: 0 0.8rem;
        box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.2);
        &:hover {
            text-decoration: none;
            color: #fff;
        }
    }
`