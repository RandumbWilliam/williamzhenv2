import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Missing from '../../assets/works/missing.gif';
import { Section, Title } from '../../components/Common/PageElement';
import WorksCard from '../../components/WorksCard';
import Slider from './Slider';
import { WorkRow, WorksBtn } from './StyledWorks';
import { Tags, WorksItems } from './WorksItems';


const Works = () => {
    const [active, setActive] = useState("everything");
    const [filteredWorksItems, setFilteredWorksItems] = useState(WorksItems);

    useEffect(() => {
        if (active === "everything") {
            setFilteredWorksItems(WorksItems)
        } else {
            setFilteredWorksItems(WorksItems.filter((item) => { return (item.filter.includes(active)) }))
        }
    }, [active])

    return (
        <Section id="works" height="fit">
            <Container>
                <Title align="center">My Works</Title>
                <Slider
                    options={{
                        draggable: true,
                        freeScroll: true,
                        contain: true,
                        prevNextButtons: false,
                        pageDots: false
                    }}
                >
                    {Tags.map((tag) => (
                        <WorksBtn key={tag.id} onClick={() => { setActive(tag.id) }} active={active === tag.id ? true : false}>{tag.name}</WorksBtn>
                    ))}
                </Slider>
                <WorkRow>
                    {filteredWorksItems.length === 0 ?
                        <Col style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "300px" }}>
                            <img src={Missing} width={200} alt="missing-bugcat" />
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

                </WorkRow>
            </Container>
        </Section>
    );
}

export default Works;