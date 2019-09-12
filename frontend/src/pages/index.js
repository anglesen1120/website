import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/SEO/SEO';
import GlobalStyle from '../components/global-styles';
import Form from '../components/Form';
import Social from '../components/Social';
import Paragraph from '../components/Paragraph';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Social />
    <Paragraph>
      Shoot me a mail and I'll make sure to get back to you within 24h.
    </Paragraph>
    <Form />

    <Link to="/page-2/">Go to page 2</Link>

    <GlobalStyle />
  </Layout>
);

export default IndexPage;
