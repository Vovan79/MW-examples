import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import DesktopNavGroup from '../DesktopNavGroup/DesktopNavGroup.component';
import useStyles from './DesktopNavList.styles';

/**
 * split navigation groups into two array
 * for main list and extra list in nav menu
 * @return {{extra: Array, main: Array}}
 */
const getSplitGroups = (itemsByGroup) => {
  const main = Object.keys(itemsByGroup) || [];
  const extra = [];

  return { main, extra, all: [...main, ...extra] };
};

const DesktopNavList = ({ itemsByGroup, className }) => {
  const { main: mainGroups } = getSplitGroups(itemsByGroup);
  const classes = useStyles();
  return (
    <ul className={clsx(classes.navList, className)}>
      {mainGroups.map(groupName => (
        <li className={classes.navListItem} key={groupName}>
          {groupName}

          <DesktopNavGroup items={itemsByGroup[groupName]} />
        </li>
      ))}
    </ul>
  );
};

DesktopNavList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  itemsByGroup: PropTypes.object.isRequired,
  className: PropTypes.string,
};

DesktopNavList.defaultProps = {
  className: undefined,
};

export default DesktopNavList;
