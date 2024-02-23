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
function Skills(skill) {

    const [skills, setSkills] = React.useState([{
        skilltitle: "",
        skillcontent: "",
    }]);

    const addProject = () => {
        setSkills([...skills, { skilltitle: "", skillcontent: "" }]);
    }

    const handleInputs = (index, e) => {
        const newSkills = [...skills];
        // "In the newSkills array, find the project object at the specified index, and update the property with the name e.target.name to the new value e.target.value"
        newSkills[index][e.target.name] = e.target.value;
        setSkills(newSkills);
    }

    const handleSubmit = (e) => {
        // console.log(Skills);
        e.preventDefault();
        skill.getSkill(skills);
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

                </Box>
                <Button variant='contained' onClick={addProject}>Add Skill</Button>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    {skills.map((project, index) => {
                        return (
                            <Grid container spacing={2} key={index} sx={{ mb: 3 }}>
                                {/* Languages */}
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="skilltitle"
                                        required
                                        fullWidth
                                        id="skilltitle"
                                        label="Skills Title"
                                        onChange={(e) => handleInputs(index, e)}
                                    // autofocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="skillcontent"
                                        required
                                        fullWidth
                                        id="skillcontent"
                                        label="Skill Content"
                                        // autofocus
                                        onChange={(e) => handleInputs(index, e)}
                                    />
                                </Grid>
                            </Grid>
                        )
                    })}
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

export default Skills