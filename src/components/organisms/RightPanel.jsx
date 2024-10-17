import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import { FiSearch } from "react-icons/fi";
import "./RightPanel.css";
import { Tabs } from "@mui/material";
import RequestCards from "../organisms/RequestCards/RequestCards";

const tabs = [
  { id: 1, label: "Overview", value: "1" },
  { id: 2, label: "Attendance", value: "2" },
  { id: 3, label: "Leave Request 2", value: "3" },
  { id: 4, label: "Leave Tracker", value: "4" },
];

const tabPanels = [
  { id: 1, label: "Overview", value: "1" },
  { id: 2, label: "Attendance", value: "2" },
  { id: 3, label: <RequestCards />, value: "3" },
  { id: 4, label: "Leave Tracker", value: "4" },
];

const RightPanel = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="right-panel">
      <h1 className="right-panel-heading">Team</h1>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="#001d6c"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#001d6c",
              },
            }}
            aria-label="lab API tabs example"
          >
            <TabList>
              {tabs.map((tab) => {
                return (
                  <Tab
                    key={tab.id}
                    sx={{
                      textTransform: "none",
                      color: "#21272a",
                      "&.Mui-selected": {
                        color: "#001d6c",
                      },
                      fontSize: "16px",
                      lineHeight: "16px",
                      fontFamily: "Roboto",
                    }}
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
                  />
                );
              })}
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
              height: "56px",
            }}
          >
            <p
              style={{
                fontWeight: 500,
                fontSize: 20,
                marginLeft: "8px",
                color: "#21272a",
              }}
            >
              Request
            </p>
            <form style={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="customSelect">All Requests</label>
              <div>
                <select id="customSelect" style={{ border: 0, width: 30 }}>
                  <option value=""></option>
                  <option value="10">Ten</option>
                  <option value="20">Twenty</option>
                  <option value="30">Thirty</option>
                </select>
              </div>
            </form>
          </Box>
          <Divider />
        </Box>
        <Box sx={{ position: "relative" }}>
          {tabPanels.map((tabPanel) => {
            return (
              <TabPanel value={tabPanel.value} key={tabPanel.id}>
                {tabPanel.label}
              </TabPanel>
            );
          })}
        </Box>
      </TabContext>
    </div>
  );
};

export default RightPanel;
