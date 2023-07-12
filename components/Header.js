import {
  EstimatedCost,
  EstimatedCostDetails,
  EstimatedCostHeader,
  ExpectedMonthly,
  ExpectedYearly,
  FeaturesContainer,
  HeaderContainer,
  HeaderDeatils,
  HighLightBox,
  Image,
  ImgContainer,
  ImgContainerText,
  StandardFeedBox,
  Sub,
} from '../styles/StyledComponent';
import { darkBlue } from '../styles/colorPalette';
import { parsedHtml } from '../utils/utils';

import React from 'react';
import { FaCheck, FaInfoCircle } from 'react-icons/fa';

const Header = ({ product }) => {
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
    provider_image,
    provider_name,
  } = product;
  return (
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
              <FaCheck color={darkBlue} /> {parsedHtml(view_benefit)}
            </span>
          )}
          {view_bonus && (
            <span>
              <FaCheck color={darkBlue} /> {parsedHtml(view_bonus)}
            </span>
          )}
          {view_contract && (
            <span>
              <FaCheck color={darkBlue} /> {parsedHtml(view_contract)}
            </span>
          )}
          {view_exit_fee && (
            <span>
              <FaCheck color={darkBlue} /> {parsedHtml(view_exit_fee)}
            </span>
          )}
        </FeaturesContainer>
        <StandardFeedBox>{parsedHtml(view_discount)}</StandardFeedBox>
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
  );
};

export default Header;
