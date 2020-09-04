import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    width: '80%',
    minWidth: 940,
  },
  container: {
    marginTop: 20,
    flexGrow: 1,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
