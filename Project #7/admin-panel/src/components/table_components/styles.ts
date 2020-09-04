import { createStyles, makeStyles } from '@material-ui/core';
import { LIGHT_BLUE_COLOR } from '../../app/theme';

const styles = () => createStyles({
  container: {
    maxHeight: 460,
    borderRadius: 0,
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
  pagination: {
    flex: 0,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
