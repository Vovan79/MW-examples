import { Theme, createStyles, makeStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  headcell: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: '#FFF',
    fontWeight: 600,
    maxWidth: 200,
  },
  headcellDetails: {
    backgroundColor: '#FFF !important',
    color: '#000 !important',
    fontWeight: 600,
    maxWidth: 200,
  },
  sorticon: {
    position: 'absolute',
    right: '-28px',
    color: '#FFF !important',
    fontSize: 24,
  },
  sorticonDetails: {
    position: 'absolute',
    right: '-28px',
    color: '#000 !important',
    fontSize: 24,
  },
});

const useStyles = makeStyles(styles, { name: 'EnhancedTableHead' });

export default useStyles;
