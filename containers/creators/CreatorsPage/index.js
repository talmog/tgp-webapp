/**
 *
 * CreatorsPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Head from 'next/head';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CreatorsWrapper from 'components/creators/CreatorsWrapper';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { setSignupRedirectCookie } from 'helpers/cookieHelper';

import userActions from 'containers/you/YouPage/actions';
import { makeSelectContent } from 'containers/App/selectors';
import makeSelectUser from 'containers/you/YouPage/selectors';

import snackbarActions from 'containers/shared/SnackbarContainer/actions';
import reducer from 'containers/you/YouPage/reducer';
import saga from 'containers/you/YouPage/saga';

import makeSelectCreatorsPage from './selectors';

// import reducer from './reducer';
// import saga from './saga';

export function CreatorsPage({
  content,
  userState,
  dispatch,
  socialLoginCallback,
  socialLoginFailureCallback,
  setSignupRedirectCookieCallback,
  sendMessageToCreatorCallback,
  twitterButtonCallback,
}) {
  useInjectReducer({ key: 'user', reducer });
  useInjectSaga({ key: 'user', saga });
  const stateUser = userState.user;
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    if (!stateUser) {
      dispatch(userActions.loadUserFromCookieAction());
      dispatch(userActions.generateUuidAction());
    } else {
      setUser(stateUser);
    }
  }, [stateUser]);
  const childProps = {
    projects: content ? content.creatorsProjects || [] : [],
    user,
    socialLoginCallback,
    socialLoginFailureCallback,
    setSignupRedirectCookieCallback,
    sendMessageToCreatorCallback,
    twitterButtonCallback,
  };

  return (
    <div>
      <Head>
        <title>Creators of The World, Unite!</title>
        <meta name="description" content="Creators of The World, Unite!" />
      </Head>
      <CreatorsWrapper {...childProps} />
    </div>
  );
}

CreatorsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  userState: PropTypes.object,
  socialLoginCallback: PropTypes.func,
  socialLoginFailureCallback: PropTypes.func,
  setSignupRedirectCookieCallback: PropTypes.func,
  sendMessageToCreatorCallback: PropTypes.func,
  twitterButtonCallback: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  creatorsPage: makeSelectCreatorsPage(),
  content: makeSelectContent(),
  userState: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    sendMessageToCreatorCallback: messageInfo => {
      dispatch(userActions.sendMessageToCreator(messageInfo));
    },
    setSignupRedirectCookieCallback: redirect => {
      setSignupRedirectCookie(redirect);
    },
    socialLoginCallback: user => {
      setSignupRedirectCookie('/creators');
      dispatch(userActions.socialRegisterAction(user));
    },
    socialLoginFailureCallback: () => {
      dispatch(snackbarActions.showSnakbarAction('Error Registering', 'error'));
    },
    twitterButtonCallback: () => {
      setSignupRedirectCookie('/creators');
      dispatch(userActions.twitterLoginAction());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CreatorsPage);
