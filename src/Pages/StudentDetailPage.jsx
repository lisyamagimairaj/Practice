import {
  Button,
  TextField,
  Box,
  Container,
  Paper,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { backend } from "../api/Client";
import { useNavigate } from "react-router-dom";

const dept = ["BCA", "BHA", "BSC", "B.Com", "Msc", "MCA", "BA", "B.Tech"];
const year = ["1st year", "2nd year", "3rd year", "4th year"];

function StudentDetailPage() {
  const navigate=useNavigate();
  const [form, setForm] = React.useState({
    studentId: "",
    department: "",
    Year: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
    };
    const res = await backend.saveName(payload);
    console.log(res);
    setForm({ studentId: "", department: "", Year: "" });
    navigate("/Category")
  };

  const onCancel = () => {
    setForm({ studentId: "", department: "", Year: "" });
  };

  return (
    <Container maxWidth="md">
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Box component="form" onSubmit={submit} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h4">Student Details</Typography>

          <TextField
            variant="outlined"
            label="Student Id"
            fullWidth
            required
            value={form.studentId}
            onChange={(e) => setForm({ ...form, studentId: e.target.value })}
            sx={{ mb: 2, mt: 1}}
          />

          <TextField
            select
            variant="outlined"
            label="Department"
            fullWidth
            required
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            sx={{ mb: 2, mt: 1 }}
          >
            {dept.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            variant="outlined"
            label="Year"
            fullWidth
            required
            value={form.Year}
            onChange={(e) => setForm({ ...form, Year: e.target.value })}
            sx={{ mb: 2, mt: 1 }}
          >
            {year.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </TextField>

          <Button variant="contained" sx={{ mr: 2 }} onClick={onCancel}>
            Clear
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default StudentDetailPage;
