import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    width: '100%',
    minWidth: 1300,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  info: {
    width: '25%',
    minWidth: 350,
  },
  setting: {
    width: '70%',
    minWidth: 800,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
