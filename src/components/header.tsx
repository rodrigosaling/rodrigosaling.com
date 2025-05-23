import * as React from 'react';
import type { PageProps } from 'gatsby';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Flex = ({
  justifyContent = 'space-between',
  alignItems = 'center',
  children,
}: {
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode;
}) => {
  return (
    <div style={{ display: 'flex', justifyContent, alignItems }}>
      {children}
    </div>
  );
};

export default function Header(): React.FC<PageProps> {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlog = location.pathname.includes('/blog/');

  const SiteName = ({ children }: { children: React.ReactNode }) => {
    const Component = isHome ? 'h1' : 'div';
    return <Component>{children}</Component>;
  };

  return (
    <header style={{ marginBottom: '2rem' }}>
      <Flex>
        <SiteName>
          <Link to="/">Rodrigo Saling</Link>
        </SiteName>

        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
            <li>
              <Link to="/about-me">{isBlog ? 'Sobre mim' : 'About me'}</Link>
            </li>
            <li>
              <Link to="/projects">{isBlog ? 'Projetos' : 'Projects'}</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </Flex>
    </header>
  );
}
