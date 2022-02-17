import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { LG_PADDING } from '../../components/Common/StyleElement';

export const WorkRow = styled(Row)`
    padding-top: ${LG_PADDING};
`

export const WorksFilterBtnsContainer = styled(Row)`
    margin: 5rem 0;
`

export const WorksFilterBtns = styled(Col)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const WorksBtn = styled.button`
    &&& {
        font-weight: 600;
        font-size: 1rem;
        border-radius: 50vh;
        border: none;
        background: none;
        padding: 0.4rem 1.2rem;
        margin: 0 1rem;
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease-in;
        ${props => props.active ?
        `background: #00BCEF;
            color: #fff;
            `
        :
        `color: #000;
            transition-duration: 300ms;
            &::after {
                content: "";
                display: block;
                margin: auto;
                height: 2px;
                width: 0;
                background: transparent;
                transition: width 500ms ease;
            }
            &:hover {
                text-decoration: none;
            }
            &:hover::after {
                width: 100%;
                background: #000;
            }
            `
    }
    }
`