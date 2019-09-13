/**
 *
 * H1
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const H1 = styled.h1`
  line-height: 1.75em;
  font-size: 1em;
  font-family: 'Aovel Neo';
  letter-spacing: 1.75px;
  color: rgba(255, 255, 255, 0.75);
  font-weight: bold;

  ${media.tablet`
    font-size: 1.35em;
  `}

  ${media.desktop`
    font-size: 1.5em;
  `}
`;

export default H1;
