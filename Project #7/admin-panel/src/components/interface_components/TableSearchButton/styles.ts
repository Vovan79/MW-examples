import { createStyles, makeStyles } from '@material-ui/core';

const styles = () => createStyles({
  button: {
    width: 24,
    height: 24,
    padding: 4,
    borderRadius: 5,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
