import styled from 'styled-components';
import BackgroundImg from '../../assets/common/background.png';

const handleSectionHeight = height => {
  switch (height) {
    case "full":
      return "100vh";
    case "fit":
      return "";
    default:
      return "768px";
  }
};

export const Section = styled.section`
    min-height: ${({ height }) => handleSectionHeight(height)};
    padding: 4rem 0;
    display: flex;
    ${props => props.center ?
    `justify-content: center;
            align-items: center;
            `
    :
    `padding-top: 120px;`
  }
`

const handleTitleAlign = align => {
  switch (align) {
    case "left":
      return "left";
    case "right":
      return "right";
    default:
      return "center";
  }
};

export const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 2.0rem;
  text-align: ${({ align }) => handleTitleAlign(align)};
`

export const Background = styled.div`
    background-image: url(${BackgroundImg});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1534px;
    background-position: top center;
    background-repeat: no-repeat;
    z-index: -10;
`