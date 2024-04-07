import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const FooterCus = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            SpaceX Explorer
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            A web application providing up-to-date information on SpaceX launches and missions.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Resources
          </Typography>
          <Box>
            <Link href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener">
              React Docs
            </Link>
          </Box>
          <Box>
            <Link href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener">
              Spring Boot Docs
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Find Us
          </Typography>
          <Box>
            <Link href="https://github.com/your-username/your-repo" target="_blank" rel="noopener">
              GitHub
            </Link>
          </Box>
          <Box>
            <Link href="https://www.linkedin.com/in/yourprofile1" target="_blank" rel="noopener">
              LinkedIn Profile 1
            </Link>
          </Box>
          <Box>
            <Link href="https://www.linkedin.com/in/yourprofile2" target="_blank" rel="noopener">
              LinkedIn Profile 2
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterCus;
