import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper } from '@material-ui/core';
import routes from '../../../constants/routes.constants';
import useStyles from './styles';

const Page404: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction="column" alignItems="center" justify="center">
      <Grid item>
        <Paper className={classes.container}>
          <Typography variant="h6">
            Page Not Found
          </Typography>
          <Typography variant="body1">
            <Link to={routes.root} className={classes.link}>Go to the main page</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Page404;
