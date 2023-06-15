import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

const SponsoredOrAds = () => {
  const sponsoredAds = [
    {
      id: 1,
      title: "Ad Title 1",
      image: "https://images.unsplash.com/1/type-away-numero-dos.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Ad Title 2",
      image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Ad Title 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6" component="h2" mb={2}>
        Sponsored Ads
      </Typography>

      {sponsoredAds.map((ad) => (
        <Card key={ad.id} sx={{ mb: 2,background:"#1A202E", color:"#838E9F" }}>
          <CardMedia
            component="img"
            src={ad.image}
            alt={ad.title}
            height="200"
          />
          <Typography variant="subtitle1" sx={{ p: 2,pb:0,color:"#fff" }}>
            {ad.title}
          </Typography>{" "}
          <Typography variant="body1" sx={{ p: 2, pt: 0 }}>
            {ad.content}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default SponsoredOrAds;
