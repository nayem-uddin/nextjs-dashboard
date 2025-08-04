import { CircularProgress, Backdrop } from "@mui/material";
export default function LoadingAnim() {
  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
