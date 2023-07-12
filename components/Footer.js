import {
  FeaturesContainer,
  FooterBtn,
  FooterConatiner,
  TermsCondition,
} from '../styles/StyledComponent';
import { darkBlue } from '../styles/colorPalette';
import { parsedHtml } from '../utils/utils';

import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Footer = ({ product }) => {
  const { cooling_off_period, terms_condition, why_us } = product;
  return (
    <FooterConatiner>
      <section>
        <FeaturesContainer>
          <span>
            <FaCheck color={darkBlue} />
            {parsedHtml(cooling_off_period)}
          </span>
          <span>
            <FaCheck color={darkBlue} /> <p>Secure signup in 5 minutes</p>
          </span>
          <span>
            <FaCheck color={darkBlue} /> <p>Save time and effort</p>
          </span>
        </FeaturesContainer>
        <section>
          <>Why Us: </>
          {parsedHtml(why_us)}
        </section>
        <TermsCondition>
          <span>{`^`}</span>
          {parsedHtml(terms_condition)}
        </TermsCondition>
      </section>
      <FooterBtn>Connect Online Today</FooterBtn>
    </FooterConatiner>
  );
};
export default Footer;
