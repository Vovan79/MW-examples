import React from 'react';
import * as PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.tableMultiInputRow,
  },
  deleteButton: {
    height: '46px',
    width: '46px',
  },
}));

const LinksList = ({ linksList, groupIndex, setGroupsFormValue }) => {
  const classes = useStyles();

  const addLink = () => {
    setGroupsFormValue((prevState) => {
      const newState = prevState.slice();
      newState[groupIndex].links.push({ title: '', url: '' });
      return newState;
    });
  };

  const linkItems = linksList.map((link, index) => {
    const id = `groupItem-${index}`;

    return (
      <div style={{ marginBottom: '20px' }} key={id} className={classes.root}>
        <TextField
          id="title"
          name="title"
          label="Link Title*"
          variant="outlined"
          margin="none"
          value={link.title}
          onChange={(event) => {
            event.persist();
            setGroupsFormValue((prevState) => {
              const newState = prevState.slice();
              newState[groupIndex].links[index] = { title: event.target.value, url: link.url };
              return newState;
            });
          }}
        />

        <TextField
          id="url"
          name="url"
          label="Link URL*"
          variant="outlined"
          margin="none"
          value={link.url}
          onChange={(event) => {
            event.persist();
            setGroupsFormValue((prevState) => {
              const newState = prevState.slice();
              newState[groupIndex].links[index] = { title: link.title, url: event.target.value };
              return newState;
            });
          }}
        />

        {(index >= 1) && (
          <Button
            className={classes.deleteButton}
            onClick={() => {
              setGroupsFormValue((prevState) => {
                const newState = prevState.slice();
                newState[groupIndex].links.splice(index, 1);
                return newState;
              });
            }}
          >
            <CancelIcon
              color="secondary"
              style={{ width: '100%' }}
            />
          </Button>
        )}
      </div>
    );
  });

  return (
    <>
      { linkItems }

      <Box>
        <Button
          size="small"
          variant="contained"
          aria-label="add-category"
          onClick={addLink}
        >
          <AddIcon color="primary" />
          Добавить линк
        </Button>
      </Box>
    </>
  );
};

LinksList.propTypes = {
  linksList: PropTypes.arrayOf(PropTypes.object).isRequired,
  groupIndex: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  setGroupsFormValue: PropTypes.func.isRequired,
};

export default LinksList;
