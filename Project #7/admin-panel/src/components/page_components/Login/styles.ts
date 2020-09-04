import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { darken } from '@material-ui/core/styles';
import { MAIN_BACKGROUND_COLOR, BLUE_COLOR } from '../../../app/theme';

const styles = (theme: Theme) => createStyles({
  root: {
    height: '100vh',
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  title: {
    color: '#ffffff',
    marginBottom: theme.spacing(2),
  },
  formContainer: {
    width: 400,
    padding: theme.spacing(4),
    backgroundColor: theme.mainPopup.backgroundColor,
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  textInput: {
    color: '#ffffff',
  },
  labelRoot: {
    position: 'absolute',
    top: '-8px',
    fontSize: '20px',
    color: darken('#ffffff', 0.2),
    '&.Mui-focused': {
      color: darken('#ffffff', 0.2),
    },
    '&.Mui-error': {
      color: '#f44336',
    },
  },
  errorMsg: {
    color: theme.palette.error.main,
    height: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  buttonWrapper: {
    marginTop: theme.spacing(1),
    color: BLUE_COLOR,
  },
  button: {
    marginRight: 20,
    backgroundColor: BLUE_COLOR,
    fontSize: '1rem',
    color: 'white',
    '&.MuiButton-contained.Mui-disabled': {
      color: darken('#ffffff', 0.2),
    },
  },
});

const useStyles = makeStyles(styles, { name: 'Login' });

export default useStyles;
