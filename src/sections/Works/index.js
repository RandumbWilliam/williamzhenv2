import React, { useState, useEffect } from 'react';

import { Section, Title } from '../../components/Common/PageElement';
import { Container, Row, Col } from 'react-bootstrap';
import {
    WorksFilterBtnsContainer,
    WorksFilterBtns,
    WorksBtn
} from './StyledWorks';
import WorksCard from '../../components/WorksCard';
import {Tags, WorksItems} from './WorksItems';
import Missing from '../../assets/works/missing.gif';

const Works = () => {
    const [active, setActive] = useState("everything");
    const [filteredWorksItems, setFilteredWorksItems] = useState(WorksItems);

    useEffect(() => {
        if (active === "everything") {
            setFilteredWorksItems(WorksItems)
        } else {
            setFilteredWorksItems(WorksItems.filter((item) => {return (item.filter === active)}))
        }
    }, [active])

    return (
        <Section id="works" height="fit">
            <Container>
                <Title align="center">My Works</Title>
                <WorksFilterBtnsContainer>
                    <WorksFilterBtns>
                        {Tags.map((tag) => (
                            <WorksBtn key={tag.id} onClick={() => {setActive(tag.id)}} active={active === tag.id ? true : false}>{tag.name}</WorksBtn>
                        ))}
                    </WorksFilterBtns>
                </WorksFilterBtnsContainer>
                <Row>
                    {filteredWorksItems.length === 0 ?
                        <Col style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "300px"}}>
                            <img src={Missing} width={200} alt="missing-bugcat"/>
                            <h1>I'M SORRY! WILL HAVE SOME SOON!</h1>
                        </Col>
                    :
                        <>
                        {filteredWorksItems.map((item, key) => (
                            <WorksCard 
                                key={item.id}
                                title={item.title}
                                banner={item.banner}
                                description={item.description}
                                tags={item.tags}
                                filter={item.filter}
                            />
                        ))}
                        </>
                    }
                    
                </Row>
            </Container>
        </Section>
    );
}
 
export default Works;