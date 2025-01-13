import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToCourses = () => {
    navigate("/courses");
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom align="center">
        Welcome to DRONA Family ! 🎓
      </Typography>
      <Typography variant="body1" gutterBottom>
        We're committed to your success and are excited to support you on this productive learning journey. Below are the steps to get started with your Program:
      </Typography>

      <Box sx={{ marginY: 4 }}>
        <Typography variant="h5" gutterBottom>
          Getting Started:
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. <strong>Register for Live Interactive Classes</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          Join our platform for live interactive classes by clicking the link below:
        </Typography>
        <Link href="https://merithub.com/cd957g2ckrgbbes7ehd0/join/h7tCtbe.pRezrLujiOF6BjqUYM0FNLB52jY7gS_DPrvfLTjia1DczbssjgjxvERinBNuJYQ-su0UDUciDFL3BrzHkA" target="_blank">
          Register for Classes
        </Link>
      </Box>

      <Box sx={{ marginY: 4 }}>
        <Typography variant="body1" gutterBottom>
          2. <strong>Attend Classes on Our Platform</strong>
        </Typography>
        <Typography variant="body2">
          Live interactive classes will be conducted on this platform. Make sure to complete your registration to access them.
        </Typography>
      </Box>

      <Box sx={{ marginY: 4 }}>
        <Typography variant="h5" gutterBottom>
          Access Learning Materials on the Drona App
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. <strong>Download the App</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          Install the Drona App on your mobile device using the link below:
        </Typography>
        <Link href="https://clpdiy.page.link/ad6C" target="_blank">
          Download Drona App
        </Link>

        <Typography variant="body1" gutterBottom>
          2. <strong>Worksheets on the App</strong>
        </Typography>
        <Typography variant="body2">
          Worksheets will be shared via the Drona App for easy access.
        </Typography>
      </Box>

      <Box sx={{ marginY: 4 }}>
        <Typography variant="h5" gutterBottom>
          Accessing Worksheets on a Laptop
        </Typography>
        <Typography variant="body2" gutterBottom>
          For a better experience viewing worksheets, follow these steps to use the app on your laptop:
        </Typography>
        <Typography variant="body2" gutterBottom>
          1. Open your browser and go to: {" "}
          <Link href="https://web.classplusapp.com/newApp/login" target="_blank">
            Drona Web App Login
          </Link>
        </Typography>
        <Typography variant="body2">
          2. Enter the <strong>Organization Code</strong>: <strong>nrmkw</strong>
        </Typography>
        <Typography variant="body2">
          3. Log in using your registered phone number.
        </Typography>
        <Typography variant="body2">
          4. Verify your account with the OTP sent to your mobile.
        </Typography>
      </Box>

      <Box sx={{ marginY: 4 }}>
        <Typography variant="h5" gutterBottom>
          Additional Communication
        </Typography>
        <Typography variant="body2" gutterBottom>
          - A <strong>WhatsApp group</strong> will be created to ensure seamless communication.
        </Typography>
        <Typography variant="body2">
          - A <strong>live interactive session</strong> will be scheduled soon to kickstart your journey with ASLP.
        </Typography>
      </Box>

      <Typography variant="body1" align="center" sx={{ marginY: 4 }}>
        Thank you for choosing Drona Learning ! We’re here to make your learning journey smooth and successful. 🚀
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <Button variant="contained" color="primary" onClick={handleBackToCourses}>
          Back to Courses
        </Button>
      </Box>
    </Box>
  );
};

export default SuccessPage;
