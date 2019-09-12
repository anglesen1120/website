/**
 *
 * Textarea
 *
 */

import styled from 'styled-components';
import PRIMARY_GREY from '../../../utils/colors';

const Textarea = styled.textarea`
  background: ${PRIMARY_GREY};
  border-radius: 0.35em;
  border: 2px solid transparent;
  display: block;
  outline: 0;
  width: 100%;
  height: 5.75em;
  padding: 0.5em 0.75em;

  &:focus {
    border: 2px solid #000;
  }
`;

export default Textarea;
