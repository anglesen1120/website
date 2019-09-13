/**
 *
 * TitleWrapper
 *
 */

import styled from 'styled-components';
import { media } from '../../../utils';

const TitleWrapper = styled.div`
  padding: 50px 25px;

  ${media.desktop`
    position: absolute;
    padding: 0;
    top: 190px;
    right: 115px;
    display: inline-block;
    text-align: right;
  `}
`;

export default TitleWrapper;
