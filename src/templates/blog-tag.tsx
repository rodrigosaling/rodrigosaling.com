import React from 'react';
import { graphql, HeadFC, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Template from './template';
import { HeadingOne } from '../components/heading-one';
import SEO from './seo';

const shortcodes = { Link }; // Provide common components here

export default function BlogTag({ data, name, contentfulId }) {
  const post = data.contentfulBlogPost;
  const publishedDate = new Date(post.createdAt);
  // const content = data.contentfulBlogPost.content.childMarkdownRemark.html;

  return (
    <Template htmlLang="pt-br">
      <>
        <HeadingOne>Tag: {name}</HeadingOne>
        <p>
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

        <div>
          <Link to="/blog">Voltar para o Blog</Link>
        </div>
      </>
    </Template>
  );
}

export const query = graphql`
  query BlogPostsByTag($contentfulId: String!) {
    allContentfulBlogPost(
      filter: {
        metadata: {
          tags: { elemMatch: { contentful_id: { eq: $contentfulId } } }
        }
      }
    ) {
      nodes {
        id
        title
        slug
        createdAt
        updatedAt
        node_locale
        summary
      }
    }
  }
`;

export const Head: HeadFC = ({ data }) => {
  // const post = data.contentfulBlogPost;

  return (
    <SEO>
      <html lang="pt-br" />
      <title>{data.name} - Blog - Rodrigo Saling</title>
      <meta
        name="description"
        content="Rodrigo é um Senior Software Engineer que mora em Porto Alegre, Brasil."
      ></meta>
    </SEO>
  );
};
