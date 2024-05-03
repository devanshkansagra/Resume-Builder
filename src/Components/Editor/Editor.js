import React, { useEffect } from 'react'
import styles from './css/editor.module.css'
import { Paper } from '@mui/material'
import Resume from '../resume/Resume'
import Personal from './Personal'
import Box from '@mui/material/Box'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{ p: 3 }}
                >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function Editor() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();
    useEffect(() => {
        const callLogin = async () => {
            try {
                const response = await axios.post("/login");
                if(response) {
                    navigate('/editor');
                }
                else {
                    throw new Error("Didn't get the response");
                }
            }
            catch(error) {
                // navigate('/login')
                console.log(error);
            }
        }
        callLogin();
    }, [navigate]);

    const [personalData, setpersonalData] = React.useState({});
    const [skill, setSkill] = React.useState({});
    const [experience, setExp] = React.useState({});
    const [education, setEdu] = React.useState({});
    const [project, setProj] = React.useState({});

    const getData = (personalData) => {
        setpersonalData(personalData)
    }

    const getSkill = (skills) => {
        setSkill(skills);
    }

    const getExp = (exp) => {
        setExp(exp);
    }

    const getEducation = (edu) => {
        setEdu(edu);
    }

    const getProject = (proj) => {
        setProj(proj);
    }

    const pdfRef = useRef();
    return (
        <>
            
            <Box
                className={` ${styles.flex} ${styles.justifyBetween} ${styles.alignStart} ${styles.mt2} ${styles.px5} ${styles.mb5}`}
            >
                <Paper elevation={4} sx={{mt:6}}>
                    <Box style={{ 'width': '45rem' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Personal Information" {...a11yProps(0)} />
                                <Tab label="Skills" {...a11yProps(1)} />
                                <Tab label="Experience" {...a11yProps(2)} />
                                <Tab label="Projects" {...a11yProps(3)} />
                                <Tab label="Education" {...a11yProps(4)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Personal getData={getData} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Skills getSkill={getSkill} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Experience getExp={getExp} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <Projects getProject={getProject} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={4}>
                            <Education getEducation={getEducation} />
                        </CustomTabPanel>
                    </Box>
                </Paper>
                <Paper elevation={0} style={{ 'width': '45rem' }}>
                    <div ref={pdfRef}>
                        <Resume
                            personal={personalData}
                            skills={skill}
                            exp={experience}
                            proj={project}
                            edu={education}

                        />
                    </div>
                </Paper>
            </Box>
        </>
    )
}

export default Editor


