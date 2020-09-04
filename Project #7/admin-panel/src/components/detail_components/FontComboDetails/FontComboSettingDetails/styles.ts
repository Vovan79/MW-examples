import { Theme, createStyles, makeStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: 20,
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  headerCell: {
    color: '#FFF',
  },
  select: {
    position: 'relative',
    textAlign: 'left',
  },
  font: {
    width: 150,
  },
  size: {
    width: 80,
  },
  height: {
    width: 100,
  },
  spacing: {
    width: 80,
  },
  menu: {
    position: 'absolute',
    top: '100px  !important',
    maxHeight: 400,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
