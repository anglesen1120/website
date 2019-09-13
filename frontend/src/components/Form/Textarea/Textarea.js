/**
 *
 * Textarea
 *
 */

import styled from 'styled-components';
import { media } from '../../../utils';

const Textarea = styled.textarea`
  background-color: #f7f7f7;
  border-radius: 0.35em;
  border: 2px solid ${props => (props.error ? 'red' : 'transparent')};
  display: block;
  outline: 0;
  width: 100%;
  height: 7.75em;
  padding: 0.5em 0.75em;
  font-size: 11pt;

  &:focus {
    border: 2px solid #999;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.3;
  }
  :-ms-input-placeholder {
    opacity: 0.3;
  }

  ${media.tablet`
    font-size: 13pt;
  `}

  ${media.desktop`
    height: 9.75em;
    font-size: 13pt;
  `}
`;

export default Textarea;
