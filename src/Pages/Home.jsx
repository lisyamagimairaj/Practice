import { DoneAll } from "@mui/icons-material";
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

("@mui/material");
function Home() {
  const navigate = useNavigate();
  const [openRuleDialog, setOpenRuleDialog] = React.useState("false");

  const onRuleDialog = () => {
    setOpenRuleDialog(true);
  };

  const oncloseDialog = () => {
    setOpenRuleDialog(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "rgba(0, 67, 45, 1)",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="column" spacing={3}>
          <Typography variant="h3" color="#ffff">
            Student suggestion portal
          </Typography>

          <Button variant="contained" onClick={onRuleDialog}>
            Give a Suggestion
          </Button>
        </Stack>
        <Dialog open={openRuleDialog} onClose={oncloseDialog}>
          <DialogTitle>Agree to the terms</DialogTitle>
          <DialogContent>
            Your suggestion will be reviewed by admin and Only college-related
            Topics allowed
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => navigate(`/StudentDetailPage`)}>
              agree
            </Button>
            <Button variant="contained" onClick={oncloseDialog}>
              cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </React.Fragment>
  );
}
export default Home;
