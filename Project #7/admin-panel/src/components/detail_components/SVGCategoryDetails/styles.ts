import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    width: '25%',
    minWidth: 300,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
