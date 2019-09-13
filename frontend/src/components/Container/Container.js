/**
 *
 * Container
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const Container = styled.div`
  ${media.desktop`
    position: absolute;
    top: 180px;
    left: 115px;
  `}
`;

export default Container;
