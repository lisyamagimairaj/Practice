import {
  Typography,
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";

("@mui/material");
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="fixed" sx={{ background: "#068b56ff" }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <Typography variant="h5" sx={{ flexGrow: 1, cursor: "pointer" }}>
          Practice 
        </Typography>
        <Stack direction="row" spacing={4}>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`StudentDetailPage`)}
          >
            StudentDetailPage 
          </Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`Category`)}
          >
            Category
          </Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`Contact`)}
          >
            Contact
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
