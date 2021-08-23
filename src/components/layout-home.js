import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';

// import 'sanitize.css';
import './layout.css';

const LayoutHome = ({ children }) => (
  <div className="container mx-auto">
    <main>{children}</main>
    <Footer />
  </div>
);

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutHome;
