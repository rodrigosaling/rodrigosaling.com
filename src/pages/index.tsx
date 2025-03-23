import '../styles/index.css';
import SEO from '../templates/seo';
import Template from '../templates/template';
import { graphql, useStaticQuery, type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';

const IndexPage: React.FC<PageProps> = () => (
  <Template>
    <p>
      Building web stuff
      <br />
      one{' '}
      <code>
        <span>console</span>.<span>log</span>()
      </code>{' '}
      at a time.
    </p>
    <p>
      Rodrigo is a Senior Software Engineer located in{' '}
      <a
        href="https://en.wikipedia.org/wiki/Porto_Alegre"
        title="Link to the Porto Alegre Wikipedia page"
      >
        Porto Alegre
      </a>
      , working at SAP Labs Latin America.
    </p>
  </Template>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO>
    <html lang="en" />
    <title>Rodrigo Saling</title>
    <meta
      name="description"
      content="Rodrigo is a Senior Software Engineer living in Porto Alegre, Brazil."
    />
  </SEO>
);
