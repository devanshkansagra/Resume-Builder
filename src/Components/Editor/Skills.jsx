// src/components/Skills.js
import React, { useContext} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './css/editor.module.css';
import ResumeContext from '../../context/ResumeContext';

const defaultTheme = createTheme();

function Skills() {

    const {skillInfo, setSkillInfo, addSkillInfo} = useContext(ResumeContext);

    const handleInputs = (index, e) => {
       const {name, value} = e.target;
       const updateSkills = [...skillInfo];
       updateSkills[index][name] = value;
       setSkillInfo(updateSkills);
    };

    const addSkill = () => {
        setSkillInfo([...skillInfo, {skilltitle: "", skillcontent: ""}])
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addSkillInfo(skillInfo);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
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
                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
                    {skillInfo.map((data, index) => (
                        <Grid container spacing={2} key={index} sx={{ mb: 3 }}>
                            <Grid item xs={12}>
                                <TextField
                                    name="skilltitle"
                                    required
                                    fullWidth
                                    id="skilltitle"
                                    label="Skill Title"
                                    value={data.skilltitle}
                                    onChange={(e) => handleInputs(index, e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="skillcontent"
                                    required
                                    fullWidth
                                    id="skillcontent"
                                    label="Skill Content"
                                    value={data.skillcontent}
                                    onChange={(e) => handleInputs(index, e)}
                                />
                            </Grid>
                        </Grid>
                    ))}
                    <div className={`${styles.flex} ${styles.alignCenter}`}>
                        <Button variant="contained" onClick={addSkill}>Add Skill</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mx: 2 }}
                        >
                            Save
                        </Button>
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Skills;
