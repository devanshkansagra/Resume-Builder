import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
import styles from './css/editor.module.css'

const defaultTheme = createTheme();

export default function Personal(personal) {

  const [personalData, setPersonalData] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
  })

  let name, value;
  const handlePersonalData = (e) => {
      name = e.target.name;
      value = e.target.value;

      setPersonalData({...personalData, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    personal.getData(personalData);
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Personal Details
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handlePersonalData}
                  // autofocus
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  // autofocus
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handlePersonalData}
                />
              </Grid>

              {/* Email address */}
              <Grid item xs={12} sm={6}>
                <TextField
                  // autofocus
                  autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  id="emailId"
                  label="Email Address"
                  onChange={handlePersonalData}
                />
              </Grid>

              {/* Phone Number */}
              <Grid item xs={12} sm={6}>
                <TextField
                  // autofocus
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phone"
                  onChange={handlePersonalData}
                />
              </Grid>

              {/* Github */}
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Github"
                  name="github"
                  required
                  fullWidth
                  id="github"
                  label="Github Profile"
                  onChange={handlePersonalData}
                  // autofocus
                />
              </Grid>

              {/* LinkedIn */}
              <Grid item xs={12} sm={6}>
                <TextField
                  // autofocus
                  required
                  fullWidth
                  id="linkedin"
                  label="LinkedIn Profile"
                  name="linkedin"
                  autoComplete="family-name"
                  onChange={handlePersonalData}
                />
              </Grid>
            </Grid>
            <Box className={`${styles.flex} ${styles.justifyBetween}`}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Box>
    </ThemeProvider>
  );
}