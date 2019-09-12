/**
 *
 * Input
 *
 */

import styled from 'styled-components';
import PRIMARY_GREY from '../../../utils/colors';

const Input = styled.input`
  background-color: #f7f7f7;
  border-radius: 0.35em;
  border: 2px solid transparent;
  display: block;
  outline: 0;
  width: 100%;
  height: 2.75em;
  padding: 0 0.75em;

  &:focus {
    border: 2px solid #000;
  }
`;

export default Input;
