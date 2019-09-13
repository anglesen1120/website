import React from 'react';

import SEO from '../components/SEO/SEO';
import GlobalStyle from '../components/global-styles';
import Form from '../components/Form';
import Social from '../components/Social';
import Paragraph from '../components/Paragraph';
import Header from '../components/Header';
import Main from '../components/Main';
import Layout from '../components/Layout';
import Container from '../components/Container';

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Layout>
      <Header />

      <Main>
        <Container>
          <Social />
          <Paragraph>
            Shoot me a mail and I'll make sure to get back to you within 24h.
          </Paragraph>
          <Form />
        </Container>
      </Main>
    </Layout>

    <GlobalStyle />
  </>
);

export default IndexPage;
