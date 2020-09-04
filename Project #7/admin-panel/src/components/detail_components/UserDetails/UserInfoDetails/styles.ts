import { createStyles, makeStyles } from '@material-ui/core';
import { BORDER_COLOR } from '../../../../app/theme';

const styles = () => createStyles({
  root: {
    height: 460,
  },
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    '& .MuiTextField-root': {
      width: '30%',
      height: 32,
      borderBottomColor: BORDER_COLOR,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      paddingBottom: 8,
      paddingTop: 8,
    },
    '& .MuiInput-root': {
      fontSize: 16,
      height: 20,
    },
    '& .MuiInput-underline': {
      fontSize: 16,
      height: 20,
    },
    '& .MuiInputLabel-root': {
      color: '#000',
    },
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: 16,
  },
  select: {
    textAlign: 'left',
  },
  address: {
    width: '100%',
    marginTop: 16,
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
