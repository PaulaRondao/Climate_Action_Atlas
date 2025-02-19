"use client";

import React from "react";
import Link from "next/link";
import { ContentInfoLink, ContentInfoContainer } from "./contentInfo.styles";
import { MainFooterLinks, SecondFooterLinks } from "../footer-links";

interface ContenteInfoProps {
  isMainFooter: boolean;
}
const ContentInfo: React.FC<ContenteInfoProps> = ({ isMainFooter }) => {
  const links = isMainFooter ? MainFooterLinks.links : SecondFooterLinks.links;

  return (
    <ContentInfoContainer>
      {links.map((link) => (
        <ContentInfoLink key={link.label} href={link.url} title={link.label}>
          {link.label}
        </ContentInfoLink>
      ))}
    </ContentInfoContainer>
  );
};

export default ContentInfo;
