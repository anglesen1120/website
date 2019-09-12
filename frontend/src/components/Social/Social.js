import React from 'react';
import SocialContainer from './SocialContainer';
import links from '../../utils/links';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';

import ImageWrapper from './ImageWrapper';
import SocialWrapper from './SocialWrapper';

const Social = () => (
  <SocialContainer>
    <SocialWrapper>
      <a href={`${links.facebook}`}>
        <ImageWrapper src={facebook} />
      </a>
    </SocialWrapper>
    <SocialWrapper>
      <a href={`${links.linkedin}`}>
        <ImageWrapper src={linkedin} />
      </a>
    </SocialWrapper>
    <SocialWrapper>
      <a href={`${links.github}`}>
        <ImageWrapper src={github} />
      </a>
    </SocialWrapper>
  </SocialContainer>
);

export default Social;
