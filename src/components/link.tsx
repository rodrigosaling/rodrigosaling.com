import * as React from 'react';
import { Link as RouterLink } from 'gatsby';

const Link = ({ to, children }) => (
  <RouterLink to={to}>
    {children}
  </RouterLink>
);

export default Link;
