/**
 * platform form main
 *
 */

// dependencies
import React from 'react';
import * as PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.tableMultiInputRow,
  },
}));

const Main = ({
  formValue,
  formErrors,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        id="name"
        name="name"
        label="Название*"
        variant="outlined"
        margin="none"
        value={formValue.name}
        error={!!formErrors.name}
        helperText={formErrors.name}
        onChange={handleChange}
      />

      <TextField
        id="slug"
        name="slug"
        label="Slug*"
        variant="outlined"
        margin="none"
        value={formValue.slug}
        error={!!formErrors.slug}
        helperText={formErrors.slug}
        onChange={handleChange}
      />
    </div>
  );
};

Main.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formValue: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formErrors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Main;
