import "./App.css";
import LeftPanel from "./components/organisms/LeftPanel";
import RightPanel from "./components/organisms/RightPanel";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <LeftPanel />
      <RightPanel />
    </Box>
  );
}

export default App;
