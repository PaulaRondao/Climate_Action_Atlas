'use client';

import React from 'react';
import { PageTitle } from '../../../../types/enums/pageTitle';
import { Description } from '../../../../types/enums/description';
import Footer from '../../../components/public-pages/footer/Footer';
import CardSection from '../../../ui/card/CardSection';
import { InitiativeOptions } from '../../../../types/enums/initiative';
import { Container } from '../../../ui/globalStyle.styles';
import Wrapper from '../../../ui/layout/wrapper/Wrapper';
import { TitleSection } from '../../../ui/layout/header/headerPublicPage.styles';
import Button from '../../../ui/button/Button';
import { ButtonContainer } from '../../../ui/layout/homepage/homepageLayout.styles';
import AppHead from '../../../components/public-pages/appHead/AppHead';
import NavBar from '../../../components/public-pages/navbar/Navbar';
import HeaderPublicPage from '../../../ui/layout/header/HeaderPublicPage';


export default function HomepageLayout({
}) {
  return (
    <>
      <AppHead title="Homepage, Climate Action Atlas" canonical=""></AppHead>
      <NavBar/>
      <main>
        <HeaderPublicPage
          pageTitle={PageTitle.MovementForChange}
          description={Description.ClimatActionTitle}
        ></HeaderPublicPage>

        <CardSection initiatives={InitiativeOptions}>
          <h2>Ce que nous pouvons faire</h2>
        </CardSection>

        <Container>
            <Wrapper>
              <TitleSection>
                <h3>Votre engagement</h3>
                <hr></hr>
              </TitleSection>
              <p>
                L’engagement de chacun est essentiel pour préserver notre
                planète. Agissez dès aujourd&apos;hui pour un futur plus vert.
              </p>
              <ButtonContainer>
                <Button>Explorer</Button>
              </ButtonContainer>
            </Wrapper>
        </Container>
      </main>
      <Footer />
    </>
  );
}