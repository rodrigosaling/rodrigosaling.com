import * as React from 'react';
import type { PageProps } from 'gatsby';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

export default function Header(): React.FC<PageProps> {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlog = location.pathname.includes('/blog/');

  const SiteName = ({ children }: { children: React.ReactNode }) => {
    const Component = isHome ? 'h1' : 'div';
    return <Component>{children}</Component>;
  };

  return (
    <header>
      <SiteName>
        <Link to="/">Rodrigo Saling</Link>
      </SiteName>

      <nav>
        <menu>
          <li>
            <Link to="/about-me">{isBlog ? 'Sobre mim' : 'About me'}</Link>
          </li>
          <li>
            <Link to="/projects">{isBlog ? 'Projetos' : 'Projects'}</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
}
