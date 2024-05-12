import React from 'react'
import styles from './edit.module.css'
import PersonIcon from '@mui/icons-material/Person';
import { Box, Container, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Edit() {

    const handleInputs = () => {

    }

    const handleSubmit = () => {

    }
    return (
        <Container>
            <Paper>
                <div className={`${styles.flex} ${styles.justifyCenter} ${styles.mt5}`}>
                    <div className={`${styles.mx7}`}>
                        <PersonIcon sx={{ fontSize: 100, color: '#424242' }} />
                    </div>
                    <div className="right">
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: 355 }}>
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
                    </div>
                </div>
            </Paper>
        </Container>
    )
}

export default Edit