import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

        </>
    )
}

export default Profile