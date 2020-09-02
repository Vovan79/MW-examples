import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  form: {
    position: ({ isOpenInput }) => (isOpenInput ? 'absolute' : 'relative'),
    top: ({ isOpenInput }) => (isOpenInput && '7px'),
    left: ({ isOpenInput }) => (isOpenInput && '25px'),
    width: ({ isOpenInput }) => (isOpenInput ? 'calc(100% - 50px)' : 'auto'),
    [theme.breakpoints.down('sm')]: {
      top: ({ isOpenInput }) => (isOpenInput && '7px'),
    },
  },
  inputContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '34px',
    height: '34px',
    borderRadius: '17px',
    backgroundColor: 'rgba(30, 123, 188, 0.1)',
  },
  openInput: {
    width: '100%',
    borderRadius: '2px',
    opacity: 1,
    backgroundColor: theme.colors.background,
  },
  searchButton: {
    width: '50px',
    height: '34px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:focus': {
      outline: 'none',
    },
  },
  icon: {
    height: '20px',
    width: '20px',
    transition: 'all 300ms ease',
    color: theme.colors.white,
    opacity: 1,
  },
  input: {
    height: '34px',
    border: 'none',
    backgroundColor: 'transparent',
    width: ({ isOpenInput }) => (isOpenInput ? 'calc(100% - 100px)' : 0),
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
    color: theme.colors.white,
  },
}), { name: 'Search' });

export default useStyles;
