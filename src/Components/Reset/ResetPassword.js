import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockResetIcon from '@mui/icons-material/LockReset';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {

    const [details, setDetails] = React.useState({
        password: "",
        cpassword: "",
        otp: ""
    });
    const navigate = useNavigate();

    const handleInputs = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (details.password !== details.cpassword) {
            window.alert("Password doesn't match");
            return false;
        }
        else {
            try {
                const response = await axios.post('/users/resetPassword', {
                    data: details
                })

                if (response.status === 200) {
                    window.alert('Passwords are updated Successfully');
                    navigate('/login');
                }
                else if (response.status === 401) {
                    window.alert('Unauthorized: Invalid Security Code');
                }
            }
            catch (error) {
                window.alert("Server Error");
            }
        }
    }
    const defaultTheme = createTheme();
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockResetIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Reset Your Password
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handleInputs}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="cpassword"
                                label="Confirm new password"
                                type="password"
                                id="cpassword"
                                onChange={handleInputs}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="otp"
                                label="Security Code"
                                type="otp"
                                id="otp"
                                onChange={handleInputs}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Update My Password
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default ResetPassword