/* eslint-disable react/prop-types */
import Button from "./Button";
import "./RequestCard.css";

const RequestCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="name-container">
          <div className="user-image"></div>
          <div className="user-name-role">
            <p className="user-name">{data.name}</p>
            <p className="user-role">{data.role}</p>
          </div>
        </div>
        <div className="leave-type">
          <p style={{ color: "#2e3a59" }}>Leave Type</p>
          <p style={{ marginTop: 5 }}>{data.leaveType}</p>
        </div>
        <div className="leave-balance">Check Leave balance</div>
      </div>
      <div className="card-body">
        <div className="data-container">
          <p className="date-from-to">From</p>
          <p className="time">Second Half</p>
          <div className="date">05/07/2024</div>
        </div>
        <div className="data-container">
          <p className="date-from-to">To</p>
          <p className="time">Second Half</p>
          <div className="date">05/07/2024</div>
        </div>
        <div className=""></div>
      </div>
      <div className="reason">
        <p className="reason-heading">Reason</p>
        <p className="reason-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          aut laudantium harum. Nam aspernatur repellat consequuntur iusto
          dignissimos, rem blanditiis.
        </p>
      </div>
      <div className="card-footer">
        <Button text="Approve" variant="approve" />
        <Button text="Reject" variant="reject" />
      </div>
    </div>
  );
};

export default RequestCard;
