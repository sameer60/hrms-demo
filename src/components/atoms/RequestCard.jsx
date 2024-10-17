/* eslint-disable react/prop-types */
import { Box, Typography, Button, Paper } from "@mui/material";

const RequestCard = ({ data }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        p: "24px",
        mb: 4,
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        borderRadius: "12px",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 44,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#d9d9d9",
              borderRadius: "50%",
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                margin: 0,
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "20px",
                color: "#1D1D1D",
                mb: "8px",
              }}
            >
              {data.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                margin: 0,
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "16px",
                color: "#1D1D1D",
              }}
            >
              {data.role}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            color="#2e3a59"
            sx={{
              margin: 0,
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "16px",
              color: "#2E3A59",
              mb: "8px",
            }}
          >
            Leave Type
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "16px",
              color: "#2E3A59",
            }}
          >
            {data.leaveType}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "none",
            borderRadius: "4px",
            borderColor: "#e9eafa",
            color: "#263238",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "12px",
            p: "10px",
          }}
        >
          Check Leave balance
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: { xs: 2, md: 3 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="body2" color="#a1a1a5">
            From
          </Typography>
          <Typography sx={{ color: "#757575", mt: "8px" }}>
            Second Half
          </Typography>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              px: "16px",
              py: "12px",
              mt: "8px",
            }}
          >
            05/07/2024
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="body2" color="#a1a1a5">
            To
          </Typography>
          <Typography sx={{ color: "#757575", mt: "8px" }}>
            Second Half
          </Typography>
          <Box
            sx={{
              border: "1px solid #d9d9d9",
              borderRadius: "12px",
              px: "16px",
              py: "12px",
              mt: "8px",
            }}
          >
            10/07/2024
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="#aeaeb2">
          Reason
        </Typography>
        <Typography sx={{ mt: "8px", color: "#818186" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          aut laudantium harum. Nam aspernatur repellat consequuntur iusto
          dignissimos, rem blanditiis.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          mt: 3,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            bgcolor: "#65558f",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            height: "40px",
            width: "100%",
            borderRadius: "8px",
          }}
        >
          Approve
        </Button>
        <Button
          variant="outlined"
          color="#79747e"
          sx={{
            textTransform: "none",
            color: "#65558f",
            bgcolor: "#fff",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            height: "40px",
            width: "100%",
            borderRadius: "8px",
          }}
        >
          Reject
        </Button>
      </Box>
    </Paper>
  );
};

export default RequestCard;
