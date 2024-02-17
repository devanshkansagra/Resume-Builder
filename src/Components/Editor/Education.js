import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link } from 'react-router-dom'
import styles from './css/editor.module.css'

const defaultTheme = createTheme();
function Projects() {
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
                        Education Qualification
                    </Typography>

                </Box>
                <Button variant='contained'>Add Education Qualification</Button>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>

                        {/* Languages */}
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="edtitle"
                                required
                                fullWidth
                                id="edtitle"
                                label="Education Title"
                                // autofocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="insName"
                                required
                                fullWidth
                                id="insName"
                                label="Institution Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="tenure"
                                required
                                fullWidth
                                id="tenure"
                                label="Education Tenure"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="qualification"
                                required
                                fullWidth
                                id="Qualification"
                                label="Education Qualification"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="scores"
                                // required
                                fullWidth
                                id="scores"
                                label="Final Scores"
                            />
                        </Grid>



                    </Grid>
                    <Box className={`${styles.flex} ${styles.justifyBetween}`}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
        </ThemeProvider>
    );
}

export default Projects