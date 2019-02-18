import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <Link to={'/blog/pelvis-o-desiludido'}>Pélvis, O Desiludido</Link>
  </Layout>
);

export default Blog;
