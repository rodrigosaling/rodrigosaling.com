import * as React from 'react';

export default function Footer() {
  const isBlog = window.location.pathname.includes('/blog/');

  if (isBlog) {
    return (
      <footer style={{ marginTop: '2rem' }}>
        <p>
          Também estou aqui:{' '}
          <a href="https://github.com/rodrigosaling">GitHub</a> e{' '}
          <a href="https://www.linkedin.com/in/rodrigosaling/">LinkedIn</a>.
        </p>
      </footer>
    );
  }

  return (
    <footer style={{ marginTop: '2rem' }}>
      <p>
        Find me on these other places:{' '}
        <a href="https://github.com/rodrigosaling">GitHub</a> and{' '}
        <a href="https://www.linkedin.com/in/rodrigosaling/">LinkedIn</a>.
      </p>
    </footer>
  );
}
