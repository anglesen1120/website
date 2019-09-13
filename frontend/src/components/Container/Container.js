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
    left: 65px;
    max-width: 600px;
  `}
`;

export default Container;
