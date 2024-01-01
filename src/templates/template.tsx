import * as React from 'react';
import type { HeadFC } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

const Template = ({ children }) => (
  <div className="mx-auto max-w-3xl px-4">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Rodrigo Saling</title>
    <meta
      name="description"
      content="Rodrigo is a Senior Software Engineer living in Porto Alegre, Brazil."
    />
    <link rel="icon" type="image/svg" href={Icon}></link>
  </>
);

export default Template;
