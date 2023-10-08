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
        sort: { childrenMdx: { frontmatter: { publishedDate: DESC } } }
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
              publishedDate
            }
          }
        }
      }
    }
  `);

  return (
    <div className="font-serif border-t-8 border-t-black bg-amber-50/60 h-screen">
      <div className="max-w-3xl mx-auto px-4 lg:px-0">
        <header className="border-b-2 border-b-black pt-14 pb-10 relative">
          <h1 className="text-5xl font-bold text-center">Blog</h1>

          <nav className="absolute top-0 left-0 w-full">
            <ul className="flex justify-between">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-me">Sobre mim</Link>
              </li>
              <li>
                <Link to="/projects">Projetos</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="">
          {!data.allFile.nodes.length && <p>Nada aqui ainda.</p>}

          {data.allFile.nodes.map((node) => (
            <article key={node.childMdx.id}>
              <h2 className="text-4xl font-bold">
                <Link to={`${node.childMdx.fields.slug}`}>
                  {node.childMdx.frontmatter.title}
                </Link>
              </h2>

              <p>Publicado em {node.childMdx.frontmatter.publishedDate}</p>
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
