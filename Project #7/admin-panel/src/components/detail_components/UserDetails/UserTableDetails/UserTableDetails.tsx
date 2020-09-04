import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import UserDetailsTableContent from './UserDetailsTableContent';
import { NAV_ARR } from '../../../../constants/details.constants';
import { fontsInfoType } from '../../../../redux/modules/fonts/selectors';
import useStyles from './styles';

type Props = {
  userDesigns: any[] | [],
  userImages: any[] | [],
  userLogos: any[] | [],
  userFonts: fontsInfoType,
  userSVGs: any[],
};

const UserTableDetails: React.FC<Props> = ({
  userDesigns,
  userImages,
  userLogos,
  userFonts,
  userSVGs,
}) => {
  const classes = useStyles();
  const [menuTab, setMenuTab] = useState(0);

  const handleChange = (event: React.ChangeEvent<any>, newMenuTab: number) => {
    setMenuTab(newMenuTab);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        variant="scrollable"
        value={menuTab}
        classes={{ root: classes.tabs, indicator: classes.indicator }}
        onChange={handleChange}
      >
        <Tab label="Orders ()" />
        <Tab label={`Designs (${userDesigns.length ? userDesigns.length : 0})`} />
        <Tab label={`Images (${userImages.length ? userImages.length : 0})`} />
        <Tab label={`Logos (${userLogos.length ? userLogos.length : 0})`} />
        <Tab label="Stock ()" />
        <Tab label={`Fonts (${userFonts.length ? userFonts.length : 0})`} />
        <Tab label={`SVGs (${userSVGs.length ? userSVGs.length : 0})`} />
      </Tabs>

      <UserDetailsTableContent
        tab={NAV_ARR[menuTab]}
        userDesigns={userDesigns}
        userImages={userImages}
        userLogos={userLogos}
        userFonts={userFonts}
        userSVGs={userSVGs}
      />
    </Paper>
  );
};

export default UserTableDetails;
