/* eslint-disable react/prop-types */
import "./LeaveCard.css";
const LeaveCard = ({ data }) => {
  return (
    <div className="mini-card">
      <div className="mini-card-header">
        <div className="mini-card-user-image"></div>
        <div
          className={
            data.status === "Pending"
              ? "mini-card-user-pending-status"
              : "mini-card-user-approved-status"
          }
        >
          {data.status}
        </div>
      </div>
      <div className="mini-card-name-section">
        <h4 className="mini-card-user-name">{data.name}</h4>
        <p className="mini-card-user-leaves">mixed leaves</p>
      </div>
      <div className="mini-card-date-section">
        <p className="mini-card-date">04/07/2024 to 10/07/2024</p>
        <p className="mini-card-number-days">6 Days</p>
      </div>
      <div className="mini-card-note-section">
        <p className="mini-card-note-label">Note</p>
        <input type="text" className="mini-card-note-input" />
      </div>
    </div>
  );
};

export default LeaveCard;
