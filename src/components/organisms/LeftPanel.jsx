import { FiXSquare } from "react-icons/fi";
import "./LeftPanel.css";
import { useEffect, useState } from "react";

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
    <div className="left-panel">
      <div className="logo-container">
        <FiXSquare size={30} />
        <h2 className="logo-text">HRMS</h2>
      </div>
      <ul className="menu-container">
        {menuItems.map((item, index) => {
          return (
            <li className="list-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftPanel;
