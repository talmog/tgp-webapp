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
import { push } from 'connected-react-router';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUser from 'containers/you/YouPage/selectors';
import reducer from 'containers/you/YouPage/reducer';
import saga from 'containers/you/YouPage/saga';

import NavWrapper from 'components/shared/navigation/NavWrapper';
import userActions from 'containers/you/YouPage/actions';
import { makeSelectLocation } from 'containers/App/selectors';
import { getCookie } from 'helpers/cookieHelper';

export function Nav({ userState, dispatch, locationState, navigateCallback }) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });

  const [user, setUser] = React.useState(null);
  const [zipCode, setZipCode] = React.useState(null);
  const stateUser = userState.user;
  const { pathname } = locationState;

  useEffect(() => {
    if (!stateUser) {
      dispatch(userActions.loadUserFromCookieAction());
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
  };

  return <NavWrapper {...childProps} />;
}

Nav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  locationState: PropTypes.object,
  userState: PropTypes.object,
  navigateCallback: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  locationState: makeSelectLocation(),
  userState: makeSelectUser(),
});

/* eslint-disable prefer-destructuring */
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    navigateCallback: (screen, user, zipCode) => {
      console.log(user);
      if (screen === '/elections') {
        let zip;
        if (zipCode) {
          zip = zipCode.zip;
        } else if (user && user.zipCode) {
          zip = user.zipCode.zip;
        } else {
          let cookieZip = getCookie('zip');
          if (cookieZip) {
            cookieZip = JSON.parse(cookieZip);
            zip = cookieZip.zip;
          }
        }
        if (zip) {
          dispatch(push(`/elections/district/${zip}`));
        } else {
          dispatch(push('/intro/zip-finder'));
        }
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