import { Alert } from "@mui/material";

type ErrorAlertProps = {
  message?: string;
};

function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <Alert variant="filled" severity="error">
      {message}
    </Alert>
  );
}

export default ErrorAlert;
