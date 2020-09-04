import { Theme, createStyles, makeStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  title: {
    position: 'relative',
    height: 32,
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 30,
    color: '#FFF',
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  button: {
    position: 'absolute',
    top: 6,
    right: 8,
    color: '#FFF',
    width: 24,
    height: 24,
    padding: 4,
    borderRadius: 5,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
