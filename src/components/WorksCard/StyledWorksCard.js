import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { WHITE_COLOR, XS2_FONT_SIZE } from '../Common/StyleElement';

export const WorksCardContainer = styled(Col)`
    padding: 0.5rem;
`

export const WorksCardWrapper = styled.div`
    background-color: ${WHITE_COLOR};
    ${'' /* cursor: pointer; */}
    padding: 8px;
    border-radius: 12px;
    border: 1px solid #BACDD8;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transform: scale(1.025);
    }
`

export const WorksCardBanner = styled.figure`
    overflow: hidden;
    z-index: 1;
    transition: all 0.4s ease;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    img {
        height: 160px;
        width: 100%;
        object-fit: cover;
    }
`

export const WorksTitle = styled.p`
    font-size: 1rem;
    color: #000;
    font-weight: 600;
`

export const WorksContent = styled.div`
    width: 100%;
    min-height: 150px;
    padding: 0 0.5rem;
`

export const WorksDescription = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    color: 000;
    letter-spacing: 0.8px;
    margin-top: 5px;
`

export const WorksTagsContainer = styled.div`
    padding-bottom: 0.5rem;
`

export const WorksTags = styled.div`
    display: inline-block;
    font-size: ${XS2_FONT_SIZE};
    font-weight: 500;
    color: #fff;
    background: #00BCEF;
    border-radius: 50vh;
    padding: 0.2rem 0.8rem;
    margin-right: 0.5rem;
`