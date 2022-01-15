import { Col, Container, Row } from 'react-bootstrap';
import BarLoader from 'react-spinners/BarLoader';
import styled from "styled-components";
import { Section } from '../Common/PageElement';

export const LoadCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Loading = ({ loading }) => {
    return (
        <Section id="loading" height="full" center>
            <Container>
                <Row>
                    <LoadCol>
                        <BarLoader
                            size={30}
                            color={"#2f8ae1"}
                            loading={loading}
                        />
                    </LoadCol>
                </Row>
            </Container>
        </Section>
    )
}

export default Loading;