/**
 *
 * HeaderWrapper
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const HeaderWrapper = styled.header`
  text-align: center;
  background-size: auto, cover;
  background-color: grey;

  ${media.desktop`
    width: 50%;
    height: auto;
    position: relative;
  `}
`;

export default HeaderWrapper;
