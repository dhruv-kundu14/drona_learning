import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const Dashboard = () => {
  const accountItems = [
    {
      title: "Extremely Passionate Team",
      icon: (
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/Detail/like.png"
          alt="Passionate team icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ),
    },
    {
      title: "Highly Educated Teachers",
      icon: (
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/Detail/education.png"
          alt="Highly educated teachers icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ),
    },
    {
      title: "Widely Experienced Faculty",
      icon: (
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/Detail/globe.png"
          alt="Experienced faculty icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ),
    },
    {
      title: "Unique Teaching Methodology",
      icon: (
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/Detail/presentation.png"
          alt="Teaching methodology icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ),
    },
    {
      title: "Personalized Attention on Students",
      icon: (
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/Detail/dart-board.png"
          alt="Personalized attention icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ),
    },
    {
      title: "Self Learning",
      icon: (
        <img
          src="https://dhruv-kundu14.github.io/drona_learning/Icons/Detail/reading-book.png"
          alt="Self-learning icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" } }}
      >
        Why Drona Learning Academy?
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {accountItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={2}
              sx={{
                padding: { xs: 2, sm: 3 },
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: { xs: 150, sm: 180 },
                minWidth: { xs: 180, sm: 220 },
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box sx={{ marginBottom: 1 }}>{item.icon}</Box>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
              >
                {item.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
