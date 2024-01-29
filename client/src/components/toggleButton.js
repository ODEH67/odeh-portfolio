// import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {  useEffect,useState } from 'react';
import i18n from '../i18n.js';



const LanguageSwitch = styled(Switch)(({ theme }) => ({
    width: 60,
    height: 32,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 2,
        padding: 0,
        transform: "translateX(6px)", 
    "&.Mui-checked": {
    // color: "black",     //color for text right
    transform: "translateX(22px)",
    "& .MuiSwitch-thumb:before": {
        content: "'DE'",
        color: "#13142c",        //color for text right override
        //backgroundImage: DE,
        //width: 17,
        //height: 17,
        },
        "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#3edcc2",     //color for line left to right
        },
    },
    }   ,
    "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "gray" : "white",     //color for circle
    width: 30,
    height: 30,
    "&::before": {
        content: "'EN'",
        position: "absolute",
        // width: "20px",
        // height: "20px",
        left: 5,
        top: 3,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontWeight: "bold",
        color: "#0e0f23",   //color for text left override
        // fontSize: "1.1em",
        // backgroundImage: EN,
    },
    },
    "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",     //color for line right to left
    borderRadius: 20 / 2,
    } ,
}));

export default function CustomizedSwitches( {isToggled, toggleSwitch} ) {

    const [isChecked, setIsChecked] = useState(isToggled);

useEffect(() => {
    // Synchronize the local state with the prop
    setIsChecked(isToggled);
}, [isToggled]);

const handleToggle = () => {
    // Update the local state and trigger the toggleMenu function
    setIsChecked(!isChecked);
    toggleSwitch();

    const newLanguage = isChecked ? 'en' : 'de';
    i18n.changeLanguage(newLanguage);
};

return (
    <FormGroup>
    <FormControlLabel
        control={<LanguageSwitch sx={{ m: 1 }} checked={isChecked} />}
        label=""
        onClick={(e) => {
        e.stopPropagation();
        handleToggle();
        }}
    />
    </FormGroup>
);
}