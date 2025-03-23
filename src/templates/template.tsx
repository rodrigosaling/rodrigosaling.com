import * as React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const Template = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Template;
