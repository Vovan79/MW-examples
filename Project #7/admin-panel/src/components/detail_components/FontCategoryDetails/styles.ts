import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  root: {
    width: '27%',
    minWidth: 380,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
