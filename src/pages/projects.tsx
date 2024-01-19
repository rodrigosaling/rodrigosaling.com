import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Template from '../templates/template';
import { HeadingOne } from '../components/heading-one';
import { HeadingTwo } from '../components/heading-two';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Template>
      <HeadingOne>Projects</HeadingOne>

      <HeadingTwo>Gerador de Senhas (Password Generator)</HeadingTwo>

      <p>
        An easy-to-remember password generator that uses Brazilian Portuguese
        words. Still a working in progress. Uses SvelteKit.
      </p>
      <p>
        You can{' '}
        <a href="https://gerador-senhas.rodrigosaling.com/">check it online</a>{' '}
        or go directly to{' '}
        <a href="https://github.com/rodrigosaling/gerador-senhas">
          the repository
        </a>
        .
      </p>

      <HeadingTwo>Other Projects</HeadingTwo>
      <p>
        You can check{' '}
        <a
          href="https://github.com/rodrigosaling"
          className="underline hover:no-underline hover:text-orange-400"
        >
          my GitHub profile
        </a>{' '}
        in the meantime.
      </p>
    </Template>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects - Rodrigo Saling</title>;
