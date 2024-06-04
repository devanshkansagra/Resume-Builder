import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Container, Paper, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Edit() {

    const [details, setDetails] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const handleInputs = (e) => {
        setDetails({...details, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await axios.post('/users/edit', details);
            if(data.status === 200) {
                window.alert('Data updated successfully');
                navigate('/profile');               
            } 
            else {
                window.alert('Details is unable to update');
            }
        }
        catch (error) {
            window.alert('Server error');
        }
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <PersonIcon sx={{ fontSize: 80, color: '#424242', mb: 2 }} />
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="fname"
                            label="First name"
                            name="firstName"
                            autoComplete="fname"
                            autoFocus
                            onChange={handleInputs}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastName"
                            label="LastName"
                            type="text"
                            id="lname"
                            autoComplete="lname"
                            onChange={handleInputs}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleInputs}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleInputs}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}

export default Edit;
