/**
 *
 * Footer
 *
 */

import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import history from 'utils/history';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Body9 } from '../typogrophy';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 16px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
  &.creatorsFooter {
    background-color: ${({ theme }) => theme.colors.blue};
    && {
      margin-bottom: 0;
    }
  }
  &.withNav {
    margin-bottom: 4rem;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-bottom: 0;
    }
  }
`;
const InnerWrapper = styled(Body9)`
  max-width: ${({ theme }) => theme.breakpoints.contentMax};
  margin: auto auto;
  padding: 8px;
  color: ${({ theme }) => theme.colors.gray10};
  text-align: center;
  border: solid 1px ${({ theme }) => theme.colors.gray10};

  &.creatorsFooterContent {
    color: ${({ theme }) => theme.creators.colors.gray11};
    border: solid 1px ${({ theme }) => theme.creators.colors.gray11};
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray10};
`;

function Footer({ isCreators = false }) {
  const [withMobileNav, setWithMobileNav] = useState(true);
  const [currentPath, setCurrentPath] = useState(null);
  useEffect(() => {
    history.listen(location => {
      updateMobileNav(location);
      setCurrentPath(location.pathname);
    });
    updateMobileNav(window.location);
    setCurrentPath(window.location.pathname);
  }, []);

  const updateMobileNav = location => {
    const { pathname } = location;
    if (
      pathname === '/' ||
      pathname === '/intro/splash' ||
      pathname === '/intro/zip-finder'
    ) {
      setWithMobileNav(false);
    } else {
      setWithMobileNav(true);
    }
  };

  if (currentPath === '/creators' && !isCreators) {
    return <></>;
  }
  return (
    <Wrapper
      className={
        (withMobileNav ? 'withNav' : '') + (isCreators ? ' creatorsFooter' : '')
      }
    >
      <InnerWrapper className={isCreators ? ' creatorsFooterContent' : ''}>
        PAID FOR BY THE GOOD PARTY | thegoodparty.org
        <br />
        NOT AUTHORIZED BY ANY CANDIDATE OR CANDIDATE COMMITTEE.
        <br />
        <StyledLink to="/directory">Directory</StyledLink>
      </InnerWrapper>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default memo(Footer);
