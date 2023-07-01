import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import {
  FaInfoCircle,
  FaLightbulb,
  FaSolarPanel,
  FaCheck
} from "react-icons/fa";

const CardContainer = styled.section`
  margin: 50px auto;
  border: 1px solid gray;
  border-radius: 10px;
  position: relative;
  max-width: 1200px;
`;

const BarContainer = styled.section`
  position: absolute;
  top: -15px;
  left: 50px;
  background: #f5f5f5;
  padding: 7px;
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
`;

const SolarBar = styled(BarContainer)`
  left: 200px;
`;

const HeaderContainer = styled.section`
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

const ImgContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 150px;
`;

const ImgContainerText = styled.section`
  font-size: 15px;
  color: #0186f7;
  margin-bottom: 5px;
`;

const HighLightBox = styled.section`
  background: #f5f5f5;
  padding: 5px;
  border-radius: 5px;
  padding: 10px;
`;

const FeaturesContainer = styled.section`
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

const TermsCondition = styled.section`
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

const HeaderDeatils = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const StandardFeedBox = styled.section`
  background: #deeff1;
  padding: 8px;
  p {
    margin: 0;
  }
`;

const EstimatedCost = styled.section`
  width: 220px;
`;

const EstimatedCostHeader = styled.section`
  background: #2f5ea1;
  padding: 7px;
  color: white;
  display: flex;
  align-items: center;
  svg {
    padding-left: 4px;
  }
`;

const EstimatedCostDetails = styled.section`
  background: #cfe7ea;
  padding: 10px;
`;

const ExpectedYearly = styled.section`
  color: #20327a;
  font-size: 25px;
  font-weight: 700;
`;

const ExpectedMonthly = styled.section`
  color: #3b74a1;
  font-size: 20px;
  font-weight: 500;

  span {
    color: #76797f;
    font-size: 15px;
  }
`;

const Sub = styled.sub`
  color: #76797f;
  font-size: 15px;
`;

const DetailsConatiner = styled.section`
  color: #4a4b4d;
  padding: 0 15px 10px;
`;

const FooterConatiner = styled.section`
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 20px 0 20px 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-left: 8px;

    section {
      width: 100% !important;
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

const FooterBtn = styled.button`
  background-color: #1a2b75;
  color: #fff;
  padding: 15px;
  border-radius: 30px;
  width: 14%;
  height: 10%;
  margin: 0 2%;
  @media (max-width: 800px) {
    width: 60%;
  }
`;

export const Card = ({ product }) => {
  const {
    dmo_percentage,
    plan_name_below_data,
    view_discount,
    view_benefit,
    view_bonus,
    view_contract,
    view_exit_fee,
    expected_annually_bill_amount,
    expected_monthly_bill_amount,
    dmo_content,
    provider_image,
    provider_name,
    solar_compatible,
    cooling_off_period,
    terms_condition,
    why_us
  } = product;
  return (
    <CardContainer>
      <BarContainer>
        <FaLightbulb />
        <span>Electricity</span>
      </BarContainer>
      {solar_compatible && (
        <SolarBar>
          <FaSolarPanel />
          <span>Solar</span>
        </SolarBar>
      )}
      <HeaderContainer>
        <ImgContainer>
          <Image src={provider_image} alt={provider_name} />
          <ImgContainerText>View Details</ImgContainerText>
          <ImgContainerText>Basic Plan Information Document</ImgContainerText>
        </ImgContainer>
        <HeaderDeatils>
          <HighLightBox>
            <span>{dmo_percentage.Ausgrid}</span>
            <div>{plan_name_below_data}</div>
          </HighLightBox>
          <FeaturesContainer>
            {view_benefit && (
              <span>
                <FaCheck style={{ color: "#20327a" }} /> {parse(view_benefit)}
              </span>
            )}
            {view_bonus && (
              <span>
                <FaCheck style={{ color: "#20327a" }} /> {parse(view_bonus)}
              </span>
            )}
            {view_contract && (
              <span>
                <FaCheck style={{ color: "#20327a" }} /> {parse(view_contract)}
              </span>
            )}
            {view_exit_fee && (
              <span>
                <FaCheck style={{ color: "#20327a" }} /> {parse(view_exit_fee)}
              </span>
            )}
          </FeaturesContainer>
          <StandardFeedBox>{parse(view_discount)}</StandardFeedBox>
        </HeaderDeatils>
        <EstimatedCost>
          <EstimatedCostHeader>
            Estimated Cost <FaInfoCircle />
          </EstimatedCostHeader>
          <EstimatedCostDetails>
            <ExpectedYearly>
              ${expected_annually_bill_amount}
              <span>^</span>
              <Sub>/yr</Sub>
            </ExpectedYearly>

            <ExpectedMonthly>
              ${expected_monthly_bill_amount}
              <span>/mo</span>
            </ExpectedMonthly>
          </EstimatedCostDetails>
        </EstimatedCost>
      </HeaderContainer>
      <DetailsConatiner>{parse(dmo_content.Ausgrid)}</DetailsConatiner>
      <FooterConatiner>
        <section style={{ width: "80%" }}>
          <FeaturesContainer>
            <span>
              <FaCheck style={{ color: "#20327a" }} />
              {parse(cooling_off_period)}
            </span>
            <span>
              <FaCheck style={{ color: "#20327a" }} />{" "}
              <p>Secure signup in 5 minutes</p>
            </span>
            <span>
              <FaCheck style={{ color: "#20327a" }} />{" "}
              <p>Save time and effort</p>
            </span>
          </FeaturesContainer>
          <section>
            <>Why Us: </>
            {parse(why_us)}
          </section>
          <TermsCondition>
            <span>{`^`}</span>
            {parse(terms_condition)}
          </TermsCondition>
        </section>
        <FooterBtn>Connect Online Today</FooterBtn>
      </FooterConatiner>
    </CardContainer>
  );
};
