import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FiXSquare } from "react-icons/fi";

const menuItems = [
  "Home",
  "Time Tracker",
  "Leave Tracker",
  "Attendance",
  "Me/Self Service",
  "Team",
  "Payslip",
  "Report",
];

const LeftPanel = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        py: "24px",
        px: "16px",
        borderRight: "1px solid #dde1e6",
        "& .MuiDrawer-paper": { width: 270, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 2, mb: "16px" }}>
        <FiXSquare size={24} />
        <Typography
          variant="h6"
          sx={{
            ml: "4px",
            color: "#697077",
            fontSize: "24px",
            lineHeight: "26.4px",
            fontWeight: "700",
          }}
        >
          HRMS
        </Typography>
      </Box>
      <List sx={{ py: "12px", px: "8px" }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              border: "1px solid #f2f4f8",
              "&:hover": {
                backgroundColor: "#f2f4f8",
              },
            }}
          >
            <ListItemText
              primary={item}
              sx={{
                color: "#21272A",
                fontSize: "16px",
                lineHeight: "16px",
                fontWeight: "500",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default LeftPanel;
