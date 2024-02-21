import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './css/editor.module.css'

const defaultTheme = createTheme();
function Projects(proj) {

    const [projects, setProjects] = React.useState({
        projtitle: "",
        projdescription: "",
    });

    const handleInputs = (e) => {
        setProjects({...projects, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        proj.getProject(projects);
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
                        Projects
                    </Typography>

                </Box>
                <Button variant='contained'>Add Project</Button>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>

                        {/* Languages */}
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="projtitle"
                                required
                                fullWidth
                                id="title"
                                label="Project Title"
                                onChange={handleInputs}
                                // autofocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="projdescription"
                                required
                                fullWidth
                                id="description"
                                label="Project Description"
                                // autofocus
                                multiline
                                onChange={handleInputs}
                                rows={6}
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
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
        </ThemeProvider>
    );
}

export default Projects