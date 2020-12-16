import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: 20,
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Speed Test Monitor
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
}

export default Header
