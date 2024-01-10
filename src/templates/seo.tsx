import * as React from 'react';
import type { HeadFC } from 'gatsby';

import Icon from '../images/upside-down-all-paperclip-logo.svg';

type SEOProps = {
  children: React.ReactNode;
};

export default function SEO({ children }: SEOProps): React.JSX.Element {
  return (
    <>
      <html lang="en" />
      <title>Rodrigo Saling</title>
      <meta
        name="description"
        content="Rodrigo is a Senior Software Engineer living in Porto Alegre, Brazil."
      />
      <link rel="icon" type="image/svg" href={Icon} />
      {children}
    </>
  );
}
