import { createStyles, makeStyles } from '@material-ui/core';
import { BORDER_COLOR } from '../../../../app/theme';

const styles = () => createStyles({
  root: {
  },
  container: {
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 6,
    paddingBottom: 10,
    height: 32,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: BORDER_COLOR,
    '& .MuiTextField-root': {
      width: '100%',
      paddingTop: 14,
    },
    '& .MuiInput-root': {
      fontSize: 16,
      height: 20,
    },
  },
  delete: {
    display: 'none',
  },
  buttom: {
    marginTop: 24,
  },
  icon: {
    height: 36,
    width: 36,
    marginTop: 6,
    paddingTop: 6,
    borderRadius: 5,
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
