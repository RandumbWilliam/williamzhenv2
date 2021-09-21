import {
    ExperienceLogo,
    ExperienceName,
    ExperienceLocation,
    ExperienceTitle,
    ExperienceDate,
    ExperienceDescription,
    ExperienceTags,
    ExperienceTagContainer,
    ExperienceRow,
    ExperienceCol
} from './StyledExperienceCard';

const ExperienceCard = ({logo, name, location, title, date, description, tags}) => {
    return (
        <ExperienceRow>
            <ExperienceCol md={{span: 3, offset: 1}} align="center">
                <ExperienceLogo src={logo} />
                <ExperienceName>{name}</ExperienceName>
                <ExperienceLocation>{location}</ExperienceLocation>
            </ExperienceCol>
            <ExperienceCol md={7} align="left">
                <ExperienceTitle>{title}</ExperienceTitle>
                <ExperienceDate>{date}</ExperienceDate>
                <ExperienceDescription>{description}</ExperienceDescription>
                <ExperienceTagContainer>
                    {tags.map((tag, key) => (
                        <ExperienceTags key={key}>{tag}</ExperienceTags>
                    ))
                    }
                </ExperienceTagContainer>
            </ExperienceCol>
        </ExperienceRow>
    )
}

export default ExperienceCard;