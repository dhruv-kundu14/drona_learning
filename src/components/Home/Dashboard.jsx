import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const Dashboard = () => {
  const accountItems = [
    {
      title: "Extremely Passionate Team",
      icon: <img 
      src="/Icons/Detail/like.png" 
      alt="Shopping bag icon" 
      style={{
        width: '50px',
        height: '50px',
        marginRight: '8px',
        objectFit: 'contain',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    />
    },
    {
      title: "Highly Educated Teachers",
      icon: <img 
        src="/Icons/Detail/education.png"
        alt="shield secuirty"
        style={{
          width: '50px',
          height: '50px',
          marginRight: '8px',
          objectFit: 'contain',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    },
    {
      title: "Widely Experienced Faculty",
      icon: <img 
        src="/Icons/Detail/globe.png"
        alt="shield secuirty"
        style={{
          width: '50px',
          height: '50px',
          marginRight: '8px',
          objectFit: 'contain',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    },
    {
      title: "Unique Teaching Methodology",
      icon: <img 
        src="/Icons/Detail/presentation.png"
        alt="shield secuirty"
        style={{
          width: '50px',
          height: '50px',
          marginRight: '8px',
          objectFit: 'contain',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    },
    {
      title: "Personalized Attention on Students",
      icon: <img 
        src="/Icons/Detail/dart-board.png"
        alt="shield secuirty"
        style={{
          width: '50px',
          height: '50px',
          marginRight: '8px',
          objectFit: 'contain',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    },
    {
      title: "Self Learning",
      icon: <img 
        src="/Icons/Detail/reading-book.png"
        alt="shield secuirty"
        style={{
          width: '50px',
          height: '50px',
          marginRight: '8px',
          objectFit: 'contain',
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    },
  ];


  return (
    <Box
      sx={{
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
      Why Drona Learning Academy?
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {accountItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={2}
              sx={{
                padding: 3,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: 180,
                minWidth: 220,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box sx={{ marginBottom: 1 }}>{item.icon}</Box>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
