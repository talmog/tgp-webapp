/**
 *
 * PresidentialCandidatePage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PresidentialCandidateWrapper from 'components/elections/PresidentialCandidateWrapper';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCandidate from './selectors';
import reducer from './reducer';
import saga from './saga';
import candidateActions from './actions';

export function PresidentialCandidatePage({ id, candidateState, dispatch }) {
  useInjectReducer({ key: 'candidate', reducer });
  useInjectSaga({ key: 'candidate', saga });

  const { candidate, presidentialRank } = candidateState;

  useEffect(() => {
    if (id) {
      dispatch(candidateActions.loadPresidentialCandidateAction(id));
    }
    if (!presidentialRank) {
      dispatch(candidateActions.loadRankingFromCookieAction());
    }
  }, []);

  const childProps = {
    candidate,
    presidentialRank,
  };

  return (
    <div>
      <Helmet>
        <title>PresidentialCandidatePage</title>
        <meta
          name="description"
          content="Description of PresidentialCandidatePage"
        />
      </Helmet>
      <PresidentialCandidateWrapper {...childProps} />
    </div>
  );
}

PresidentialCandidatePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  candidateState: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  candidateState: makeSelectCandidate(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    id: ownProps.match.params.id,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PresidentialCandidatePage);