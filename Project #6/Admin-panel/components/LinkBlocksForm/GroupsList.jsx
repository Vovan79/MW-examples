import React from 'react';
import * as PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LinksList from './LinksList';

const useStyles = makeStyles(() => ({
  linksBlock: {
    marginTop: '10px',
    paddingLeft: '240px',
  },
  deleteButton: {
    height: '46px',
    width: '46px',
    marginLeft: '32px',
  },
}));

const GroupsList = ({
  groupsFormValue,
  setGroupsFormValue,
}) => {
  const classes = useStyles();

  const addPage = () => {
    setGroupsFormValue(prevState => [...prevState, { title: '', links: [{ title: '', url: '' }] }]);
  };

  const groupItems = groupsFormValue.map((group, index) => {
    const id = `groupItem-${index}`;

    return (
      <div style={{ marginBottom: '20px' }} key={id}>
        <TextField
          id="title"
          name="title"
          label="Group Title*"
          variant="outlined"
          margin="none"
          value={group.title}
          onChange={(event) => {
            event.persist();
            setGroupsFormValue((prevState) => {
              const newState = prevState.slice();
              newState[index].title = event.target.value;
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
                newState.splice(index, 1);
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

        <div className={classes.linksBlock}>
          <Typography
            variant="subtitle1"
            component="h6"
            paragraph
          >
            Линки
          </Typography>

          <LinksList
            linksList={group.links}
            groupIndex={index}
            setGroupsFormValue={setGroupsFormValue}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      { groupItems }

      <Box style={{ marginBottom: '20px' }}>
        <Button
          size="small"
          variant="contained"
          aria-label="add-category"
          onClick={addPage}
        >
          <AddIcon color="primary" />
          Добавить группу
        </Button>
      </Box>
    </>
  );
};

GroupsList.propTypes = {
  groupsFormValue: PropTypes.arrayOf(PropTypes.object).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  setGroupsFormValue: PropTypes.func.isRequired,
};

export default GroupsList;
