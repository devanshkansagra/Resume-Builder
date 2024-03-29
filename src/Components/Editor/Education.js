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
function Education(edu) {

    const [education, setEducation] = React.useState([{
        insName: "",
        tenure: "",
        qualification: "",
        scores: ""
    }])

    const addEducation = () => {
        setEducation([...education, { insName: "", tenure: "", qualification: "", scores: "" }])
    }

    const handleInputs = (index, e) => {
        const newEdu = [...education];
        newEdu[index][e.target.name] = e.target.value;
        setEducation(newEdu);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        edu.getEducation(education);
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
                        Education Qualification
                    </Typography>

                </Box>
                <Button variant='contained' onClick={addEducation}>Add Education Qualification</Button>
                <Box component="form" noValidate sx={{ mb: 3 }}>
                    {education.map((edu, index) => (
                        <Grid container spacing={2} key={index} sx={{ mt: 3 }}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="insName"
                                    required
                                    fullWidth
                                    id="insName"
                                    label="Institution Name"
                                    onChange={(e) => handleInputs(index, e)}
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
                                    onChange={(e) => handleInputs(index, e)}
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
                                    onChange={(e) => handleInputs(index, e)}
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
                                    onChange={(e) => handleInputs(index, e)}
                                />
                            </Grid>
                            <br />
                            <br />
                        </Grid>
                    ))}
                </Box>
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
        </ThemeProvider>
    );
}

export default Education