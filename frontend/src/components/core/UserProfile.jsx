import React from "react";
import { Avatar, Typography, Box } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

const UserProfile = () => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        mb={1}
      >
        <Avatar
          src="https://i.pravatar.cc/150?img=10"
          alt="User Avatar"
          sx={{ width: 64, height: 64 }}
        />
          <Typography variant="body2">
            <strong>Posts:</strong> 21
          </Typography>
          <Typography variant="body2">
            <strong>Followers:</strong> 54
          </Typography>
          <Typography variant="body2">
            <strong>Following:</strong> 32
          </Typography>
      </Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        John Doe
      </Typography>
      <Typography variant="body2" sx={{ color: "#909BAD", mb: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Box display="flex" alignItems="center">
        <LocationOn sx={{ mr: 1 }} />
        <Typography variant="body2">
          <strong>Address:</strong> New York, USA
        </Typography>
      </Box>
    </div>
  );
};

export default UserProfile;
