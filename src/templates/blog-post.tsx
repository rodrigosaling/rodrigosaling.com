import React from 'react';
import { graphql, HeadFC, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { HeadingOne } from '../components/heading-one';
import SEO from './seo';
import Template from './template';

const shortcodes = { Link }; // Provide common components here

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost;
  const publishedDate = new Date(post.createdAt);
  const content = data.contentfulBlogPost.content.childMarkdownRemark.html;

  return (
    <Template>
      <>
        <HeadingOne>{post.title}</HeadingOne>

        <p style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
          Publicado em{' '}
          <time dateTime={publishedDate.toUTCString()}>
            {publishedDate.toLocaleDateString('pt-br', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
          .
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />

        <div style={{ marginTop: '2rem' }}>
          <Link to="/blog">Voltar para o Blog</Link>
        </div>
      </>
    </Template>
  );
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      createdAt
      updatedAt
      node_locale
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => {
  const post = data.contentfulBlogPost;

  return (
    <SEO>
      <html id="html" lang="pt-br" />
      <title id="title">{post.title} - Blog - Rodrigo Saling</title>
      <meta
        id="description"
        name="description"
        content="Rodrigo é um Senior Software Engineer que mora em Porto Alegre, Brasil."
      ></meta>
    </SEO>
  );
};
