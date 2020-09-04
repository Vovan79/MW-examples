import React from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  MenuItem,
} from '@material-ui/core';
import {
  FONT_COMBO_SETTINGS_COLUMNS as headcolumns,
  FONT_COMBO_SETTINGS_SIZES as combosizes,
  FONT_COMBO_SETTINGS_HEIGHT as comboheights,
  FONT_COMBO_SETTINGS_SPACING as combospacings,
} from '../../../../constants/details.constants';
import { FontData } from '../../../../redux/modules/fonts/types';
import getFontNameById from '../../../../helpers/connect-font.helper';
import useStyles from './styles';

type Props = {
  fonts: FontData[] | undefined,
  settings: {
    name: string,
    fontId: number,
    size: number,
    lineHeight: number,
    letterSpacing: number,
  }[],
  onHandleSettingsChange: any,
};

const FontComboSettingDetails: React.FC<Props> = ({ fonts, settings, onHandleSettingsChange }) => {
  const classes = useStyles();

  const showName = (name: string) => {
    switch (name) {
      case 'h1':
        return 'h1.Heading';
      case 'h2':
        return 'h2.Heading';
      case 'h3':
        return 'h3.Heading';
      default:
        return name;
    }
  };

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow className={classes.header}>
            {headcolumns.map((column: any) => (
              <TableCell
                className={classes.headerCell}
                key={column.name}
                align="center"
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            settings.map((row: any, index: number) => (
              <TableRow key={row.name}>
                <TableCell align="center">
                  <p
                    style={{
                      fontSize: `${row.size}pt`,
                      fontFamily: getFontNameById(fonts, row.fontId),
                      lineHeight: `${row.lineHeight}pt`,
                      letterSpacing: row.letterSpacing,
                    }}
                  >
                    {showName(row.name)}
                  </p>
                </TableCell>
                <TableCell classes={{ root: classes.font }} align="center">
                  <TextField
                    select
                    SelectProps={{ classes: { root: classes.select } }}
                    name="fontId"
                    value={row.fontId}
                    onChange={(event: any) => onHandleSettingsChange(event, index)}
                  >
                    {
                      fonts
                        ? fonts.map((item: FontData) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.name}
                          </MenuItem>
                        ))
                        : []
                    }
                  </TextField>
                </TableCell>
                <TableCell classes={{ root: classes.size }} align="center">
                  <TextField
                    select
                    SelectProps={{ classes: { root: classes.select }, MenuProps: { classes: { paper: classes.menu } } }}
                    name="size"
                    value={row.size}
                    onChange={(event: any) => onHandleSettingsChange(event, index)}
                  >
                    {
                      combosizes.map((item: number) => (
                        <MenuItem key={item} value={item}>
                          {`${item}pt`}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </TableCell>
                <TableCell classes={{ root: classes.height }} align="center">
                  <TextField
                    select
                    SelectProps={{ classes: { root: classes.select }, MenuProps: { classes: { paper: classes.menu } } }}
                    name="lineHeight"
                    value={row.lineHeight}
                    onChange={(event: any) => onHandleSettingsChange(event, index)}
                  >
                    {
                      comboheights.map((item: number) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </TableCell>
                <TableCell classes={{ root: classes.spacing }} align="center">
                  <TextField
                    select
                    SelectProps={{ classes: { root: classes.select }, MenuProps: { classes: { paper: classes.menu } } }}
                    name="letterSpacing"
                    value={row.letterSpacing}
                    onChange={(event: any) => onHandleSettingsChange(event, index)}
                  >
                    {
                      combospacings.map((item: number) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FontComboSettingDetails;
