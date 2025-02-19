"use client";

import React from "react";
import { TitleSection, WelcomeSection, Wrapper } from "./header.styles";
import { PageTitle } from "../../../../../types/enums/pageTitle";
import { Description } from "../../../../../types/enums/description";
import BackgroundLayout from "../background-image/BackgroundLayout";
import { Container } from "../../ui/global-styles/globalStyle.style";

interface HeaderProps {
  pageTitle?: PageTitle;
  description?: Description;
}

export default function Header({
  pageTitle = undefined,
  description = undefined,
}: HeaderProps) {
  return (
    <BackgroundLayout width={1920} height={500} src="/images/Header.png">
      <Container>
        <WelcomeSection>
          <TitleSection>
            <h1>{pageTitle}</h1>
          </TitleSection>
          <Wrapper>
            <p>{description}</p>
          </Wrapper>
        </WelcomeSection>
      </Container>
    </BackgroundLayout>
  );
}
