'use client';

import React from 'react';
import {
  ContactInfo,
  ContentInfoContainer,
} from './contentInfo.styles';
import { MainFooterLinks, SecondFooterLinks } from '../footer-links';

interface ContenteInfoProps {
  isMainFooter: boolean;
}
const ContentInfo: React.FC<ContenteInfoProps> = ({ isMainFooter }) => {
  const links = isMainFooter ? MainFooterLinks.links : SecondFooterLinks.links;

  return (
    <ContentInfoContainer>
      {links.map((link) => (
        <ContactInfo key={link.label} href={link.url} title={link.label}>
          {link.label}
        </ContactInfo>
      ))}
    </ContentInfoContainer>
  );
};

export default ContentInfo;
