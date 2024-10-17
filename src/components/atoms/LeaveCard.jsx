/* eslint-disable react/prop-types */
import { Card, Avatar, Box, Typography, TextField, Chip } from "@mui/material";

const LeaveCard = ({ data }) => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginBottom: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "40px",
            width: "40px",
            backgroundColor: "#d9d9d9",
            borderRadius: "50%",
          }}
        />
        <Chip
          label={data.status}
          sx={{
            backgroundColor: data.status === "Pending" ? "#d9d9d9" : "#a6f9bb",
            borderRadius: "16px",
            fontSize: "14px",
            lineHeight: "19.6px",
            fontWeight: "400",
            color: "#3E3E3E",
            py: "2px",
            px: "8px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#8E8E93",
            fontSize: "16px",
            lineHeight: "17.6px",
            fontWeight: "500",
          }}
        >
          {data.name}
        </Typography>
        <Typography
          sx={{
            color: "#8E8E93",
            fontSize: "14px",
            lineHeight: "15.4px",
            fontWeight: "400",
          }}
        >
          mixed leaves
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#8E8E93",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          04/07/2024 to 10/07/2024
        </Typography>
        <Typography
          sx={{
            color: "#8E8E93",
            fontSize: "14px",
            lineHeight: "15.4px",
            fontWeight: 400,
          }}
        >
          6 Days
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            color: "#aeaeb2",
            fontSize: "16px",
            marginBottom: "8px",
          }}
        >
          Note
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          sx={{
            borderRadius: "16px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
            },
          }}
        />
      </Box>
    </Card>
  );
};

export default LeaveCard;
