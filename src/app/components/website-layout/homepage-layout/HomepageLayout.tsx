"use client";

import React from "react";
import HeaderLayout from "../header-layout/HeaderLayout";
import { PageTitle } from "../../../../../types/enums/pageTitle";
import { Description } from "../../../../../types/enums/description";
import MainLayout from "../main-layout/MainLayout";
import Footer from "../../modules/footer/Footer";
import CardSection from "../card/CardSection";
import { InitiativeOptions } from "../../../../../types/enums/initiative";
import { Container } from "../../ui/global-styles/globalStyle.style";
import BackgroundLayout from "../background-image/BackgroundLayout";
import Wrapper from "../wrapper/Wrapper";
import { TitleSection } from "../header/header.styles";
import Button from "../../elements/dropdown-button/button/Button";
import { ButtonContainer } from "./homepageLayout.styles";

interface HomepageLayoutProps {
  title: string;
  canonical?: string;
  pageTitle?: PageTitle;
  description?: Description;
  padding?: string;
  marginbottom?: string;
}

export default function HomepageLayout({
  title,
  canonical = "",
  pageTitle = undefined,
  description = undefined,
  padding = "",
  marginbottom = "",
}: HomepageLayoutProps) {
  return (
    <>
      <HeaderLayout title={title} canonical={canonical}></HeaderLayout>
      <main>
        <MainLayout
          pageTitle={pageTitle}
          description={description}
        ></MainLayout>

        <CardSection initiatives={InitiativeOptions}>
          <h2>Ce que nous pouvons faire</h2>
        </CardSection>

        <Container>
          <BackgroundLayout width={1920} height={700} src="/images/Header.png">
            <Wrapper>
              <TitleSection padding="35px 15px" marginbottom="40px">
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
          </BackgroundLayout>
        </Container>
      </main>
      <Footer />
    </>
  );
}
