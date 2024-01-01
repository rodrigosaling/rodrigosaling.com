import * as React from 'react';

export const HeadingTwo = ({ children, ...rest }) => (
  <h2 className="text-2xl font-bold mt-7" {...rest}>
    {children}
  </h2>
);
