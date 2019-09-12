/**
 *
 * Button
 *
 */

import styled from 'styled-components';
import PRIMARY_GREY from '../../../utils/colors';

const Button = styled.button`
  font-size: 12pt;
  display: inline-block;
  background-color: transparent;
  border-radius: 0.35em;
  border: 2px solid #efefef;
  cursor: pointer;
  min-width: 10em;
  height: 44px;

  &:hover {
    border: 2px solid #000;
    transition: opacity 0.2s ease-in-out;
  }
`;

export default Button;
