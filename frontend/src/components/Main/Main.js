/**
 *
 * Main
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const Main = styled.main`
  padding: 2em;

  ${media.tablet`
    padding: 5em 4em;
  `}

  ${media.desktop`
    width: 50%;
    height: auto;
    position: relative;
  `}
`;

export default Main;
