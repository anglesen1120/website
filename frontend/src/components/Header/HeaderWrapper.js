/**
 *
 * HeaderWrapper
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const HeaderWrapper = styled.header`
  text-align: center;
  background-size: cover;
  background-color: grey;
  background-image: url('');
  background-repeat: repeat, no-repeat;
  background-attachment: scroll, fixed;
  background-position: top left, top left;

  ${media.desktop`
    width: 50%;
    height: auto;
    position: relative;
  `}
`;

export default HeaderWrapper;
