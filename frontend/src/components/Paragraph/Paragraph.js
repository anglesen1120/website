/**
 *
 * Paragraph
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const Paragraph = styled.p`
  font-weight: 300;

  ${media.desktop`
    font-size: 15pt;
  `}
`;

export default Paragraph;
