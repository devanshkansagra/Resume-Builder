import React, { useRef } from 'react'
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import ReactToPrint from 'react-to-print';
import styles from './resume.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Container from '@mui/material/Container';

function Resume(props) {

    const pdfRef = useRef();
    return (
        <>

            {/* Useful Links */}
            <div className={styles.paper} ref={pdfRef}>
                <div>
                    <div className={styles.name}>
                        <Typography variant='h3' color='textSecondary' fontWeight={'bold'}>{props.name || 'Your Name'}</Typography>
                    </div>
                    <br />
                    <div className={`${styles.flex} ${styles.justifyBetween}`}>
                        <div className={styles.flex}>
                            <GitHubIcon fontSize='small'></GitHubIcon>
                            <Typography><a href='/'>&nbsp;{props.github || 'Your Github'}</a></Typography>
                        </div>
                        <div className={styles.flex}>
                            <LinkedInIcon fontSize='small'></LinkedInIcon>
                            <Typography><a href='/'>&nbsp;{props.linkedin || 'Your LinkedIn'}</a></Typography>
                        </div>
                        <div className={styles.flex}>
                            <PhoneIcon fontSize='small'></PhoneIcon>
                            <Typography><div>&nbsp;{props.phone || 'Your Phone'}</div></Typography>
                        </div>
                        <div className={styles.flex}>
                            <MailIcon fontSize='small'></MailIcon>
                            <Typography><a href='/'>&nbsp;{props.mail || 'Your Mail'}</a></Typography>
                        </div>
                    </div>
                </div>
                <br />
                <hr />

                {/* Skills Section */}
                <div>
                    <Typography fontWeight={'bold'}>Skills:</Typography>
                    <div className={`${styles.flex} ${styles.alignItemsCenter}`}>
                        <Typography>Languages: </Typography>&nbsp;<Typography color={'textSecondary'}>
                            {props.languages || 'C, C++, Java, Python, Swift, Javascript'}
                        </Typography>
                    </div>
                    <div className={`${styles.flex} ${styles.alignItemsCenter}`}>
                        <Typography>Technologies & Frameworks: </Typography>&nbsp;<Typography color={'textSecondary'}>
                            {props.Technologies || 'React, Node, Express, MongoDB, Firebase, AWS'}
                        </Typography>
                    </div>
                    <div className={`${styles.flex} ${styles.alignItemsCenter}`}>
                        <Typography>Designing Frameworks: </Typography>&nbsp;<Typography color={'textSecondary'}>
                            {props.Frameworks || 'Bootstrap, Material-UI, TailwindCSS'}
                        </Typography>
                    </div>
                    <div className={`${styles.flex} ${styles.alignItemsCenter}`}>
                        <Typography>Concepts: </Typography>&nbsp;<Typography color={'textSecondary'}>
                            {props.Concepts || 'Data Structures, Algorithms, OOP, DBMS, OS'}
                        </Typography>
                    </div>
                </div>
                <br />
                <hr />

                {/* Professional Experience Section */}
                <div>
                    <Typography fontWeight={'bold'}>Professional Experience</Typography>
                    <div>
                        <Typography fontWeight={'normal'}>{props.ExpTitle || 'Experience 1'}</Typography>
                        <Typography color={'textSecondary'}>
                            {props.ExpDescription || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa.'}
                        </Typography>
                    </div>
                </div>
                <br />
                <hr />

                {/* Projects Section */}
                <div>
                    <Typography fontWeight={'bold'}>Projects</Typography>
                    <Typography>{props.ProjTitle || 'Project 1'}</Typography>
                    <Typography paragraph color={'textSecondary'}>
                        {props.ProjDescription || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa.'}
                    </Typography>
                </div>
                <br />
                <hr />

                {/* Education Section */}
                <div>
                    <Typography fontWeight={'bold'}>Education</Typography>
                    <Typography>{props.EdTitle || 'Education 1'}</Typography>
                    <Typography>
                        {props.EdDescription || 'Stanford University'} - {props.EdDuration || '2019-2023'}
                        <Typography color={'textSecondary'}>{props.EdDegree || 'BTech in Computer Science'}</Typography>
                        <Typography color={'textSecondary'}>{props.EdGrades || '9.9 CGPA'}</Typography>
                    </Typography>

                </div>
            </div>
            <div>
                <ReactToPrint
                    trigger={() => {
                        return (
                            <Button variant='contained'>
                                Download Template
                            </Button>
                        );
                    }}
                    content={() => pdfRef.current}
                />
            </div>

        </>
    )
}

export default Resume