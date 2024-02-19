import React from 'react'
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
                <Box sx={{ p: 3 }}>
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
        // 'aria-controls': `simple-tabpanel-${index}`,
    };
}
function Editor() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [personalData, setpersonalData] = React.useState({});
    const getPersonal = (personalData) => {
        setpersonalData(personalData)
    }
    return (
        <>
            <Box
                className={` ${styles.flex} ${styles.justifyEvenly} ${styles.alignStart} ${styles.mt2} ${styles.px5} ${styles.mb5}`}
            >
                <Paper elevation={4} className={`${styles.m5} ${styles.w100}`}>
                    <Box sx={{ width: '100%' }}>
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
                            <Personal getPersonal={getPersonal}/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Skills />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Experience />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <Projects />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={4}>
                            <Education />
                        </CustomTabPanel>
                    </Box>
                </Paper>
                <Paper elevation={5} className='template'>
                    <Resume props={personalData}/>
                </Paper>
            </Box>
        </>
    )
}

export default Editor