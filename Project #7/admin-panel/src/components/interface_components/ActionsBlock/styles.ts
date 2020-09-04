import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    padding: 0,
  },
  button: {
    width: 24,
    height: 24,
    padding: 4,
    borderRadius: 5,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
