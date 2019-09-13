/**
 *
 * H2
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const H2 = styled.h2`
  font-size: 3em;
  color: #fff;
  font-family: 'Aovel Neo';
  font-weight: 700;
  letter-spacing: -0.5px;

  ${media.desktop`
    font-size: 3.8em;
  `}
`;

export default H2;
