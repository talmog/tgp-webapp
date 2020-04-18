import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { Body9, Body11, Body13 } from 'components/shared/typogrophy';
import CandidateAvatar from 'components/shared/CandidateAvatar';
import { partyResolver, candidateRoute } from 'helpers/electionsHelper';
import { OutlinedButton } from '../shared/buttons';
import LoadingAnimation from '../shared/LoadingAnimation';
import { numberNth } from '../../helpers/numberHelper';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Side = styled.div`
  margin-top: 11px;
  flex-basis: calc(50% - 10px);

  &.right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Middle = styled.div`
  flex-basis: 2px;
  text-align: center;
  position: relative;

  & > div {
    color: ${({ theme }) => theme.colors.gray9};
  }
`;

const NotGoodTitle = styled(Body9)`
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const GoodTitle = styled(Body9)`
  color: ${({ theme }) => theme.colors.green};
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const CandidateWrapper = styled.div`
  margin-top: 17px;
  margin-bottom: 30px;
  cursor: pointer;

  &.right {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  &.center {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Name = styled(Body13)`
  margin-top: 12px;
  margin-bottom: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue};
`;

const Role = styled(Body9)`
  opacity: 0.8;
`;

const ChoiceButton = styled(Body9)`
  color: ${({ theme }) => theme.colors.blue};
  border-radius: 20px;
  border: solid 2px ${({ theme }) => theme.colors.blue};
  padding: 7px 12px;
  display: inline-block;
  margin-top: 8px;
  pointer: cursor;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s, color 0.3s;

  &: hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

const ChosenCandWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ChosenCand = styled(Body9)`
  color: ${({ theme }) => theme.colors.gray7};
  display: inline-block;
  margin-left: 4px;
  text-transform: uppercase;
`;

const CheckMark = styled(CheckIcon)`
  color: ${({ theme }) => theme.colors.lightBlue};
  && {
    font-size: 9px;
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 12px;
    }
  }
`;

const CloseIconWrapper = styled.div`
  padding: 8px 10px 10px 6px;
`;

const CloseIcon = styled(HighlightOffIcon)`
  color: ${({ theme }) => theme.colors.gray7};
  display: inline-block;
  && {
    font-size: 9px;
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 12px;
    }
  }
`;

const Line = styled.div`
  width: 1px;
  border: solid 0.5px #cdcdcd;
  height: calc(100% - 30px);
  margin-top: 20px;
`;

const FiltersWRapper = styled.div`
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.colors.grayBg};
  padding: 10px 0;
  width: 120px;
  left: -60px;
  text-align: center;
`;

const Vs = styled(Body11)`
  position: absolute;
  top: 150px;
  background-color: ${({ theme }) => theme.colors.grayBg};
  padding: 10px 0;
  width: 20px;
  left: -10px;
  text-align: center;
`;

const StyledBody9 = styled(Body9)`
  color: ${({ theme }) => theme.colors.blue};
`;

const UnknownWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grayC};
  border-radius: 8px;
  padding: 24px;
  margin-top: 48px;
`;

const UnknownTitle = styled(Body9)`
  letter-spacing: 0.5px;
  font-weight: 500;
  text-align: center;
`;

const VsList = ({
  candidates = {},
  openFiltersCallback = () => {},
  choices = {},
  choicesOrder = [],
  handleChoiceCallback,
  handleDeselectCandidate,
}) => {
  const { good, notGood, unknown } = candidates;
  if (!candidates || (!good && !notGood && !unknown)) {
    return <LoadingAnimation />;
  }

  const choiceButton = candidate => {
    if (choices[candidate.id]) {
      return (
        <ChosenCandWrapper>
          <CheckMark />{' '}
          <ChosenCand>{numberNth(choices[candidate.id])} CHOICE </ChosenCand>
          <CloseIconWrapper onClick={e => handleDeselect(candidate, e)}>
            <CloseIcon />
          </CloseIconWrapper>
        </ChosenCandWrapper>
      );
    }
    return (
      <ChoiceButton onClick={e => handleChoice(candidate, e)}>
        {numberNth(choicesOrder.length + 1)} CHOICE
      </ChoiceButton>
    );
  };

  const handleChoice = (candidate, e) => {
    e.stopPropagation();
    e.preventDefault();
    handleChoiceCallback(candidate);
  };

  const handleDeselect = (candidate, e) => {
    e.stopPropagation();
    e.preventDefault();
    handleDeselectCandidate(candidate);
  };

  return (
    <div>
      <Row>
        <Side>
          <NotGoodTitle>NOT GOOD ENOUGH</NotGoodTitle>
          {notGood.map(candidate => (
            <Link to={candidateRoute(candidate)} key={candidate.id}>
              <CandidateWrapper>
                <CandidateAvatar
                  size="responsive"
                  src={candidate.image}
                  name={candidate.name}
                />
                <Name>{candidate.name}</Name>
                <Role>
                  {partyResolver(candidate.party)}
                  <br />
                  {candidate.isIncumbent && 'INCUMBENT'}
                </Role>
                {choiceButton(candidate)}
              </CandidateWrapper>
            </Link>
          ))}
        </Side>
        <Middle>
          <FiltersWRapper>
            <OutlinedButton active fullWidth onClick={openFiltersCallback}>
              <StyledBody9>FILTERS</StyledBody9>
            </OutlinedButton>
          </FiltersWRapper>
          <Line />
          <Vs>VS</Vs>
        </Middle>
        <Side className="right">
          <GoodTitle>GOOD ENOUGH</GoodTitle>
          {good.map(candidate => (
            <Link to={candidateRoute(candidate)} key={candidate.id}>
              <CandidateWrapper className="right">
                <CandidateAvatar
                  size="responsive"
                  src={candidate.image}
                  name={candidate.name}
                  good
                />
                <Name>{candidate.name}</Name>
                <Role>
                  {partyResolver(candidate.party)}
                  <br />
                  {candidate.isIncumbent && 'INCUMBENT'}
                </Role>
                {choiceButton(candidate)}
              </CandidateWrapper>
            </Link>
          ))}
          {good.length === 0 && (
            <CandidateWrapper className="right">
              <CandidateAvatar size="responsive" src="blank" good />
              <Name>NONE YET</Name>
              <Role>VETTING CHALLENGERS</Role>
            </CandidateWrapper>
          )}
        </Side>
      </Row>
      {unknown && unknown.length > 0 && (
        <UnknownWrapper>
          <UnknownTitle>GOODNESS UNKNOWN</UnknownTitle>
          {unknown.map(candidate => (
            <Link to={candidateRoute(candidate)} key={candidate.id}>
              <CandidateWrapper className="center">
                <CandidateAvatar
                  size="responsive"
                  src={candidate.image}
                  good={null}
                  name={candidate.name}
                />
                <Name>{candidate.name}</Name>
                <Role>
                  {partyResolver(candidate.party)}
                  <br />
                  {candidate.isIncumbent && 'INCUMBENT'}
                </Role>
                {choiceButton(candidate)}
              </CandidateWrapper>
            </Link>
          ))}
        </UnknownWrapper>
      )}
    </div>
  );
};

VsList.propTypes = {
  candidates: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
  ]),
  choices: PropTypes.object,
  choicesOrder: PropTypes.array,
  openFiltersCallback: PropTypes.func,
  handleChoiceCallback: PropTypes.func,
  handleDeselectCandidate: PropTypes.func,
};

export default VsList;
