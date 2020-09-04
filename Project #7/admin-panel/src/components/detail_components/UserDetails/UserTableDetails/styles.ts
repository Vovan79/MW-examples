import { Theme, createStyles, makeStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    minHeight: 180,
    marginBottom: 20,
  },
  tabs: {
    minHeight: 34,
    color: '#FFF',
    backgroundColor: theme.palette.primary.main,
    paddingRight: 20,
    paddingLeft: 20,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    '& .MuiTab-root': {
      minHeight: 24,
      textTransform: 'none',
      fontSize: 16,
    },
  },
  indicator: {
    backgroundColor: '#F00',
    height: 3,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
