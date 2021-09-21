import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

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
    font-size: 1rem;
`

export const FormBtn = styled(Row)`
    margin: 3rem 0;
`