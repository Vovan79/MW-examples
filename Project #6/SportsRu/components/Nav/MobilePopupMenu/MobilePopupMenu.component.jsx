/**
 * mobile nav menu
 */

// dependencies
import React from 'react';
import * as PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';
import Accordion from '../../Accordion';
import ActiveNextLink from '../../ActiveNextLink';
import CategoryLink from './CategoryLink';
import useStyles from './MobilePopupMenu.styles';


const MobilePopupMenuComponent = ({ handleClose, itemsByGroup }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {Object.keys(itemsByGroup).map(groupName => (
        <Accordion
          key={groupName}
          label={groupName}
          list={(
            <nav className={classes.list}>
              {itemsByGroup[groupName].map(({
                                              slug, name, as, href,
                                            }) => (
                <div className={classes.item} key={slug}>
                  <ActiveNextLink
                    key={slug}
                    as={as}
                    href={href}
                  >
                    <CategoryLink onClick={handleClose}>
                      {name}
                    </CategoryLink>
                  </ActiveNextLink>
                </div>
              ))}
            </nav>
          )}
        />
      ))}
    </Paper>
  );
};

MobilePopupMenuComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  itemsByGroup: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MobilePopupMenuComponent;
