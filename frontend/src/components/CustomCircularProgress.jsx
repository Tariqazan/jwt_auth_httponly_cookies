import { CircularProgress, Box } from "@mui/material";

function CustomCircularProgress() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
}

export default CustomCircularProgress;