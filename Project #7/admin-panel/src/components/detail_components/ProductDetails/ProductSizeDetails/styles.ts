import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    marginRight: 30,
  },
  container: {
    padding: 30,
    '& .MuiFormControlLabel-root': {
      height: 24,
      padding: 0,
      margin: 0,
    },
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
