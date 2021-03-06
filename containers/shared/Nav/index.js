/**
 *
 * Nav
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-next-router';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUser from 'containers/you/YouPage/selectors';
import reducer from 'containers/you/YouPage/reducer';
import saga from 'containers/you/YouPage/saga';

import NavWrapper from 'components/shared/navigation/NavWrapper';
import userActions from 'containers/you/YouPage/actions';
import { makeSelectLocation } from 'containers/App/selectors';
import { electionRoute } from 'helpers/electionsHelper';

import makeSelectCandidate from '../../elections/CandidatePage/selectors';

export function Nav({
  userState,
  dispatch,
  locationState,
  navigateCallback,
  hideMobileNav = false,
}) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });

  const [user, setUser] = React.useState(null);
  const [zipCode, setZipCode] = React.useState(null);
  const stateUser = userState.user;

  const pathname = locationState?.pathname;
  useEffect(() => {
    if (!stateUser) {
      dispatch(userActions.loadUserFromCookieAction());
      dispatch(userActions.generateUuidAction());
    } else {
      setUser(stateUser);
      setZipCode(stateUser.zipCode);
    }
  }, [stateUser]);

  const childProps = {
    pathname,
    user,
    zipCode,
    navigateCallback,
    hideMobileNav,
  };

  return <NavWrapper {...childProps} />;
}

Nav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  locationState: PropTypes.object,
  userState: PropTypes.object,
  navigateCallback: PropTypes.func,
  hideMobileNav: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  locationState: makeSelectLocation(),
  userState: makeSelectUser(),
  candidateState: makeSelectCandidate(),
});

/* eslint-disable prefer-destructuring */
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    navigateCallback: (screen, user, zipCode) => {
      if (screen === '/elections') {
        dispatch(push(electionRoute(user, zipCode)));
      } else {
        dispatch(push(screen));
      }
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Nav);
