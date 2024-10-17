import LeaveCard from "../../atoms/LeaveCard";
import RequestCard from "../../atoms/RequestCard";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
    <Grid
      container
      spacing={2}
      justifyContent="left"
      gap="24px"
      alignItems="flex-start"
    >
      <Grid item size={{ xs: 12, md: 7 }}>
        <Box>
          {requests.map((request) => (
            <RequestCard key={request.id} data={request} />
          ))}
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, md: 4 }}>
        <Card
          elevation={0}
          sx={{ p: 3, backgroundColor: "#e2e2e2", borderRadius: "24px" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="24px"
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "24px", lineHeight: "26.4px" }}
            >
              Upcoming Leaves
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "24px", lineHeight: "26.4px" }}
            >
              {upcomingLeaves.length}
            </Typography>
          </Box>

          <CardContent sx={{ p: 0, pb: 0 }}>
            {upcomingLeaves.map((item) => (
              <LeaveCard key={item.id} data={item} />
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RequestCards;
