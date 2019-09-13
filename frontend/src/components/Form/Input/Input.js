/**
 *
 * Input
 *
 */

import styled from 'styled-components';
import { media } from '../../../utils';

const Input = styled.input`
  background-color: #f7f7f7;
  border-radius: 0.35em;
  border: 2px solid transparent;
  display: block;
  outline: 0;
  width: 100%;
  height: 2.75em;
  padding: 0 0.75em;
  font-size: 11pt;

  &:focus {
    border: 2px solid #000;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.3;
  }
  :-ms-input-placeholder {
    opacity: 0.3;
  }

  ${media.desktop`
    height: 3.35em;
    font-size: 13pt;
  `}
`;

export default Input;
