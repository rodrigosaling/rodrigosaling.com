import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';

import 'sanitize.css';
import './layout.css';

const LayoutHome = ({ children }) => (
  <div className={'container'}>
    <main>{children}</main>
    <Footer/>
  </div>
);

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired
};

export default LayoutHome;
