import { createStyles, makeStyles } from '@material-ui/core';
import { BORDER_COLOR, BLUE_COLOR } from '../../../../app/theme';

const styles = () => createStyles({
  root: {
    marginTop: 20,
  },
  container: {
    padding: 30,
    paddingTop: 0,
    '& .MuiTextField-root': {
      width: '100%',
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
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: BLUE_COLOR,
    color: '#fff',
  },
  input: {
    display: 'none',
  },
  label: {
    width: '100%',
  },
  preview: {
    borderColor: '#fff !important',
  },
});

const useStyles = makeStyles(styles);

export default useStyles;
