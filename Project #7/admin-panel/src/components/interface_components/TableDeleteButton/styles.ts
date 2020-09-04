import { Theme, createStyles, makeStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    height: 200,
    width: 360,
  },
  title: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    fontSize: 16,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
