import { Link as RouterLink } from 'gatsby';
import * as React from 'react';

const Link = ({ to, children }) => <RouterLink to={to}>{children}</RouterLink>;

export default Link;
