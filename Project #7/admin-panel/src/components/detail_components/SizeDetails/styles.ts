import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    width: '60%',
    minWidth: 350,
  },
  container: {
    flexGrow: 1,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
