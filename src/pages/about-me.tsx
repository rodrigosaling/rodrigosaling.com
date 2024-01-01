import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Template from '../templates/template';
import { HeadingOne } from '../components/heading-one';
import { HeadingTwo } from '../components/heading-two';

const AboutMePage: React.FC<PageProps> = () => {
  return (
    <Template>
      <>
        <HeadingOne>About me</HeadingOne>

        <p>Under construction.</p>

        <HeadingTwo id="uses">Uses</HeadingTwo>
        <p>
          I am using VSCode after more than 10 years as a paid WebStorm user.
        </p>

        <HeadingTwo id="whats-up-with-the-logo">
          What's up with the logo?
        </HeadingTwo>
        <p>
          The logo for this site is an upside down triangle paperclip that
          resembles an{' '}
          <a href="https://en.wikipedia.org/wiki/Turned_A">
            upside down capital A
          </a>
          , which is the symbol for{' '}
          <a href="https://en.wikipedia.org/wiki/Universal_quantification">
            universal quantification
          </a>
          , or "for all" in logic and mathematics. And the paperclip as a homage
          to MacGyver, the GOAT jack of all trades.{' '}
        </p>
      </>
    </Template>
  );
};

export default AboutMePage;

export const Head: HeadFC = () => <title>About me - Rodrigo Saling</title>;
