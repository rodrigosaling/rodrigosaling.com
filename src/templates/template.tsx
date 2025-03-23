import Footer from '../components/footer';
import Header from '../components/header';
import * as React from 'react';

const Template = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Template;
