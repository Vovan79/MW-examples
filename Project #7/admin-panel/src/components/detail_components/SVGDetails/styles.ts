import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    width: '30%',
    minWidth: 350,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
