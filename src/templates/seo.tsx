import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Icon from '../images/favicon-r.svg';

type SEOProps = {
  children?: React.ReactNode;
};

export default function SEO({ children }: SEOProps): React.JSX.Element {
  const { site: gatsbyConfig } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <html lang="en" id="html" />
      <title id="title">{gatsbyConfig.siteMetadata.title}</title>
      <meta
        id="description"
        name="description"
        content={gatsbyConfig.siteMetadata.description}
      />
      <link id="favicon" rel="icon" type="image/svg" href={Icon} />
      {children}
    </>
  );
}
