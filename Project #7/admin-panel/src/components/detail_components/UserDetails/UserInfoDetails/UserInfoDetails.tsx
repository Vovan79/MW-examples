import React from 'react';
import { Paper, TextField, MenuItem } from '@material-ui/core';
import PaperHeader from '../../../interface_components/PaperHeader';
import { SELECT_ARR } from '../../../../constants/details.constants';

import useStyles from './styles';

type Props = {
  data: any,
  title: string,
  onHandleEntityChange: any,
  isCurrentUser: boolean,
};

const UserInfoDetails: React.FC<Props> = ({
  data,
  title,
  onHandleEntityChange,
  isCurrentUser,
}) => {
  const classes = useStyles();

  const {
    firstname,
    lastname,
    jobtitle,
    businessname,
    website,
    email,
    role,
    phone,
    mobile,
    address,
    suburb,
    state,
    postcode,
  } = data;

  const { states } = SELECT_ARR;

  return (
    <Paper className={classes.root}>
      <PaperHeader title={title} />
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.row}>
          <TextField
            name="firstname"
            value={firstname}
            label="First Name"
            onInput={onHandleEntityChange}
          />
          <TextField
            name="lastname"
            value={lastname}
            label="Last Name"
            onInput={onHandleEntityChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="jobtitle"
            value={jobtitle}
            label="Job Title"
            onInput={onHandleEntityChange}
          />
          <TextField
            name="businessname"
            value={businessname}
            label="Business Name"
            onInput={onHandleEntityChange}
          />
          <TextField
            name="website"
            value={website}
            label="Website"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="email"
            value={email}
            label="Email"
            type="email"
            onInput={onHandleEntityChange}
          />
          <TextField
            name="phone"
            value={phone}
            label="Phone"
            onInput={onHandleEntityChange}
          />
          <TextField
            name="mobile"
            value={mobile}
            label="Mobile"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.address}>
          <TextField
            name="address"
            value={address}
            label="Address"
            InputProps={{ disableUnderline: true }}
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            name="suburb"
            value={suburb}
            label="Suburb"
            type="email"
            onInput={onHandleEntityChange}
          />
          <TextField
            select
            SelectProps={{ classes: { root: classes.select } }}
            name="state"
            value={state}
            label="State"
            onChange={onHandleEntityChange}
          >
            {states.map(item => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="postcode"
            value={postcode}
            label="Postcode"
            onInput={onHandleEntityChange}
          />
        </div>
        <div className={classes.row}>
          <TextField
            select
            SelectProps={{ classes: { root: classes.select } }}
            name="role"
            value={role}
            label="User Role"
            onChange={onHandleEntityChange}
            disabled={Boolean(isCurrentUser)}
          >
            {['user', 'designer', 'admin'].map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </form>
    </Paper>
  );
};

export default UserInfoDetails;
