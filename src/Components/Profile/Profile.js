import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import axios from 'axios';
import styles from './profile.module.css'
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
function Profile() {

    const [details, setDetails] = React.useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get('/profile');

                if (response.status === 200) {
                    setDetails(response.data.details);
                }
                else if (response.status === 401) {
                    navigate('/login');
                }
            } catch (error) {
                navigate('/login');
                console.log("Unable to fetcj details")
            }
        }
        getDetails();
    }, [navigate]);
    return (
        <>
            <Container>
                <center>
                    <div className={`${styles.flex} ${styles.justifyCenter} ${styles.mt5}`}>
                        <PersonIcon sx={{ fontSize: 100, color: '#424242' }} />
                    </div>
                    <div className={`${styles.flex} ${styles.justifyCenter}`}>
                        <table cellPadding="10">
                            <tr>
                                <td className={`${styles.fontMedium} ${styles.p4}`}><Typography>Name:</Typography> </td>
                                <td className={`${styles.fontMedium} ${styles.p4}`}><Typography>{details.firstName} {details.lastName}</Typography></td>
                            </tr>
                            {/* <tr>
                            <td className={`${styles.fontMedium} ${styles.p4}`}><Typography>Last Name:</Typography> </td>
                            <td className={`${styles.fontMedium} ${styles.p4}`}><Typography>{details.lastName}</Typography></td>
                        </tr> */}
                            <tr>
                                <td className={`${styles.fontMedium} ${styles.p4}`}><Typography>Email ID: </Typography></td>
                                <td className={`${styles.fontMedium} ${styles.p4}`}><Typography>{details.email}</Typography></td>
                            </tr>
                            <tr>
                                <td className={`${styles.fontMedium} ${styles.p4}`}><Typography>Password: </Typography></td>
                                <td className={`${styles.fontMedium} ${styles.p4}`}><Typography>{details.password}</Typography></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><Link className={`${styles.btnPrimary} ${styles.mb3}`}>Edit Profile</Link></td>
                            </tr>

                        </table>
                    </div>
                </center>
            </Container>

        </>
    )
}

export default Profile