/**
 *
 * YouPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUser from 'containers/you/YouPage/selectors';
import reducer from 'containers/you/YouPage/reducer';
import saga from 'containers/you/YouPage/saga';
import userActions from 'containers/you/YouPage/actions';
import { createStructuredSelector } from 'reselect';

import YouWrapper from 'components/you/YouWrapper';
import AccountWrapper from 'components/you/AccountWrapper/Loadable';

export function YouPage({ userState, dispatch, signoutCallback }) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });

  const { user } = userState;

  const accountProps = {
    user,
    signoutCallback,
  };

  return (
    <div>
      <Helmet>
        <title>You | The Good Party</title>
        <meta name="description" content="You | The Good Party" />
      </Helmet>
      {user ? <AccountWrapper {...accountProps} /> : <YouWrapper />}
    </div>
  );
}

YouPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userState: PropTypes.object,
  signoutCallback: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    signoutCallback: () => {
      dispatch(userActions.signoutAction());
      dispatch(push('/'));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  userState: makeSelectUser(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(YouPage);