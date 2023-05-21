import * as React from 'react';

function IndexPage() {
  return (
    <main>
      <h1>Hello!</h1>
      <p>
        My name is Rodrigo, a software engineer working at League, living in
        Porto Alegre, Brazil.
      </p>
    </main>
  );
}

export default IndexPage;

export const Head = () => <title>Rodrigo Saling</title>;
