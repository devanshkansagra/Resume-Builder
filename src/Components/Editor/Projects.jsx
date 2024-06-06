import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './css/editor.module.css'
import ResumeContext from '../../context/ResumeContext';

const defaultTheme = createTheme();
function Projects() {

    const { projInfo, setProjInfo, addProjInfo } = React.useContext(ResumeContext);

    const addProject = () => {
        setProjInfo([...projInfo, { projtitle: "", projdescription: "" }]);
    }

    const handleInputs = (index, e) => {
       const newProj = [...projInfo];
       newProj[index][e.target.name] = e.target.value;
       setProjInfo(newProj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProjInfo(projInfo);
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
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    {projInfo.map((project, index) => {
                        return (
                            <Grid container spacing={2} key={index} sx={{ mt: 3 }}>

                                {/* Languages */}
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="projtitle"
                                        required
                                        fullWidth
                                        id="title"
                                        label="Project Title"
                                        value={project.projtitle}
                                        onChange={(e) => handleInputs(index, e)}
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
                                        value={project.projdescription}
                                        label="Project Description"
                                        // autofocus
                                        multiline
                                        onChange={(e) => handleInputs(index, e)}
                                        rows={6}
                                    />
                                </Grid>
                                <br />
                            </Grid>
                        )
                    })}
                    <div className={`${styles.flex} ${styles.mt2}`}>
                        <Button variant='contained' onClick={addProject}>Add Project</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mx: 2 }}
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                    </div>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
        </ThemeProvider>
    );
}

export default Projects