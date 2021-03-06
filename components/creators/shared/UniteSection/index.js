/**
 *
 * UniteSection
 *
 */

import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import { Body } from '../typography';
import { ViewProjectsButton } from '../buttons';
import Heads from '../Heads';

const UniteTitle = '/images/title--unite.svg';
const SingleLineCreatorsTitle = '/images/title--creators_of_the_world.svg';
const MultiLineCreatorsTitle = '/images/title--creators_of_the_world_2.svg';
const LogoCaps = '/images/logo.svg';
const SectionWrapper = styled.div`
  padding: 3rem 8rem 0;
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsTablet}) {
    padding: 4rem;
    padding-bottom: 0;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsMobile}) {
    padding: 2rem;
    padding-bottom: 0;
  }
`;
const Spare = styled.div`
  height: 5rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsTablet}) {
    height: 4rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsMobile}) {
    height: 2rem;
  }
`;
const Audience = styled.p`
  text-align: center;
  margin: 3rem 0;
  color: ${({ theme }) => theme.colors.blue};
  font: normal 500 32px normal;
  font-family: unset;
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsTablet}) {
    font-size: 24px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsMobile}) {
    font-size: 17px;
    line-height: 140%;
    margin: 1.5rem 0;
  }
`;

const Logo = styled.img`
  height: auto;
  cursor: pointer;
  margin: 0 1.5rem;
  top: -5px;
  position: relative;
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsTablet}) {
    width: 30px;
    height: 25px;
    top: -2px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsMobile}) {
    width: 17px;
    height: 14px;
    top: -3px;
    margin: 0 0.6rem;
  }
`;

const Description = styled.h5`
  max-width: 45rem;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  font: normal 400 24px normal;
  line-height: 1.5;
  font-family: unset;
  color: ${({ theme }) => theme.creators.colors.darkGray};
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsTablet}) {
    max-width: none;
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-size: 20px;
    padding: 0 4rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsMobile}) {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    line-height: 1.3;
    font-size: 15px;
    padding: 0;
  }
`;

const LogoTitle = styled(Body)`
  margin: 60px 0;
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsTablet}) {
    font-size: 24px;
    margin: 3rem 0;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsMobile}) {
    font-size: 15px;
    margin: 2rem 0;
  }
`;

const TitleImg = styled.img`
  width: 100%;
  height: 100%;
  @media only screen and (min-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsTablet}) {
  }
`;

const VideoPunct = styled.span`
  display: inline;
  @media only screen and (min-width: 466px) and (max-width: 530px) {
    display: none;
  }

  @media only screen and (min-width: 701px) and (max-width: 790px) {
    display: none;
  }

  @media only screen and (min-width: 1021px) and (max-width: 1140px) {
    display: none;
  }
`;

const VideoBr = styled.br`
  display: none;

  @media only screen and (min-width: 466px) and (max-width: 530px) {
    display: inline-block;
  }

  @media only screen and (min-width: 701px) and (max-width: 790px) {
    display: inline-block;
  }

  @media only screen and (min-width: 1021px) and (max-width: 1140px) {
    display: inline-block;
  }
`;
const PodcastersPunct = styled.span`
  display: inline;

  @media only screen and (min-width: 375px) and (max-width: 465px) {
    display: none;
  }

  @media only screen and (min-width: 570px) and (max-width: 695px) {
    display: none;
  }
  @media only screen and (min-width: 957px) and (max-width: 1020px) {
    display: none;
  }
`;

const PodcastersBr = styled.br`
  display: none;
  @media only screen and (min-width: 375px) and (max-width: 465px) {
    display: inline-block;
  }
  @media only screen and (min-width: 570px) and (max-width: 695px) {
    display: inline-block;
  }
  @media only screen and (min-width: 957px) and (max-width: 1020px) {
    display: inline-block;
  }
`;
const InfluencersPunct = styled.span`
  display: inline;

  @media only screen and (min-width: 466px) and (max-width: 560px) {
    display: none;
  }

  @media only screen and (min-width: 696px) and (max-width: 830px) {
    display: none;
  }
  @media only screen and (min-width: 1021px) and (max-width: 1187px) {
    display: none;
  }
`;

