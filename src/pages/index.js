import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Olá!" />
    <h1 className="text-6xl">Olá!</h1>
    <p>
      Meu nome é Rodrigo Saling, sou desenvolvedor front-end e moro em Porto
      Alegre, Brasil.
    </p>
    <p>
      No futuro você poderá me conhecer melhor e ver meus perfis espalhados pela
      internet acessando a página <Link to="/sobre-mim/">Sobre mim</Link>.
    </p>
    <p>
      Você também pode ver meus <Link to="/projetos/">projetos pessoais</Link>{' '}
      (nenhum no momento).
    </p>
    <p>
      Mas se você está aqui pela bobajada, acesse o meu{' '}
      <Link to="/blog/">blog</Link>.
    </p>
    <p>Tenha um ótimo dia!</p>
  </Layout>
);

export default IndexPage;
