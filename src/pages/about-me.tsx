import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import { HeadingOne } from '../components/heading-one';
import SEO from '../templates/seo';
import Template from '../templates/template';

const AboutMePage: React.FC<PageProps> = () => {
  return (
    <Template>
      <HeadingOne>About me</HeadingOne>

      <p>Under construction.</p>
    </Template>
  );
};

export default AboutMePage;

export const Head: HeadFC = () => (
  <SEO>
    <title>About me - Rodrigo Saling</title>
  </SEO>
);
