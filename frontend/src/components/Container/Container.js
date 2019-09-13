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
    top: 145px;
    left: 100px;
  `}
`;

export default Container;
