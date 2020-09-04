import React, { useEffect } from 'react';
import { useSnackbar, VariantType } from 'notistack';
import { Button } from '@material-ui/core';
import { deleteRequestsError as DeleteRequestsError } from '../../../redux/modules/userData/actions';
import { RequestError } from '../../../redux/modules/userData/types';

type Props = {
  deleteRequestsError: typeof DeleteRequestsError,
  requestErrors: RequestError[],
};

type DeleteMessageAction = typeof DeleteRequestsError;

type Notification = {
  message: string,
  type: VariantType,
  deleteMessageAction: DeleteMessageAction,
  messageIdentifier: ReturnType<DeleteMessageAction>['payload'],
};

const Notifier: React.FC<Props> = ({ deleteRequestsError, requestErrors }) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const formattedRequestErrors = requestErrors.map(error => ({
      message: `Error: ${error.error}`,
      type: 'error',
      deleteMessageAction: deleteRequestsError,
      messageIdentifier: error.requestName,
    }) as const);

    const notifications: Notification[] = [
      ...formattedRequestErrors,
    ];

    notifications.forEach((
      {
        message,
        type,
        deleteMessageAction,
        messageIdentifier,
      },
    ) => {
      enqueueSnackbar(
        message,
        {
          key: messageIdentifier,
          variant: type,
          preventDuplicate: true,
          onClose: () => deleteMessageAction(messageIdentifier),
          action: () => (
            <Button
              color="inherit"
              onClick={() => deleteMessageAction(messageIdentifier)}
            >
              Close
            </Button>
          ),
        },
      );
    });
  }, [deleteRequestsError, requestErrors, enqueueSnackbar]);

  return null;
};

export default Notifier;
