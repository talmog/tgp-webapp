/**
 *
 * LoginPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from 'next/head';
import { compose } from 'redux';
import { push } from 'connected-next-router';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUser from 'containers/you/YouPage/selectors';
import reducer from 'containers/you/YouPage/reducer';
import saga from 'containers/you/YouPage/saga';
import userActions from 'containers/you/YouPage/actions';
import { createStructuredSelector } from 'reselect';

import LoginWrapper from 'components/you/LoginWrapper';
import snackbarActions from '../../shared/SnackbarContainer/actions';

export function LoginPage({
  userState,
  dispatch,
  loginCallback,
  socialLoginCallback,
  socialLoginFailureCallback,
  forgotPasswordCallback,
  twitterButtonCallback,
}) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });

  const { user } = userState;
  useEffect(() => {
    if (user) {
      dispatch(push('/you'));
    }
  }, [userState]);

  const childProps = {
    loginCallback,
    socialLoginCallback,
    socialLoginFailureCallback,
    forgotPasswordCallback,
    twitterButtonCallback,
  };

  return (
    <div>
      <Head>
        <title data-cy="page-title">Sign into your account | TGP</title>
        <meta name="description" content="Sign into your account | TGP" />
      </Head>
      <LoginWrapper {...childProps} />
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userState: PropTypes.object,
  loginCallback: PropTypes.func,
  socialLoginCallback: PropTypes.func,
  socialLoginFailureCallback: PropTypes.func,
  forgotPasswordCallback: PropTypes.func,
  twitterButtonCallback: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loginCallback: (email, password) => {
      dispatch(userActions.loginAction(email, password));
    },
    forgotPasswordCallback: email => {
      dispatch(userActions.forgotPasswordAction(email));
    },
    socialLoginCallback: user => {
      dispatch(userActions.socialLoginAction(user));
    },
    socialLoginFailureCallback: () => {
      dispatch(snackbarActions.showSnakbarAction('Sign in error', 'error'));
    },
    twitterButtonCallback: () => {
      dispatch(userActions.twitterLoginAction());
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

export default compose(
  withConnect,
  memo,
)(LoginPage);
