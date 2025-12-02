import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const cat = ["infrastructure", "canteen", "Hostel"];
function Category() {
  const navigate = useNavigate();
  const [selectCategory, setSelectCategory] = useState("");

  const handleChange = async (e) => {
    setSelectCategory(e.target.value);
  };
  const handleGo = () => {
    navigate(`/${selectCategory}`);
  };

  return (
    <Box sx={{ p: 10 }}>
      <TextField
        select
        fullWidth
        label="select Category"
        variant="outlined"
        value={selectCategory}
        onChange={handleChange}
        sx={{ mr: 16 }}
      >
        {cat.map((c) => (
          <MenuItem key={c} value={c} sx={{ p: 1 }}>
            {c}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleGo}>
        go
      </Button>
    </Box>
  );
}

export default Category;
