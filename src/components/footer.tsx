import styled from 'styled-components';
import * as React from 'react';

export default function Footer() {
  const isBlog = window.location.pathname.includes('/blog/');

  const Footer = styled.footer({
    marginTop: '2rem',
  });

  if (isBlog) {
    return (
      <Footer>
        <p>
          Também estou aqui:{' '}
          <a href="https://github.com/rodrigosaling">GitHub</a> e{' '}
          <a href="https://www.linkedin.com/in/rodrigosaling/">LinkedIn</a>.
        </p>
      </Footer>
    );
  }

  return (
    <Footer>
      <p>
        Find me on these other places:{' '}
        <a href="https://github.com/rodrigosaling">GitHub</a> and{' '}
        <a href="https://www.linkedin.com/in/rodrigosaling/">LinkedIn</a>.
      </p>
    </Footer>
  );
}
