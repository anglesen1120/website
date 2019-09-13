/**
 *
 * Layout
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const Layout = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: center;
    height: 100vh;
  `}
`;

export default Layout;
