import React, { useState } from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';
import { func } from 'prop-types';
import Navbar from 'components/Navbar';
import { useStyles } from './styles';
import Dashboard from 'containers/Dashboard/main';

export const DefaultLayout = ({ component: Component, ...rest }) => {
  const { push } = useHistory();
  const classes = useStyles();
  const auth = true;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <>
          {auth ? (
            <div>
              <Navbar />
              <Dashboard />
            </div>
          ) : (
            <>
              <Redirect to="/auth" />
            </>
          )}
        </>
      )}
    />
  );
};


DefaultLayout.propTypes = {
  component: func.isRequired,
};
