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

export default function Skills(props) {

    const [skillsData, setSkillsData] = React.useState({
        languages: "",
        techFrameworks: "",
        designFrameworks: "",
        concepts: "",
    })
    const handleInputs = (e) => {
        setSkillsData({...skillsData, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(skillsData);
        props.getSkill(skillsData);
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
                        Skills
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                            {/* Languages */}
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="languages"
                                    required
                                    fullWidth
                                    id="languages"
                                    label="Languages"
                                    onChange={handleInputs}
                                    // autofocus
                                />
                            </Grid>

                            {/* Technologies and Frameworks */}
                            <Grid item xs={12}>
                                {/* <Typography variant="h6">Languages</Typography> */}
                                <TextField
                                    autoComplete="given-name"
                                    name="techFrameworks"
                                    required
                                    fullWidth
                                    id="techFrameworks"
                                    label="Technologies and Frameworks"
                                    onChange={handleInputs}
                                    // autofocus
                                />
                            </Grid>

                            {/* Designing Fraemworks */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="designFrameworks"
                                    label="Designing Frameworks"
                                    name="designFrameworks"
                                    autoComplete="family-name"
                                    onChange={handleInputs}
                                />
                            </Grid>

                            {/* Concepts */}
                            <Grid item xs={12}>
                                {/* <Typography variant="h6">Languages</Typography> */}
                                <TextField
                                    autoComplete="given-name"
                                    name="concepts"
                                    required
                                    fullWidth
                                    id="concepts"
                                    label="Programming Concepts"
                                    onChange={handleInputs}
                                    // autofocus
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