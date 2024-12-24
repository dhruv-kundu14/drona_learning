import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', color: '#fff', padding: '40px 280px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Column 1 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Your Company
            </Typography>
            <Typography variant="body2" paragraph>
              &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
            </Typography>
            <Typography variant="body2" paragraph>
              Contact us: <Link href="mailto:info@yourcompany.com" color="inherit">info@yourcompany.com</Link>
            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/privacy-policy" color="inherit" display="block" gutterBottom>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" color="inherit" display="block">
              Terms of Service
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="https://facebook.com" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ marginRight: 2 }}>
                Facebook
              </Link>
              <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ marginRight: 2 }}>
                Twitter
              </Link>
              <Link href="https://instagram.com" color="inherit" target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
    