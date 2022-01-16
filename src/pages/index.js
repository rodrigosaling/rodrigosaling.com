import * as React from 'react';

import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <h2 className="font-bold">Welcome!</h2>
      <p className="mt-2">
        Hello! Nice to see you here!{' '}
        <span role="img" aria-label="Hand waving emoji">
          👋
        </span>
      </p>
      <p className="mt-2">
        I am building my site one page at a time, so right now there aren't much
        content around. Things will be gradually published during the next
        weeks.
      </p>
    </Layout>
  );
}

export default IndexPage;
