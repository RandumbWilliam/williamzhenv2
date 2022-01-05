import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { DEFAULT_FONT_SIZE } from '../Common/StyleElement';

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
`

export const FormInput = styled(Row)`
    margin-bottom: 10px;
`

export const FormRow = styled(Row)`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const FormContact = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${DEFAULT_FONT_SIZE};
`

export const FormBtn = styled(Row)`
    margin: 1.5rem 0;
`