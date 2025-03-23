import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Icon from '../images/favicon-r.svg';

type SEOProps = {
  children: React.ReactNode;
};

export default function SEO({ children }: SEOProps): React.JSX.Element {
  const {site: gatsbyConfig} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <html lang="en" />
      <title>{gatsbyConfig.siteMetadata.title}</title>
      <meta
        name="description"
        content="Rodrigo is a Senior Software Engineer living in Porto Alegre, Brazil."
      />
      <link rel="icon" type="image/svg" href={Icon} />
      {children}
    </>
  );
}
