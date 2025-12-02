import React from "react";
import {
  TextField,
  Button,
  Paper,
  Container,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { backend } from "../api/Client";

const feed = ["good", "bad", "neutral"];

function Contact() {
  const [name, setName] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  const onText = (e) => {
    setName(e.target.value);
  };

  const onSend = async () => {
    const sendname = await backend.saveContactName(name, feedback);
    console.log(sendname);
    setName("");
    setFeedback("");
  };

  const handleFeedback = async (e) => {
    setFeedback(e.target.value);
  };

  return (
    <Container maxWidth="md">
      <Paper variant="outlined" sx={{ p: 5 }}>
        <Typography variant="body2">Suggestion</Typography>
        <Box  sx={{ p: 2,}}>
          <TextField
            label="Name"
            variant="standard"
            fullWidth
            value={name}
            onChange={onText}
            sx={{ mr: 5 }}
          ></TextField>
          <TextField
            select
            fullWidth
            label="feedback"
            variant="standard"
            value={feedback}
            onChange={handleFeedback}
            sx={{ mr: 2, mb: 2 }}
          >
            {feed.map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" onClick={onSend}>
            send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
export default Contact;
