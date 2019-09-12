import React from 'react';

import SEO from '../components/SEO/SEO';
import GlobalStyle from '../components/global-styles';
import Form from '../components/Form';
import Social from '../components/Social';
import Paragraph from '../components/Paragraph';
import Header from '../components/Header';
import Main from '../components/Main';

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Header />

    <Main>
      <Social />
      <Paragraph>
        Shoot me a mail and I'll make sure to get back to you within 24h.
      </Paragraph>
      <Form />
    </Main>

    <GlobalStyle />
  </>
);

export default IndexPage;
