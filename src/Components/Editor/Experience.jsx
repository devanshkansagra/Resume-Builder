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
function Experience() {

    const { expInfo, setExpInfo, addExpInfo } = React.useContext(ResumeContext);

    const addExperience = () => {
        setExpInfo([...expInfo, { exptitle: "", expdescription: "", tenure: ""}]);
    }

    const handleInputs = (index, e) => {
        const {name, value} = e.target;
        const newExp = [...expInfo];
        newExp[index][name] = value;
        setExpInfo(newExp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpInfo(expInfo);
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
                        Professional Experience
                    </Typography>

                </Box>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    {expInfo.map((exp, index) => {
                        return (
                            <Grid container spacing={2} key={index} sx={{ mt: 3 }}>

                                {/* Languages */}
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="exptitle"
                                        required
                                        fullWidth
                                        id="exptitle"
                                        label="Experience Title"
                                        value={exp.exptitle}
                                        // autofocus
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
                                        label="From-To"
                                        value={exp.tenure}
                                        // autofocus
                                        onChange={(e) => handleInputs(index, e)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="expdescription"
                                        required
                                        fullWidth
                                        id="expdescription"
                                        label="Experience Description"
                                        value={exp.expdescription}
                                        // autofocus
                                        multiline
                                        rows={6}
                                        onChange={(e) => handleInputs(index, e)}
                                    />
                                </Grid>
                            </Grid>
                        )
                    })}
                </Box>
                <div className={`${styles.flex} ${styles.mt2}`}>
                    <Button variant='contained' onClick={addExperience}>Add Experience</Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mx: 2 }}
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                </div>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
        </ThemeProvider>
    );
}

export default Experience