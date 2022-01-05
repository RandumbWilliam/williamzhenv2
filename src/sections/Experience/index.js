import { Section, Title } from '../../components/Common/PageElement';
import { Container } from 'react-bootstrap';
import ExperienceCard from '../../components/ExperienceCard';
import {ExperienceItems} from './ExperienceItems';

const Experience = () => {
    return (
        <Section id="experience" height="fit">
            <Container>
                <Title align="center">My Experiences</Title>
                {ExperienceItems.map((item, key) => (
                    <ExperienceCard
                        key={key}
                        logo={item.logo}
                        name={item.name}
                        location={item.location}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        tags={item.tags}
                    />
                ))}
            </Container>
        </Section>
    );
}
 
export default Experience;