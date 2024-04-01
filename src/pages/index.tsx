import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import SEO from '../templates/seo';
import '../styles/index.css';

import Template from '../templates/template';

const IndexPage: React.FC<PageProps> = () => (
  <Template>
    <p className="text-4xl font-bold mt-16">
      Building web stuff
      <br />
      one{' '}
      <code className="font-mono text-3xl bg-neutral-200 p-1 rounded-md">
        <span>console</span>.<span>log</span>()
      </code>{' '}
      at a time.
    </p>
    <p className="mt-12 mb-16">
      Rodrigo is a Senior Software Engineer located in{' '}
      <a
        href="https://en.wikipedia.org/wiki/Porto_Alegre"
        className="rio-grande-do-sul underline"
        title="Link to the Porto Alegre Wikipedia page"
      >
        Porto Alegre
      </a>
      , working at ADP Brazil Labs.
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
