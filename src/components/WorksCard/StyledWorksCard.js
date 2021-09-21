import styled from 'styled-components';

export const WorksCardContainer = styled.div`
    display: flex;
    position: relative;
    width: 280px;
    height: 350px;
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0px 0px 0px 1px #edeef4;
`

export const WorksCardTopBanner = styled.span`
    position: absolute;
    width: 100%;
    height: 10px;
    top: 0;
    border-radius: 10px 10px 0px 0px;
    transition: all 0.4s ease;
    background: linear-gradient(140deg, #2f8ae1 0%, #1861a6);
    z-index: 5;
`

export const WorksCardBanner = styled.figure`
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 10px;
    transition: all 0.4s ease;
    img {
        width: 280px;
        height: 180px;
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
    height: 150px;
    position: relative;
    transform: translateY(185px);
    padding: 1rem;
`

export const WorksDescription = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    color: 000;
    letter-spacing: 0.8px;
    margin-top: 5px;
`

export const WorksTagsContainer = styled.div`
    position: absolute;
    bottom: 0;
`

export const WorksTags = styled.div`
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 500;
    color: #fff;
    background: #00BCEF;
    border-radius: 50vh;
    padding: 0.2rem 0.8rem;
    margin: 0.2rem;
`