/**
 *
 * Textarea
 *
 */

import styled from 'styled-components';

const Textarea = styled.textarea`
  background-color: #f7f7f7;
  border-radius: 0.35em;
  border: 2px solid transparent;
  display: block;
  outline: 0;
  width: 100%;
  height: 7.75em;
  padding: 0.5em 0.75em;
  font-size: 11pt;

  &:focus {
    border: 2px solid #000;
  }
`;

export default Textarea;
