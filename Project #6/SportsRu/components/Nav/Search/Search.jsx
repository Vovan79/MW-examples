/**
 * search component for main menu navigation
 *
 */

// dependencies
import React, { useRef } from 'react';
import * as PropTypes from 'prop-types';

import Downshift from 'downshift';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import clsx from 'clsx';
import Axios from '../../Axios';

import useOutsideClick from '../../../hooks/useOutsideClick';
import useStyles from './Search.styles';
import List from './List/List';

function Search({ isOpen: isOpenInput, onChangeIsOpen }) {
  const searchRef = useRef();
  const inputRef = useRef();

  const searchContainerNode = useOutsideClick(() => {
    onChangeIsOpen(false);
  });

  const open = () => {
    onChangeIsOpen(true);
    inputRef.current.focus();
  };

  const classes = useStyles({ isOpenInput });

  return (
    <Downshift id="search-nav" itemToString={item => (item ? item.value : '')}>
      {({
          getInputProps, isOpen, getRootProps, inputValue,
        }) => (
        <form
          className={classes.form}
          {...getRootProps(
            {
              ref: searchContainerNode,
            },
            { suppressRefError: true },
          )}
        >
          <div
            className={clsx(
              classes.inputContainer,
              isOpenInput && classes.openInput,
            )}
            ref={searchRef}
            onClick={open}
            role="button"
            onKeyDown={() => undefined}
            tabIndex={0}
          >
            <button
              className={classes.searchButton}
              type="submit"
              onClick={event => event.preventDefault()}
              aria-label="submit search"
            >
              <SearchIcon className={classes.icon} />
            </button>

            <input
              ref={inputRef}
              name="phrase"
              type="text"
              placeholder="Поиск"
              aria-label="search input"
              {...getInputProps()}
              className={classes.input}
            />
            {isOpenInput && (
              <button
                className={classes.searchButton}
                onClick={(event) => {
                  event.preventDefault();
                  inputRef.current.value = '';
                }}
                type="button"
              >
                <CloseIcon className={classes.icon} />
              </button>
            )}
          </div>

          {isOpen && isOpenInput && (
            <Axios url="/searchCategories" params={{ find: inputValue }}>
              {({ data }) => data && (
                <List
                  categories={data.categories}
                  mainCategories={data.mainCategories}
                />
              )
              }
            </Axios>
          )}
        </form>
      )}
    </Downshift>
  );
}

Search.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChangeIsOpen: PropTypes.func.isRequired,
};

export default Search;
