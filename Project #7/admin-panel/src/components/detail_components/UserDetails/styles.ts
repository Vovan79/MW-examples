import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    width: '100%',
  },
  container: {
    marginTop: 20,
    flexGrow: 1,
  },
  info: {
    flexGrow: 1,
    marginBottom: 30,
  },
  socials: {
    flexGrow: 1,
    paddingLeft: 20,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
