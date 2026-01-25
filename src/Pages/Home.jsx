import {
  Typography,
  Box,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
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
      <Box sx={{ minHeight: "100vh", p: 3, mt: 8 ,}}>
        <Box sx={{ p: 2, mb: 2 }}>
          <Stack direction="column" spacing={3}>
            <Typography variant="h3">Student suggestion portal</Typography>
          </Stack>
          <Button variant="contained" sx={{ mt: 3 }} onClick={onRuleDialog}>
            Give a Suggestion
          </Button>
        </Box>
        <Dialog open={openRuleDialog} onClose={oncloseDialog}>
          <DialogTitle>Agree to the terms</DialogTitle>
          <DialogContent>
            Your suggestion will be reviewed by admin and Only college-related
            Topics allowed
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={() => navigate(`/StudentDetailPage`)}
            >
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
