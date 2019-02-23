import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/footer';

import '../../node_modules/sanitize.css/sanitize.css';
import './index.css';

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
