import React, { useRef } from 'react'
import { Paper, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './resume.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import ReactToPrint from 'react-to-print';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function Resume({ personal, skills, proj, edu, exp }) {

    let arrSkills = Object.values(skills);
    let arrProj = Object.values(proj);
    let arrExp = Object.values(exp);
    let arrEdu = Object.values(edu);
    const pdfRef = useRef();
    return (
        <>
            <div className={`${styles.flex} ${styles.justifyCenter}`}>
                <Box>
                    <ReactToPrint
                        documentTitle={personal.firstName +" "+personal.lastName+`'s Resume`}
                        trigger={() => {
                            return (
                                <Button variant='contained'>Download Resume <DownloadIcon></DownloadIcon></Button>
                            )
                        }}
                        content={() => pdfRef.current}
                    /></Box>
            </div>
            <Paper elevation={5}>
                <div className={styles.paper} ref={pdfRef}>
                    <div>
                        <div className={styles.name}>
                            <Typography variant='h4' color='textSecondary' align='center' mb={2} fontWeight={'bold'}>{personal.firstName || 'Your'} {personal.lastName || 'Name'}</Typography>
                        </div>
                        <div className={`${styles.flex} ${styles.justifyBetween} ${styles.wrap}`}>
                            <div className={styles.flex}>
                                <GitHubIcon fontSize='small'></GitHubIcon>
                                <Typography><a href={`https://github.com/${personal.github}`}>&nbsp;{personal.github || 'Your Github'}</a></Typography>
                            </div>
                            <div className={styles.flex}>
                                <LinkedInIcon fontSize='small'></LinkedInIcon>
                                <Typography><a href={`https://linkedin.com/in/${personal.linkedin}`}>&nbsp;{personal.linkedin || 'Your LinkedIn'}</a></Typography>
                            </div>
                            <div className={styles.flex}>
                                <PhoneIcon fontSize='small'></PhoneIcon>
                                <Typography><span>&nbsp;{personal.phone || 'Your Phone'}</span></Typography>
                            </div>
                            <div className={styles.flex}>
                                <MailIcon fontSize='small'></MailIcon>
                                <Typography><span>&nbsp;{personal.email || 'Your Mail'}</span></Typography>
                            </div>
                        </div>
                    </div>
                    <hr />

                    {/* Skills Section */}
                    <div>
                        <Typography fontWeight={'bold'}>Skills</Typography>
                        {arrSkills.map((skill, index) => (
                            <div key={index}>
                                <span>{skill?.skilltitle}</span>:&nbsp;
                                <span className={styles.textSecondary}>
                                    {skill?.skillcontent}
                                </span>
                            </div>
                        ))}
                    </div>
                    <br />
                    <hr />

                    {/* Professional Experience Section */}
                    <div>
                        <Typography fontWeight={'bold'}>Professional Experience</Typography>
                        {arrExp.map((experience, index) => {
                            return (
                                <div key={index}>
                                    <div className={`${styles.flex} ${styles.justifyBetween}`}><Typography>{experience?.exptitle}</Typography>
                                        <Typography color={'textSecondary'}>{experience?.tenure}</Typography></div>
                                    <Typography color={'textSecondary'}>
                                        {experience?.expdescription}
                                    </Typography>
                                    <br />
                                </div>
                            )
                        })}
                    </div>
                    <br />
                    <hr />

                    {/* Projects Section */}
                    <div>
                        <Typography fontWeight={'bold'}>Projects</Typography>
                        {arrProj.map((project, index) => (
                            <div key={index}>
                                <Typography>{project?.projtitle}</Typography>
                                <Typography paragraph color={'textSecondary'}>
                                    {project?.projdescription}
                                </Typography>
                            </div>
                        ))}
                    </div>
                    <br />
                    <hr />

                    {/* Education Section */}
                    <div>
                        <Typography fontWeight={'bold'}>Education</Typography>
                        {arrEdu.map((education, index) => {
                            return (
                                <div key={index}>
                                    <Typography>
                                        {education.insName} - {education?.tenure}
                                        <Typography color={'textSecondary'}>{education?.qualification}</Typography>
                                        <Typography color={'textSecondary'}>{education?.scores}</Typography>
                                    </Typography>
                                    <br />
                                </div>
                            )
                        })}
                    </div>
                    <br />
                </div>
            </Paper>

        </>
    )
}

export default Resume