import React, { useEffect } from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RegisterBannerContainer from 'containers/shared/RegisterBannerContainer';
import AdminMenu from 'components/admin/AdminMenu/Loadable';

// import PartyIcon from 'public/images/icons/heart.svg';
// import PartyIconGray from 'public/images/icons/heart-gray.svg';
// import ElectionIcon from 'public/images/icons/elections.svg';
// import ElectionIconGray from 'public/images/icons/elections-gray.svg';
// import YouIcon from 'public/images/icons/you.svg';
// import YouIconGray from 'public/images/icons/you-gray.svg';

import DesktopHeader from './DesktopHeader';

const useStyles = makeStyles(theme => ({
  appbar: {
    margin: 0,
  },
  bar: {
    justifyContent: 'space-between',
  },
  bottomNav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1000,
    backgroundColor: '#FFF',
    fontWeight: 500,
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.1)',
    paddingBottom: '5px',
    height: '66px',
  },
  bottomNavItem: {
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
}));

const NavWrapper = ({
  pathname,
  user,
  zipCode,
  navigateCallback,
  hideMobileNav,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    const electionRoute =
      pathname?.includes('elections') || pathname?.includes('zip-finder');
    const youRoute = !electionRoute && pathname?.includes('you');
    if (electionRoute) {
      setValue(1);
    } else if (youRoute) {
      setValue(2);
    }
  }, [pathname]);

  const icon = (iconOn, iconGray, val) => {
    const src = value === val ? iconOn : iconGray;
    return <img src={src} style={{ marginBottom: '5px' }} alt="" />;
  };

  const handleChange = (event, newValue) => {
    event.stopPropagation();
    event.preventDefault();

    setValue(newValue);
    if (newValue === 0) {
      navigateCallback('/party', user, zipCode);
    } else if (newValue === 1) {
      navigateCallback('/elections', user, zipCode);
    } else if (newValue === 2) {
      navigateCallback('/you', user, zipCode);
    }
  };

  return (
    <>
      <Hidden smDown>
        <DesktopHeader
          user={user}
          pathname={pathname}
          navigateCallback={navigateCallback}
        />
        <RegisterBannerContainer />
      </Hidden>
      {user && user.isAdmin && <AdminMenu />}
    </>
  );
};

NavWrapper.propTypes = {
  pathname: PropTypes.string,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  zipCode: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  navigateCallback: PropTypes.func,
  hideMobileNav: PropTypes.bool,
};

export default NavWrapper;