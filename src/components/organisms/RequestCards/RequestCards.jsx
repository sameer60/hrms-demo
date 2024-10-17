import LeaveCard from "../../atoms/LeaveCard";
import RequestCard from "../../atoms/RequestCard";
import "./index.css";

const requests = [
  {
    id: 1,
    name: "Raj Mehta",
    role: "Team Lead",
    leaveType: "Casual Leave",
  },
  {
    id: 2,
    name: "Raj Mehta",
    role: "Team Lead",
    leaveType: "Casual Leave",
  },
];

const upcomingLeaves = [
  {
    id: 1,
    name: "Meena K",
    status: "Pending",
  },
  {
    id: 2,
    name: "Raj Mehta",
    status: "Pending",
  },
  {
    id: 3,
    name: "Saurav verma",
    status: "Approved",
  },
];

const RequestCards = () => {
  return (
    <div>
      <div style={{ width: "60%" }}>
        {requests.map((request) => {
          return <RequestCard key={request.id} data={request} />;
        })}
      </div>
      <div className="right-side-panel">
        <div className="right-panel-header">
          <h4 className="right-panel-heading">Upcoming Leaves</h4>
          <h4 className="right-panel-heading">{upcomingLeaves.length}</h4>
        </div>
        <div className="right-panel-body">
          {upcomingLeaves.map((item) => {
            return <LeaveCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RequestCards;
