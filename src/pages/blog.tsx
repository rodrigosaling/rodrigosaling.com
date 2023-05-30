import * as React from 'react';
import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const BlogPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          childrenMdx: {
            elemMatch: { frontmatter: { published: { eq: true } } }
          }
        }
        sort: { childrenMdx: { frontmatter: { date: DESC } } }
      ) {
        totalCount
        nodes {
          childMdx {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  return (
    <div className="font-serif border-t-8 border-t-black bg-amber-50/60 h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="border-b-2 border-b-black pt-14 pb-10">
          <h1 className="text-5xl font-bold  text-center">Blog</h1>
        </header>

        <main className="">
          {!data.allFile.nodes.length && <p>Nada aqui ainda.</p>}

          {data.allFile.nodes.map((node) => (
            <article key={node.childMdx.id}>
              <h2>
                <Link to={`${node.childMdx.fields.slug}`}>
                  {node.childMdx.frontmatter.title}
                </Link>
              </h2>

              <p>Publicado em {node.childMdx.frontmatter.date}</p>
            </article>
          ))}
        </main>

        <footer className=""></footer>
      </div>
    </div>
  );
};

export default BlogPage;

export const Head: HeadFC = () => (
  <>
    <html lang="pt-br" />
    <title>Blog - Rodrigo Saling</title>
  </>
);
