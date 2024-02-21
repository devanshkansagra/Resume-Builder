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
function Experience(exp) {

    const [experience, setExperience] = React.useState({
        exptitle: "",
        expdescription: "",
    });

    const [exps, setExps] = React.useState([]);
    const addExperience = () => {
        const add = [...exps, []];
        console.log(add);
        setExps(add);
    }

    const handleInputs = (e) => {
        setExperience({ ...experience, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(experience);
        setExps(experience);
        console.log(experience)
        exp.getExp(experience);
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
                <Button variant='contained' onClick={addExperience}>Add Experience</Button>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>

                        {/* Languages */}
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="exptitle"
                                required
                                fullWidth
                                id="exptitle"
                                label="Experience Title"
                                // autofocus
                                onChange={handleInputs}
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
                                // autofocus
                                multiline
                                rows={6}
                                onChange={handleInputs}
                            />
                        </Grid>



                    </Grid>
                </Box>
                {exps.map((data) => {
                    return (
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                {/* Languages */}
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="exptitle"
                                        required
                                        fullWidth
                                        id="exptitle"
                                        label="Experience Title"
                                        // autofocus
                                        onChange={handleInputs}
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
                                        // autofocus
                                        multiline
                                        rows={6}
                                        onChange={handleInputs}
                                    />
                                </Grid>



                            </Grid>
                        </Box>
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
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
        </ThemeProvider>
    );
}

export default Experience