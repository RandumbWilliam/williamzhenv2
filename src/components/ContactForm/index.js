//React
import React, { useState } from "react";
// Components
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from '../Button';
// Styles
import { FormContainer, FormInput, FormRow, FormContact, FormBtn } from './StyledContactForm';

const ContactForm = () => {
    const [contact, setContact] = useState({
        first: "",
        last: "",
        email: "",
        subject: "",
        message: ""
    })

    const onChangeFirstName = (e) => {
        setContact({...contact, first: e.target.value})
    }

    const onChangeLastName = (e) => {
        setContact({...contact, last: e.target.value})
    }

    const onChangeEmail = (e) => {
        setContact({...contact, email: e.target.value})
    }

    const onChangeSubject = (e) => {
        setContact({...contact, subject: e.target.value})
    }

    const onChangeMessage = (e) => {
        setContact({...contact, message: e.target.value})
    }

    return (
        <FormContainer>
            <FormInput>
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control size="md" type="text" placeholder="First Name" onChange={onChangeFirstName}/>
                </Col>
                <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control size="md" type="text" placeholder="Last Name" onChange={onChangeLastName}/>
                </Col>
            </FormInput>
            <FormInput>
                <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control size="md" type="email" placeholder="Email" onChange={onChangeEmail}/>
                </Col>
            </FormInput>
            <FormInput>
                <Col>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control size="md" type="text" placeholder="Subject" onChange={onChangeSubject}/>
                </Col>
            </FormInput>
            <FormInput>
                <Col>
                    <Form.Label>Message</Form.Label>
                    <Form.Control size="md" as="textarea" rows={5} style={{resize: "none"}} onChange={onChangeMessage}/>
                </Col>
            </FormInput>
            <FormBtn>
                <Col md={{ span: 6, offset: 3 }}>
                    <Button fill disabled={true}>SORRY! UNDER CONSTRUCTION</Button>
                </Col>
            </FormBtn>
            <FormRow>
                <FormContact>
                    <span><i class="fas fa-envelope"></i> william.zhen8166@hotmail.com</span>
                </FormContact>
                <FormContact>
                    <span><i class="fas fa-phone"></i> (416) 272-8166</span>
                </FormContact>
            </FormRow>
        </FormContainer>
    )
}

export default ContactForm