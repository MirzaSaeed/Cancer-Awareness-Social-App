import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

const FriendList = () => {
  const friends = [
    {
      id: 1,
      name: 'Tom Curise',
      avatar: "https://i.pravatar.cc/150?img=11",

    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: "https://i.pravatar.cc/150?img=22",

    },
    {
      id: 3,
      name: 'Michael Johnson',
      avatar: "https://i.pravatar.cc/150?img=44",
    }
  ];

  return (
    <Box sx={{ p: 1, pt:0, pb:0 }}>
      <Typography variant="h6" component="h2" mb={2}>
        Friend List
      </Typography>

      {friends.map((friend) => (
        <Box key={friend.id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={friend.avatar} alt={friend.name} sx={{ mr: 2 }} />
          <Typography variant="subtitle1">{friend.name}</Typography>
        </Box>
      ))}

      <Button variant="outlined" fullWidth>
        View All Friends
      </Button>
    </Box>
  );
};

export default FriendList;
