import * as React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const Template = ({ children }) => (
  <div className="mx-auto max-w-3xl px-4">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Template;
