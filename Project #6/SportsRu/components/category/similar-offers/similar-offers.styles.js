export function styles(theme) {
  return {
    wrapper: {
      marginBottom: '20px',

      [theme.breakpoints.down('sm')]: {
        marginBottom: '50px',
      },
    },
    offersList: {
      background: theme.colors.white,
      '& $offersListItem': {
        '&:last-of-type': {
          '&:after': {
            display: 'block',
          },
        },
      },
    },
    offersListItem: {
      background: theme.colors.white,

      '&:after': {
        position: 'relative',
        display: 'block',
        background: '#000000',
        opacity: '0.1',
        content: '""',
        width: '100%',
        height: '1px',
      },
    },
    moreButton: {
      background: theme.colors.white,
      padding: 0,
      margin: '10px 0 70px',

      [theme.breakpoints.down('sm')]: {
        margin: '0 0 40px',
        padding: 0,
      },
    },
    notFound: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  };
}
