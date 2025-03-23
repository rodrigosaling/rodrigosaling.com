import * as React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const Template = ({ children, htmlLang }) => (
  <>
    <Header htmlLang={htmlLang} />
    <main>{children}</main>
    <Footer />
  </>
);

export default Template;
