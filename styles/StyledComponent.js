import {
  cyan,
  darkBlue,
  dimGray,
  dodgerBlue,
  gray,
  midnightBlue,
  powderBlue,
  royalBlue,
  skyBlue,
  white,
  whiteSmoke,
} from './colorPalette';

import styled from 'styled-components';

export const DataCount = styled.div`
  background: ${royalBlue};
  padding: 7px;
  color: ${white};
  display: inline-block;
  border-radius: 5px;
`;

export const Container = styled.div`
  padding: 16px;
`;

export const CardContainer = styled.section`
  margin: 50px auto;
  border: 1px solid gray;
  border-radius: 10px;
  position: relative;
  max-width: 1200px;
`;

export const BarContainer = styled.section`
  position: absolute;
  top: -15px;
  left: 50px;
  background: ${whiteSmoke};
  padding: 7px;
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
`;

export const SolarBar = styled(BarContainer)`
  left: 200px;
`;

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 15px 15px 10px;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

export const ImgContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 150px;
`;

export const ImgContainerText = styled.section`
  font-size: 15px;
  color: ${dodgerBlue};
  margin-bottom: 5px;
`;

export const HighLightBox = styled.section`
  background: ${whiteSmoke};
  padding: 5px;
  border-radius: 5px;
  padding: 10px;
`;

export const FeaturesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
  justify-content: center;
  p {
    padding: 0;
    margin: 0;
  }
  svg {
    margin: 0 8px 0 8px;
  }
  span {
    display: flex;
    align-items: center;
  }
`;

export const TermsCondition = styled.section`
  display: flex;
  flex-flow: inherit;
  p {
    margin: 0 0 0 8px;
    padding: 0;
  }

  @media (max-width: 800px) {
      p {
        margin 0 8px;
      }
    }
`;

export const HeaderDeatils = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const StandardFeedBox = styled.section`
  background: ${powderBlue};
  padding: 8px;
  p {
    margin: 0;
  }
`;

export const EstimatedCost = styled.section`
  width: 220px;
`;

export const EstimatedCostHeader = styled.section`
  background: ${royalBlue};
  padding: 7px;
  color: white;
  display: flex;
  align-items: center;
  svg {
    padding-left: 4px;
  }
`;

export const EstimatedCostDetails = styled.section`
  background: ${cyan};
  padding: 10px;
`;

export const ExpectedYearly = styled.section`
  color: ${darkBlue};
  font-size: 25px;
  font-weight: 700;
`;

export const ExpectedMonthly = styled.section`
  color: ${skyBlue};
  font-size: 20px;
  font-weight: 500;

  span {
    color: ${gray};
    font-size: 15px;
  }
`;

export const Sub = styled.sub`
  color: ${gray};
  font-size: 15px;
`;

export const DetailsConatiner = styled.section`
  color: ${dimGray};
  padding: 0 15px 10px;
`;

export const FooterConatiner = styled.section`
  display: flex;
  justify-content: space-between;
  background: ${whiteSmoke};
  padding: 20px 0 20px 20px;
  section {
    width: 80%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-left: 8px;

    section {
      width: 100%;
    }
  }
  ${FeaturesContainer} {
    max-width: fit-content;
    margin: 0;
    span {
      margin-bottom: 16px;
    }
    svg {
      margin: 0 8px 0 0;
    }
    p {
      margin-right: 8px;
    }
  }
`;

export const FooterBtn = styled.button`
  background-color: ${midnightBlue};
  color: ${white};
  padding: 15px;
  border-radius: 30px;
  width: 14%;
  height: 10%;
  margin: 0 2%;
  @media (max-width: 800px) {
    width: 60%;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const LoaderBox = styled.div`
  border: 10px solid ${cyan};
  border-radius: 50%;
  border-top: 10px solid ${royalBlue};
  width: 75px;
  height: 75px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
