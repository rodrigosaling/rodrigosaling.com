import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export default function Link({ children, ...props }) {
  return (
    <GatsbyLink
      className="text-sky-600 underline hover:text-sky-400 visited:text-violet-800"
      {...props}
    >
      {children}
    </GatsbyLink>
  );
}
