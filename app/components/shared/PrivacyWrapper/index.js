import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Wrapper from 'components/shared/Wrapper';
import MobileHeader from 'components/shared/navigation/MobileHeader';
import Nav from 'containers/shared/Nav';
import contentfulHelper, { CmsContentWrapper } from 'helpers/contentfulHelper';
import { dateUsHelper } from 'helpers/dateHelper';

import { H1, Body11 } from '../typogrophy';

const TitleWrapper = styled.div`
  text-align: center;
`;

const RevisionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const Divider = styled.span`
  display: inline-block;
  height: 12px;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.red};
  margin: 0 6px;
`;

const PrivacyWrapper = ({ content }) => {
  let cmsContent = '';
  if (content && content.privacyPage) {
    cmsContent = contentfulHelper(content.privacyPage.pageContent);
  }
  return (
    <div>
      <Nav />
      <Wrapper white>
        <MobileHeader />
        {content && content.privacyPage && (
          <>
            <TitleWrapper>
              <H1>{content.privacyPage.title}</H1>
            </TitleWrapper>
            <RevisionWrapper>
              <Body11>Last Revision</Body11>
              <Divider />
              <Body11>{dateUsHelper(content.privacyPage.lastModified)}</Body11>
            </RevisionWrapper>
            <CmsContentWrapper>{cmsContent}</CmsContentWrapper>
          </>
        )}
      </Wrapper>
    </div>
  );
};

PrivacyWrapper.propTypes = {
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default PrivacyWrapper;