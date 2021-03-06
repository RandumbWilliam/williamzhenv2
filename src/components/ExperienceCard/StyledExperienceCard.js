import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { device } from '../../globalStyles';
import { DEFAULT_FONT_SIZE, SM_FONT_SIZE } from '../Common/StyleElement';

export const ExperienceRow = styled(Row)`
    margin: 5rem;
    @media ${device.xs} {
        margin: 5rem 1rem;
    }
`

export const ExperienceCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: ${props => props.align};
    flex-direction: column;
    @media ${device.xs} {
        text-align: center;
    }
`

export const ExperienceLogo = styled.img`
    width: auto;
    height: 80px;
    margin-bottom: 1.3rem;
`

export const ExperienceName = styled.p`
    font-size: 1.125rem;
    font-weight: 600;
`

export const ExperienceLocation = styled.p``

export const ExperienceTitle = styled.p`
    font-size: 1.125rem;
    font-weight: 600;
`

export const ExperienceDate = styled.p`
    font-size: 1rem;
    font-weight: 500;
`

export const ExperienceDescription = styled.p`
    font-size: ${DEFAULT_FONT_SIZE};
    font-weight: 500;
    margin: 1.3rem 0;
    @media ${device.xs} {
        font-size: ${SM_FONT_SIZE}
    }
`

export const ExperienceTagContainer = styled.div``

export const ExperienceTags = styled.div`
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 500;
    color: #fff;
    background: #00BCEF;
    border-radius: 50vh;
    padding: 0.2rem 0.8rem;
    margin: 0.2rem;
`