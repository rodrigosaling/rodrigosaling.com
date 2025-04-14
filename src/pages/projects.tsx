import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import { HeadingOne } from '../components/heading-one';
import { HeadingTwo } from '../components/heading-two';
import SEO from '../templates/seo';
import Template from '../templates/template';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Template>
      <HeadingOne>Projects</HeadingOne>

      <p style={{ marginBottom: '2rem' }}>
        A list of personal/side/pet projects that are at different levels of
        development.
      </p>

      <article style={{ marginBottom: '2rem' }}>
        <HeadingTwo>
          <a href="https://gerador-senhas.rodrigosaling.com/">
            Gerador de Senhas (Password Generator)
          </a>
        </HeadingTwo>

        <p>
          An easy-to-remember password generator that uses Brazilian Portuguese
          words. A working in progress. Uses SvelteKit.
        </p>
        <p>
          You can{' '}
          <a href="https://gerador-senhas.rodrigosaling.com/">try it online</a>{' '}
          or check the code in{' '}
          <a href="https://github.com/rodrigosaling/gerador-senhas">
            the repository
          </a>
          .
        </p>
      </article>

      <aside>
        <HeadingTwo>Other Projects</HeadingTwo>
        <p>
          You can check{' '}
          <a href="https://github.com/rodrigosaling">my GitHub profile</a> in
          the meantime.
        </p>
      </aside>
    </Template>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => (
  <SEO>
    <title id="title">Projects - Rodrigo Saling</title>
  </SEO>
);
