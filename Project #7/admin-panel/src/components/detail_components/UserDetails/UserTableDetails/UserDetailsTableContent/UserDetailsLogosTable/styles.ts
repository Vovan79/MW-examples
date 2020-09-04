import { createStyles, makeStyles } from '@material-ui/core';
import { LIGHT_BLUE_COLOR } from '../../../../../../app/theme';

const styles = () => createStyles({
  container: {
    maxHeight: 460,
  },
  table: {
    minWidth: 650,
  },
  row: {
    '&:hover': {
      backgroundColor: LIGHT_BLUE_COLOR,
      cursor: 'pointer',
    },
  },
  headcell: {
    backgroundColor: '#FFF !important',
    color: '#000',
    fontWeight: 600,
    maxWidth: 200,
  },
  pagination: {
    flex: 0,
  },
  preview: {
    maxHeight: 60,
    maxWidth: 100,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
