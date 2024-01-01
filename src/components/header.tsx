import * as React from 'react';
import type { PageProps } from 'gatsby';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

export default function Header(): React.FC<PageProps> {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlog = location.pathname.includes('/blog/');

  const SiteName = ({ children }) => {
    const Component = isHome ? 'h1' : 'div';
    return <Component className="font-bold">{children}</Component>;
  };

  return (
    <header className="py-3 border-b-neutral-300 border-b mt-5 flex justify-between">
      <SiteName>
        <Link to="/" className="underline hover:no-underline">
          Rodrigo Saling
        </Link>
      </SiteName>

      <nav>
        <menu className="flex gap-6">
          <li>
            <Link to="/about-me" className="underline hover:no-underline">
              {isBlog ? 'Sobre mim' : 'About me'}
            </Link>
          </li>
          <li>
            <Link to="/projects" className="underline hover:no-underline">
              {isBlog ? 'Projetos' : 'Projects'}
            </Link>
          </li>
          <li>
            <Link to="/blog" className="underline hover:no-underline">
              Blog
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
}
