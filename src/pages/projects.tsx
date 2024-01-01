import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Link } from 'gatsby';
import Template from '../templates/template';
import { HeadingOne } from '../components/heading-one';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Template>
      <>
        <HeadingOne>Projects</HeadingOne>
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
      </>
    </Template>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects - Rodrigo Saling</title>;
