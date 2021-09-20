import React from 'react';
import { 
    WorksCardContainer, 
    WorksCardTopBanner, 
    WorksCardBanner, 
    WorksContent,
    WorksCardText, 
    WorksTitle, 
    WorksDescription,
    WorksTagsContainer,
    WorksTags
} from './StyledWorksCard';

const WorksCard = ({title, banner, description, tags}) => {
    return (
        <WorksCardContainer>
            <WorksCardTopBanner />
            <WorksCardBanner>
                <img src={banner} alt="work-pic"></img>
            </WorksCardBanner>
            <WorksContent>
                <WorksTitle>{title}</WorksTitle>
                <WorksDescription>{description}</WorksDescription>
                <WorksTagsContainer>
                    {tags.map((tag, key) => (
                        <WorksTags>{tag}</WorksTags>
                    ))}
                </WorksTagsContainer>
            </WorksContent>
        </WorksCardContainer>
    )
}

export default WorksCard;