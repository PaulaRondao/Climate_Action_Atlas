import React from 'react'
import {
  MainFooterContainer,
  MainInfoContainer,
} from '../second-footer/secondFooter.styles';
import ContentInfo from '../content-info/ContentInfo';

const SecondFooter = (): JSX.Element => (
    <MainFooterContainer>
    <MainInfoContainer>
      <ContentInfo isMainFooter={false} />
    </MainInfoContainer>
    <p>© 2024 Paula Rondao. All rights reserved.</p>
  </MainFooterContainer>
);

export default SecondFooter;