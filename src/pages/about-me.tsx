import * as React from 'react';
import { graphql, useStaticQuery, type HeadFC, type PageProps } from 'gatsby';
import Template from '../templates/template';
import { HeadingOne } from '../components/heading-one';
import SEO from '../templates/seo';

const AboutMePage: React.FC<PageProps> = () => {
  return (
    <Template>
        <HeadingOne>About me</HeadingOne>

        <p>Under construction.</p>
    </Template>
  );
};

export default AboutMePage;

export const Head: HeadFC = () => {
  const {site: gatsbyConfig} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  
  return <SEO><title>About me - {gatsbyConfig.siteMetadata.title}</title></SEO>;
};
