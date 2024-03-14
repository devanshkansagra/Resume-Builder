import * as React from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react'
import ReactToPrint from 'react-to-print';
import { Box } from '@mui/material';
import styles from './admin.module.css'

function Admin() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin');
                setUsers(response.data);

            }
            catch (error) {
                console.log(error)
            }
        }
        setInterval(() => {
            getUserData();
        }, 500)
    }, [])
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const pdfRef = React.useRef();

    return (
        <>
            <div className={`${styles.flex} ${styles.mt5} ${styles.justifyCenter}`}>
                <Box>
                    <ReactToPrint
                        documentTitle={'Users'}
                        trigger={() => {
                            return (
                                <Button variant='contained'>Download Data</Button>
                            )
                        }}
                        content={() => pdfRef.current}
                    /></Box>
            </div>
            <Container sx={{ marginTop: 10, overflow: 'none' }}>
                <TableContainer ref={pdfRef}>
                    <Table sx={{ width: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="left">First Name</TableCell>
                                <TableCell align="left">Last Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Username</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, index) => {
                                return (
                                    <StyledTableRow key={index}>
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="left">{user.firstName}</TableCell>
                                        <TableCell align="left">{user.lastName}</TableCell>
                                        <TableCell align="left">{user.email}</TableCell>
                                        <TableCell align="left">{user.username}</TableCell>
                                    </StyledTableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default Admin