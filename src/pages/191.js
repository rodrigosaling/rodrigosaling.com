import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Seo from '../components/seo';

const Numero191 = ({ data }) => (
  <Layout>
    <Seo title="191" />
    <h1>191</h1>
    <p>
      Cento e noventa e um é o número da nossa ex-casa lá em Santa Rosa. Meus
      pais construíram ela e foi onde morei com eles e meus irmãos por 18 anos.
      É um número um tanto quanto especial.
    </p>
    <p>
      Cento e noventa e um também número do telefone da Polícia Rodoviária
      Federal. E aqui está um detalhe interessante: temos várias fotos com a
      família fazendo pose em frente a essas placas. E mais uma penca de fotos
      em frente de outros lugares 191.
    </p>
    <p>
      Já me mudei três vezes, sempre para domicílios com outros números. Mas o
      191 sempre me marcou. Inclusive acho que é mais provável ocorrerem mais
      191 por aí do que 820, por exemplo.
    </p>
    <p>
      Vamos para as fotos então. Começo aqui um levantamento de lugares onde
      esse número meio mágico aparece na minha vida.
    </p>

    <figure>
      <Img
        fluid={data.abobrinha.childImageSharp.fluid}
        alt={'Uma abobrinha custando R$ 1,91'}
      />
      <figcaption>
        Fazendo compras no Zaffari, e consegui essa abobrinha custando R$ 1,91.
      </figcaption>
    </figure>

    <figure>
      <Img
        fluid={data.paviolito.childImageSharp.fluid}
        alt={'191mg de sódio em uma pacote de Paviolito sabor Queijo'}
      />
      <figcaption>
        Antigamente eu achava o Paviolito melhor que a Pastelina. Essa opinião
        nunca foi popular.
      </figcaption>
    </figure>

    <figure>
      <Img
        fluid={data.arizona.childImageSharp.fluid}
        alt={'Comanda 191 no Arizona'}
      />
      <figcaption>
        Primeira vez almoçando no Arizona. O espeto corrido não estava nos seus
        melhores dias, mas pelo menos consegui essa comanda.
      </figcaption>
    </figure>

    <figure>
      <Img
        fluid={data.pubg.childImageSharp.fluid}
        alt={'191 horas jogadas no PUBG'}
      />
      <figcaption>
        Em 31 de Agosto de 2018 eu tinha 191 horas no PUBG e acho que nenhuma
        vitória solo.
      </figcaption>
    </figure>

    <figure>
      <Img
        fluid={data.instagram.childImageSharp.fluid}
        alt={'191 seguidores no Instagram'}
      />
      <figcaption>
        Em 2 de Outubro de 2018 eu tinha 191 seguidores no Instagram. De lá para
        cá não aumentou muito não.
      </figcaption>
    </figure>
  </Layout>
);

export default Numero191;

export const query = graphql`
  fragment myImages on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  query {
    abobrinha: file(relativePath: { eq: "abobrinha_191.jpg" }) {
      ...myImages
    }
    paviolito: file(relativePath: { eq: "paviolito_191.jpg" }) {
      ...myImages
    }
    pubg: file(relativePath: { eq: "pubg_191.jpg" }) {
      ...myImages
    }
    arizona: file(relativePath: { eq: "arizona_191.jpg" }) {
      ...myImages
    }
    instagram: file(relativePath: { eq: "instagram_191.jpg" }) {
      ...myImages
    }
  }
`;
