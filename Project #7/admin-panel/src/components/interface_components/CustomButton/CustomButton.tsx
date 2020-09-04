import React from 'react';
import clsx from 'clsx';
import Button, { ButtonProps } from '@material-ui/core/Button';
import useStyles from './styles';

type Props = {
  variant: 'grey' | 'blue'
};

const CustomButton: React.FC<Omit<ButtonProps, 'variant'> & Props> = ({
  children, variant, className, ...otherProps
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={clsx(className, { [classes.grey]: variant === 'grey', [classes.blue]: variant === 'blue' })}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
