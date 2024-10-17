import React from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import RequestCards from "./RequestCards/RequestCards";

const tabs = [
  { id: 1, label: "Overview", value: "1" },
  { id: 2, label: "Attendance", value: "2" },
  { id: 3, label: "Leave Requests 2", value: "3" },
  { id: 4, label: "Leave Tracker", value: "4" },
];

const tabPanels = [
  { id: 1, value: "1", label: "Overview Content" },
  { id: 2, value: "2", label: "Attendance Content" },
  { id: 3, value: "3", label: <RequestCards /> },
  { id: 4, value: "4", label: "Leave Tracker Content" },
];

const RightPanel = () => {
  const [value, setValue] = React.useState("1");
  const [selectValue, setSelectValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, py: 3, px: 7, bgcolor: "#f2f4f8" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#21272a",
          fontWeight: "700",
          fontSize: "42px",
          lineHeight: "46px",
          mb: "24px",
        }}
      >
        Team
      </Typography>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "24px",
            ml: "-10px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Team tabs"
            sx={{ "& .MuiTab-root": { textTransform: "none", fontSize: 16 } }}
          >
            <TabList>
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  label={
                    <span>
                      {(() => {
                        const parts = tab.label.split(" ");
                        const lastPart = parts[parts.length - 1];
                        if (!isNaN(lastPart)) {
                          return (
                            <>
                              {parts.slice(0, -1).join(" ")}{" "}
                              <span
                                style={{
                                  backgroundColor: "#697077",
                                  fontWeight: 400,
                                  color: "#fff",
                                  marginLeft: "4px",
                                  borderRadius: "12px",
                                  padding: "0.5px 5.5px",
                                }}
                              >
                                {lastPart}
                              </span>
                            </>
                          );
                        } else {
                          return tab.label;
                        }
                      })()}
                    </span>
                  }
                  value={tab.value}
                  sx={{
                    color: "#21272a",
                    "&.Mui-selected": { color: "#001d6c" },
                  }}
                />
              ))}
            </TabList>
          </Tabs>
          <TextField
            id="input-with-icon-textfield"
            sx={{ height: 14, width: "30%" }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FiSearch size={19} />
                  </InputAdornment>
                ),
                placeholder: "Search for..",
              },
            }}
            variant="standard"
            color="#001d6c"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            ml: "5px",
            width: "59%",
            height: "56px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#21272a",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "16px",
            }}
          >
            Request
          </Typography>
          <Select
            id="customSelect"
            value={selectValue}
            onChange={handleSelectChange}
            IconComponent={FiChevronDown}
            displayEmpty
            sx={{
              width: 150,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // Removes the border
              },
              "& .MuiSelect-icon": {
                right: "20px",
                fontSize: 20,
                fontWeight: "700",
                color: "#1C1B1F",
              },
            }}
          >
            <MenuItem value="">
              <p>All Requests</p>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>

        <Divider />

        <Box sx={{ position: "relative", mt: 3 }}>
          {tabPanels.map((tabPanel) => (
            <TabPanel value={tabPanel.value} key={tabPanel.id} sx={{ p: 0 }}>
              {tabPanel.label}
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </Box>
  );
};

export default RightPanel;
