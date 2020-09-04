import React from 'react';
import { Typography } from '@material-ui/core';

const ErrorMessages: React.FC<{ errorMessages: string[] }> = ({ errorMessages }) => {
  if (errorMessages.length === 0) {
    return null;
  }

  return (
    <Typography style={{ color: 'red' }}>
      {`Errors: ${errorMessages.join(', ')}.`}
    </Typography>
  );
};

export default ErrorMessages;
