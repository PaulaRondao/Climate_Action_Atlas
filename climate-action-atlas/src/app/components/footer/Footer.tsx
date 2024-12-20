import React from 'react';
import { FooterContainer, MainFooterWrapper, SecondFooterWrapper } from './footer.styles';
import MainFooter from './main-footer/MainFooter';
import SecondFooter from './second-footer/SecondFooter';

const Footer = (): JSX.Element => (
  <FooterContainer role="contentinfo">
    <MainFooterWrapper />
      <MainFooter />
    <MainFooterWrapper />
    <SecondFooterWrapper>
      <SecondFooter /> 
    </SecondFooterWrapper>
  </FooterContainer>
);

export default Footer;
