'use client';

import React from 'react';
import { InitiativeOptions, ActionsOption } from '@/types/enums/enums';
import { CardWithLogo } from '@/components/molecules';
import Image from 'next/image';
import {
  EngagementSection,
  HeroContent,
  HeroSection,
  ImageWrapper,
  Section,
  TitleSection,
} from './homePage.styles';
import CardWithImage from '@/components/molecules/Card/Card-with-image/CardWithImage';
import {
  ButtonContainer,
  LinkWithIcon,
  StyledLink,
} from '@/components/atoms/Button/button.styles';
import { usePathname } from 'next/navigation';
import { Footer } from '@/components/organisms';

export default function HomePage() {
  const pathname = usePathname();
  return (
    <>
      <main>
        <HeroSection>
          <ImageWrapper>
            <Image
              src="/images/forest-sky-view.png"
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
            <h1>
              Un mouvement pour <span>changer</span>
            </h1>
            <p>
              Climate Action Atlas est un mouvement collectif engagé pour une
              action rapide, juste et inclusive face aux défis climatiques,
              sociaux et sociétaux qui impactent nos territoires.
            </p>
          </HeroContent>
        </HeroSection>

        <Section $backgroundColorGreen $colorBeige>
          <TitleSection
            $fontSize="5rem"
            $fontSizeText="3rem"
            $lineHeight="4.5rem"
            $lineHeightText="2.5rem"
          >
            <h2>Ce que propose</h2>
            <p> climate atlas action</p>
          </TitleSection>
          <CardWithImage actionsOption={ActionsOption}></CardWithImage>
        </Section>

        <Section>
          <TitleSection>
            <h2>Découvrez les types d&apos;impacts</h2>
          </TitleSection>
          <CardWithLogo initiatives={InitiativeOptions}></CardWithLogo>
        </Section>

        <Section>
          <EngagementSection>
            <TitleSection
              $gap="16px"
              $textAlign="left"
              $textAlignHeading="left"
            >
              <h2>Notre carte intéractive</h2>
              <hr />
              <p>
                Trouvez et rejoignez facilement des projets concrets et
                inspirants autour de vous.
              </p>
            </TitleSection>
            <ButtonContainer>
              <StyledLink
                href="/carte"
                aria-current={pathname === '/carte' ? 'page' : undefined}
                $backgroundColor="#F0EDEB"
                $color="#072A32"
                $backgroundColorHover="#072A32"
                $colorHover="#F0EDEB"
                $fontFamily
              >
                Explorer la carte
              </StyledLink>
              <StyledLink
                href="/liste"
                aria-current={pathname === '/liste' ? 'page' : undefined}
                $backgroundColor="#F0EDEB"
                $color="#072A32"
                $backgroundColorHover="#072A32"
                $colorHover="#F0EDEB"
                $fontFamily
              >
                Regarder la liste
              </StyledLink>
            </ButtonContainer>
          </EngagementSection>
        </Section>

        <Section>
          <EngagementSection>
            <TitleSection $gap="16px">
              <h2>Votre engagement</h2>
              <hr />
            </TitleSection>
            <p>
              L&apos;engagement de chacun est essentiel pour préserver notre
              planète. Agissez dès aujourd&apos;hui pour un futur plus vert. En
              vous inscrivant, vous pourrez ajouter une initiative.
            </p>
            <ButtonContainer>
              <StyledLink
                href="/inscription"
                aria-current={pathname === '/inscription' ? 'page' : undefined}
              >
                Inscrivez-vous
              </StyledLink>
            </ButtonContainer>
          </EngagementSection>
        </Section>
      </main>
      <Footer />
    </>
  );
}
