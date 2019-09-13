/**
 *
 * Button
 *
 */

import styled from 'styled-components';
import { media } from '../../../utils';

const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  border-radius: 0.35em;
  border: 2px solid #efefef;
  cursor: pointer;
  width: 100%;
  height: 44px;
  font-size: 11pt;

  &:hover {
    border: 2px solid #000;
    transition: opacity 0.2s ease-in-out;
  }

  ${media.tablet`
    width: 150px;
  `}
`;

export default Button;
