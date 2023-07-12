import {
  BarContainer,
  CardContainer,
  DetailsConatiner,
  SolarBar,
} from '../styles/StyledComponent';
import { parsedHtml } from '../utils/utils';
import { DynamicCardFooter, DynamicCardHeader } from './index';

import React from 'react';
import { FaLightbulb, FaSolarPanel } from 'react-icons/fa';

const Card = ({ product }) => {
  const { dmo_content, solar_compatible } = product;

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
      <DynamicCardHeader product={product} />
      <DetailsConatiner>{parsedHtml(dmo_content.Ausgrid)}</DetailsConatiner>
      <DynamicCardFooter product={product} />
    </CardContainer>
  );
};

export default Card;
