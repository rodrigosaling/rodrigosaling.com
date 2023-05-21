import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from './footer';
import Header from './header';
import './layout.css';
function Layout({ pageLang, pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: pageLang,
          class: 'p-5 bg-slate-50 text-slate-700',
        }}
      >
        <title>
          {pageTitle && `${pageTitle} - `}
          {siteTitle}
        </title>
      </Helmet>
      <Header siteTitle={siteTitle} />
      <main className="container mt-10">{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  pageLang: PropTypes.node,
  pageTitle: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  pageLang: 'en',
  pageTitle: '',
};

export default Layout;
