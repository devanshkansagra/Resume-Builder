import React from 'react'
import ResumeContext from './ResumeContext'

const ResumeContextProvider = ({ children }) => {
    const [personalInfo, setpersonalInfo] = React.useState({firstName: "", lastName: "", email: "", phone: "", github: "", linkedin: ""})
    const [skillInfo, setSkillInfo] = React.useState([{ skilltitle: "", skillcontent: "" }]);
    const [expInfo, setExpInfo] = React.useState([{ exptitle: "", expdescription: "", tenure: ""}]);
    const [projInfo, setProjInfo] = React.useState([{ projtitle: "", projdescription: ""}]);
    const [eduInfo, setEduInfo] = React.useState([{ insName: "", tenure: "", qualification: "", scores: ""}]);

    const addSkillInfo = (skillInfo) => {
        setSkillInfo([...skillInfo]);
    }

    const addExpInfo = (expInfo) => {
        setExpInfo([...expInfo]);
    }

    const addProjInfo = (projInfo) => {
        setProjInfo([...projInfo]);
    }

    const addEduInfo = (eduInfo) => {
        setEduInfo([...eduInfo]);
    }
    return (
        <ResumeContext.Provider value={{
            personalInfo, setpersonalInfo,
            skillInfo, setSkillInfo, addSkillInfo,
            expInfo, setExpInfo, addExpInfo,
            projInfo, setProjInfo, addProjInfo,
            eduInfo, setEduInfo, addEduInfo
        }}>
            {children}
        </ResumeContext.Provider>
    )
}

export default ResumeContextProvider