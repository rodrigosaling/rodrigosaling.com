import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import SEO from '../templates/seo';
import '../styles/index.css';

import Template from '../templates/template';

const IndexPage: React.FC<PageProps> = () => (
  <Template>
    <p>
      Building web stuff one{' '}
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
