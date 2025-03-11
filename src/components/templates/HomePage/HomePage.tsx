'use client';

import React from 'react';
import { PageTitle, Description, InitiativeOptions } from '@/constants/enums';
import { Navigation } from '@/components/organisms';
import { CardSection } from '@/components/molecules';
import Image from 'next/image';
import {
  ButtonContainer,
  CardGrid,
  EngagementSection,
  HeroContent,
  HeroSection,
  ImageWrapper,
  Section,
  SectionTitle,
  TitleSection,
} from './homePage.styles';

export default function HomePage() {
  return (
    <>
      <Navigation
        pageTitle={PageTitle.MovementForChange}
        description={Description.ClimatActionTitle}
      />
      <main>
        <HeroSection>
          <ImageWrapper>
            <Image
              src="/images/Header.png"
              alt="Header background"
              width={1920}
              height={1080}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.7,
              }}
              priority
            />
          </ImageWrapper>
          <HeroContent>
            <h1>Un mouvement pour changer</h1>
            <p>
              Climate Action Atlas est un mouvement actif. Nous partageons le
              désir d&apos;une action urgente et juste pour répondre aux
              urgences climatiques et naturelles.
            </p>
          </HeroContent>
        </HeroSection>
        <TitleSection>
          <h2>Découvrez les initiatives</h2>
          <p>Explorez les différentes initiatives pour le climat</p>
        </TitleSection>

        <Section>
          <CardSection initiatives={InitiativeOptions}>
            <h2>Ce que nous pouvons faire</h2>
          </CardSection>
        </Section>

        <Section>
          <EngagementSection>
            <TitleSection>
              <h3>Votre engagement</h3>
              <hr />
            </TitleSection>
            <p>
              L&apos;engagement de chacun est essentiel pour préserver notre
              planète. Agissez dès aujourd&apos;hui pour un futur plus vert.
            </p>
            <ButtonContainer>
              <button>Explorer</button>
            </ButtonContainer>
          </EngagementSection>
        </Section>
      </main>
    </>
  );
}
