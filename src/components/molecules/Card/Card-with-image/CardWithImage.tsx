'use client';

import React from 'react';
import {
  CardWrapper,
  ImageContainer,
  CardContent,
  Paragraphe,
} from './cardWithImage.styles';
import { CardContainer } from '../Card-with-logo/cardWithLogo.styles';
import Image from 'next/image';
import { ActionsOption } from '@/constants';

interface CardWithImageProps {
  actionsOption: typeof ActionsOption;
}
const CardWithImage: React.FC<CardWithImageProps> = ({ actionsOption }) => (
  <>
    <Paragraphe>
      Une petite graine pour l&apos;humain, un grand pas pour l&apos;humanité
    </Paragraphe>
    <CardContainer $backgroundColorGreen>
      {actionsOption.map((action, index) => (
        <CardWrapper key={index}>
          <ImageContainer>
            <Image src={action.image} alt="" width={200} height={200}></Image>
          </ImageContainer>
          <CardContent>
            <h3>{action.title}</h3>
            <p>{action.description}</p>
          </CardContent>
        </CardWrapper>
      ))}
    </CardContainer>
    <Paragraphe $fontWeightBold>
      Rejoignez-nous pour faire partie de ce mouvement et agir ensemble,
      localement et efficacement, pour la planète.
    </Paragraphe>
  </>
);

export default CardWithImage;
