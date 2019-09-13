/**
 *
 * H2
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const H2 = styled.h2`
  font-size: 2.2em;
  color: #fff;
  font-family: 'Aovel Neo';
  font-weight: 700;
  letter-spacing: 2.2px;

  ${media.tablet`
  font-size: 3em;
`}

  ${media.desktop`
    font-size: 3.8em;
  `}
`;

export default H2;
