import React from 'react';
import {
  ListItem, Grid, Typography, WithStyles,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import styles from './styles';

type Props = {
  label?: string,
  icon?: React.ElementType,
  path?: string,
  selected?: boolean,
  onMenuClick?: any,
} & WithStyles<typeof styles>;

const MenuItem: React.FC<Props> = ({
  classes, label, icon: Icon, selected, onMenuClick,
}) => (
  <ListItem
    button
    key={label}
    dense
    selected={selected}
    className={clsx(selected && classes.selected)}
    disableGutters
    onClick={(event: React.MouseEvent<HTMLDivElement>) => onMenuClick(event, label)}
  >
    <Grid container direction="column" justify="flex-start" spacing={0} alignItems="center">
      <Grid item style={{ height: 30 }}>
        {
          Icon
            ? <Icon width="30" height="30" className={classes.icon} />
            : <InboxIcon fontSize="large" className={classes.icon} />
        }
      </Grid>
      {label && (
      <Grid item>
        <Typography variant="caption" className={clsx(classes.icon, classes.menuText)}>
          {label}
        </Typography>
      </Grid>
      ) }
    </Grid>
  </ListItem>
);

MenuItem.defaultProps = {
  onMenuClick: () => undefined,
};

export default MenuItem;
