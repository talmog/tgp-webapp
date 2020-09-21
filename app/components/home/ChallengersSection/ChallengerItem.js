import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { H1, Body, Body12, Body13, Body9 } from 'components/shared/typogrophy';
import { numberFormatter } from 'helpers/numberHelper';
import { rankPageLink, partyResolver } from 'helpers/electionsHelper';
import ChallengerAvatar from './ChallengerAvatar';

const ChallengerItemWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

const ChallengerName = styled(H1)`
  margin-top: 1rem;
  margin-bottom: 0rem;
  text-align: center;
`;

const ChallengerInfo = styled(Body)`
  margin-bottom: 1.5rem;
  margin-top: 0;
  text-align: center;
`;

const ChallengeStats = styled(Body12)`
  color: ${({ theme }) => theme.colors.gray7};
  text-align: center;
  margin: 0;
  &.value {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green};
  }
`;

const ChallengeStatsSmall = styled(Body9)`
  color: ${({ theme }) => theme.colors.gray7};
  text-align: center;
  margin: 0;
  &.value {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green};
  }
`;

const NeededVotesWrapper = styled.div`
  margin-top: 2rem;
`;

const NeededVotes = styled.p`
  font: normal normal 13px/18px normal;
  color: ${({ theme }) => theme.colors.gray7};
  font-family: unset;
  text-align: center;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const FullLine = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayC};
  border-radius: 1px;
`;

const PercentLine = styled.div`
  border-bottom: 3px solid ${({ theme }) => theme.colors.green};
  border-radius: 3px;
  width: ${props => props.percent};
  top: -2px;
  position: relative;
`;

const LineWrapper = styled.div`
  padding: 0 12px;
`;

const ChallengerItem = ({ challenger }) => {
  const {
    image,
    party,
    name,
    state,
    district,
    likelyVoters,
    votesNeeded,
    raised,
    incumbentRaised,
    chamber,
    smallFunding,
    xTimes
  } = challenger;
  const partyString = partyResolver(party);
  const funding = smallFunding || ((raised * 100) / incumbentRaised).toFixed(2);
  const districtInfo = `${state.toUpperCase()}${district ? `-${district}` : ' Senate'}`;
  const challengerInfo = `${partyString} for ${districtInfo}`;
  const neededPercent = parseInt((likelyVoters * 100) / votesNeeded, 10);
  const neededVotes = `${neededPercent}% of ${numberFormatter(
    votesNeeded,
  )} votes needed to win in ${districtInfo}`;
  const disadvantage = xTimes || (incumbentRaised / raised).toFixed(2);
  const getRankPageLink = () => rankPageLink(chamber, state, district);
  return (
    <ChallengerItemWrapper>
      <Link to={getRankPageLink()}>
        <ChallengerAvatar avatar={image} party={party} />
        <ChallengerName>{name}</ChallengerName>
        <ChallengerInfo>{challengerInfo}</ChallengerInfo>
        <Grid container>
          <Grid item xs={6}>
            <ChallengeStats className="value">
              {numberFormatter(funding)}%
            </ChallengeStats>
            <ChallengeStatsSmall>Small Donor Funding</ChallengeStatsSmall>
          </Grid>
          <Grid item xs={6}>
            <ChallengeStats className="value">
              {numberFormatter(disadvantage)}x
            </ChallengeStats>
            <ChallengeStatsSmall>Funding Disadvantage</ChallengeStatsSmall>
          </Grid>
        </Grid>
        <NeededVotesWrapper>
          <NeededVotes>{neededVotes}</NeededVotes>
          <LineWrapper>
            <FullLine />
            <PercentLine percent={neededPercent + '%'} />
          </LineWrapper>
        </NeededVotesWrapper>
      </Link>
    </ChallengerItemWrapper>
  );
};

ChallengerItem.propTypes = {
  challenger: PropTypes.object,
};

export default ChallengerItem;