const InfluencersBr = styled.br`
  display: none;
  @media only screen and (min-width: 466px) and (max-width: 560px) {
    display: inline-block;
  }
  @media only screen and (min-width: 696px) and (max-width: 830px) {
    display: inline-block;
  }
  @media only screen and (min-width: 1021px) and (max-width: 1187px) {
    display: inline-block;
  }
`;
const MakersPunct = styled.span`
  display: inline;
  @media only screen and (min-width: 561px) and (max-width: 569px) {
    display: none;
  }

  @media only screen and (min-width: 831px) and (max-width: 956px) {
    display: none;
  }

  @media only screen and (min-width: 1188px) {
    display: none;
  }
`;

const MakersBr = styled.br`
  display: none;
  @media only screen and (min-width: 561px) and (max-width: 569px) {
    display: inline-block;
  }
  @media only screen and (min-width: 831px) and (max-width: 956px) {
    display: inline-block;
  }

  @media only screen and (min-width: 1188px) {
    display: inline-block;
  }
`;

const CodersPunct = styled.span`
  display: inline;
  @media only screen and (min-width: 375px) and (max-width: 465px) {
    display: none;
  }

  @media only screen and (min-width: 570px) and (max-width: 700px) {
    display: none;
  }

  @media only screen and (min-width: 957px) and (max-width: 1020px) {
    display: none;
  }
`;

const CodersBr = styled.br`
  display: none;
  @media only screen and (min-width: 375px) and (max-width: 465px) {
    display: inline-block;
  }

  @media only screen and (min-width: 570px) and (max-width: 700px) {
    display: inline-block;
  }

  @media only screen and (min-width: 957px) and (max-width: 1020px) {
    display: inline-block;
  }
`;
function UniteSection({ user }) {
  return (
    <SectionWrapper>
      <Hidden xsDown>
        <TitleImg src={SingleLineCreatorsTitle} alt="creators" />
      </Hidden>
      <Hidden smUp>
        <TitleImg src={MultiLineCreatorsTitle} alt="creators" />
      </Hidden>
      <Audience>
        Designers · Writers · Podcasters <PodcastersPunct> · </PodcastersPunct>{' '}
        <PodcastersBr />
        Influencers <InfluencersPunct> · </InfluencersPunct> <InfluencersBr />
        Makers <MakersPunct> · </MakersPunct> <MakersBr />
        Coders <CodersPunct> · </CodersPunct> <CodersBr />
        <span style={{ whiteSpace: 'nowrap' }}>Content Creators</span>{' '}
        <VideoPunct> · </VideoPunct>
        <VideoBr /> Videographers
      </Audience>

      <TitleImg src={UniteTitle} alt="unite" />
      <p className="text-center">
        <LogoTitle>
          Let&apos;s all build <Logo src={LogoCaps} alt="logo" /> the good party
        </LogoTitle>
      </p>
      <div className="text-center">
        <ViewProjectsButton
          variant="contained"
          color="primary"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfPPTHykqtlSq2tRRu49XemAdI54i260jGEZ_ghaCexqM4I4Q/viewform"
        >
          I want to Help
        </ViewProjectsButton>
      </div>
      {!user && (
        <>
          {/* <CreatorsCount>640 Creators have joined so far</CreatorsCount> */}
          <Heads />
        </>
      )}
      <Description>
        The Good Party is a non-profit project with a simple plan to use
        open-source technology to take back democracy from big-money donors and
        crooked career politicians.
        <br />
        <br />
        We’re calling on creators of the world to help us create the technology,
        messaging, visuals, audio, and stories that can reach and inspire
        millions of people.
        <br />
        <br />
        We’re also building the tools needed to disrupt the two-party system,
        and get good indie/grass-roots candidates elected so that we can change
        politics for Good.
        <br />
        <br />
        Help with any project you can from the list below or add your own. All
        projects are open-source and free for good.
      </Description>
      <div className="text-center">
        <ViewProjectsButton
          variant="contained"
          color="primary"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfPPTHykqtlSq2tRRu49XemAdI54i260jGEZ_ghaCexqM4I4Q/viewform"
        >
          I want to Help
        </ViewProjectsButton>
      </div>
      <Spare id="projects-section" />
    </SectionWrapper>
  );
}

UniteSection.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default UniteSection;
