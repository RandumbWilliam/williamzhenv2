import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { WorksCardBanner, WorksCardContainer, WorksCardWrapper, WorksContent, WorksDescription, WorksTags, WorksTagsContainer, WorksTitle } from './StyledWorksCard';

const WorksCard = ({ title, banner, description, tags }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }
    return (
        <>
            <WorksCardContainer lg={3} md={4} sm={12}>
                <WorksCardWrapper>
                    <WorksCardBanner>
                        <img src={banner} alt="work-pic"></img>
                    </WorksCardBanner>
                    <WorksContent>
                        <WorksTagsContainer>
                            {tags.map((tag, key) => (
                                <WorksTags key={key}>{tag}</WorksTags>
                            ))}
                        </WorksTagsContainer>
                        <WorksTitle>{title}</WorksTitle>
                        <WorksDescription>{description}</WorksDescription>
                    </WorksContent>
                </WorksCardWrapper>
            </WorksCardContainer>
            <Modal size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                    <i onClick={() => handleClose()} class="fas fa-times"></i>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row style={{ marginBottom: '1.5rem' }}>
                            <Col>
                                HI
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default WorksCard;