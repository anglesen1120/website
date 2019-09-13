/**
 *
 * FormWrapper
 *
 */

import styled from 'styled-components';
import { media } from '../../utils';

const FormWrapper = styled.form`
  input,
  textarea {
    margin-bottom: 1em;
  }

  ${media.tablet`
    width: 66.6%;
  `}
`;

export default FormWrapper;
