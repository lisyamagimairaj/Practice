import React from "react";
import { Typography, Box, TextField, Button, MenuItem } from "@mui/material";
import { backend } from "../api/Client";
const subcat = ["Classroom", "Electricity", "Cleaning", "others"];
function Infrastructure() {
  const [selectSubcat, setSelectSubCat] = React.useState("");
  const [issue, setIssue] = React.useState("");

  const onSelectSub = async (e) => {
    setSelectSubCat(e.target.value);
  };

  const onTextIssue = async (e) => {
    setIssue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await backend.saveInfraDetails(selectSubcat, issue);
    setSelectSubCat("");
    setIssue("");
  };
  return (
    <Box sx={{ minHeight: "100vh", p: 3, mt: 8 }}>
      <Typography variant="h4">
        "Give ur suggestions for Infrastrcuture related issues."
      </Typography>
      <Box sx={{ mt: 9, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          select
          label="select the subcategory"
          fullWidth
          multiline
          value={selectSubcat}
          onChange={onSelectSub}
        >
          {subcat.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Explain your Issue"
          fullWidth
          value={issue}
          onChange={onTextIssue}
          multiline
        ></TextField>
        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
export default Infrastructure;
