import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <Stack
      sx={{ color: "grey.500", position: "absolute", top: "50%" }}
      spacing={2}
      direction="row"
    >
      <CircularProgress
        color="secondary"
        sx={{ margin: "auto", display: "flex" }}
      />
    </Stack>
  );
}
