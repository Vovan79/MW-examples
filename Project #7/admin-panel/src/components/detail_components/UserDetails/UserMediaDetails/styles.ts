import { createStyles, makeStyles } from '@material-ui/core';
import { BORDER_COLOR } from '../../../../app/theme';

const styles = () => createStyles({
  root: {
    minHeight: 190,
  },
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    '& .MuiTextField-root': {
      width: '45%',
      height: 32,
      borderBottomColor: BORDER_COLOR,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      paddingBottom: 8,
      paddingTop: 8,
    },
    '& .MuiTextField-root:nth-child(odd)': {
      marginRight: '10%',
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
});

const useStyles = makeStyles(styles);

export default useStyles;
