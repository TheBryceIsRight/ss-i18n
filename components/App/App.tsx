import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Switch, Route } from 'react-router-dom';
import Routes from './Routes';
import NavigationBar from '../NavigationBar/NavigationBar';

const App: React.FC = () => {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
  
  export default App;