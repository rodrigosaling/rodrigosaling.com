import React from 'react';
import { Link } from 'gatsby';

import LayoutHome from '../components/layout-home';
import SEO from '../components/seo';

const IndexPage = () => (
  <LayoutHome>
    <SEO title="Olá!" />
    <h1>Olá!</h1>
    <p>
      Meu nome é Rodrigo Saling, sou desenvolvedor front-end e moro em Porto
      Alegre, Brasil.
    </p>
    <p>
      No futuro você poderá me conhecer melhor e ver meus perfis espalhados
      pela internet accessando a página <Link to="/sobre-mim/">Sobre mim</Link>.
      Um dia vou colocar os links para as minhas playlists do Spotify lá.
    </p>
    <p>
      Você também pode ver meus <Link to="/projetos/">projetos pessoais</Link>.
    </p>
    <p>
      Mas se você está aqui pela bobajada, acesse o meu{' '}
      <Link to="/blog/">blog</Link>.
    </p>
    <p>Tenha um ótimo dia!</p>
  </LayoutHome>
);

export default IndexPage;
