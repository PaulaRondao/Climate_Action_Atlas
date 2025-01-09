import React from 'react';

import Link from 'next/link';

import {
  ContentInfoLink,
  ContentInfoContainer,
} from './contentInfo.styles';
import { MainFooterLinks, SecondFooterLinks } from '../footer-links';

interface ContenteInfoProps {
  isMainFooter: boolean,
}
const ContentInfo = ({ isMainFooter }:ContenteInfoProps ): JSX.Element => {
  const links = isMainFooter ? MainFooterLinks.links : SecondFooterLinks.links;

  return (
  <ContentInfoContainer>
    {links.map((link) => (
      <Link key={link.label} href={link.url}>
        <ContentInfoLink title={link.label}>
          {link.label}
        </ContentInfoLink>
      </Link>
    ))}
  </ContentInfoContainer>
  )
};


export default ContentInfo;