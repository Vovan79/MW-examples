/**
 * platform form category
 *
 */

// dependencies
import React from 'react';
import * as PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.tableMultiInputRow,
  },
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 200,
  },
  selectItemRoot: {
    height: 30,
  },
  selectSelect: {
    display: 'flex',
    alignItems: 'center',
    height: 30,
  },
}));

const CategoriesList = ({
  platform,
  platformCategoriesList,
  categoriesForm,
  setCategories,
}) => {
  let filteredCategories = platformCategoriesList;
  if ((platform && platform.slug) && (platformCategoriesList && platformCategoriesList.length)) {
    if (platform.slug === 'sportsru') {
      filteredCategories = platformCategoriesList.filter((category) => {
        if (category.name) {
          return !(category.name === 'Рефинансирование кредита' || category.name === 'Карты с рассрочкой');
        }
        return false;
      });
    }
  }

  const classes = useStyles();

  const addCategory = () => {
    setCategories(prevState => [...prevState, { category: '', anchor: '' }]);
  };

  const categoryItems = categoriesForm.map((item, index) => {
    const id = `categoryItem-${index}`;

    return (
      <div key={id} className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor={id}>Выберите категорию*</InputLabel>
          <Select
            value={categoriesForm[index].category}
            input={<OutlinedInput id={id} name={id} labelWidth={150} />}
            onChange={(event) => {
              setCategories((prevState) => {
                const newState = prevState.slice();
                newState[index].category = event.target.value;
                return newState;
              });
            }}
          >
            <MenuItem key="" value="" classes={{ root: classes.selectItemRoot }}>
              Не выбран
            </MenuItem>

            {filteredCategories.map(listItem => (
              <MenuItem key={listItem._id} value={listItem._id}>
                {listItem.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  });

  return (
    <>
      { categoryItems }

      <Box>
        <Button
          size="small"
          variant="contained"
          aria-label="add-category"
          onClick={addCategory}
        >
          <AddIcon color="primary" />
          Добавить категорию
        </Button>
      </Box>
    </>
  );
};

CategoriesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  platform: PropTypes.object.isRequired,
  categoriesForm: PropTypes.arrayOf(PropTypes.object).isRequired,
  platformCategoriesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  setCategories: PropTypes.func.isRequired,
};

export default CategoriesList;
