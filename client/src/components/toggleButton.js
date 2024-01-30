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

        // Responsive styles line
        '@media (max-width: 832px)': {
            width: 50,
            height: 27,
            padding: 5,
        },

        '@media (max-width: 350px)': {
            width: 45,
            height: 20,
            padding: 4,
        },
    
    "& .MuiSwitch-switchBase": {
        margin: 2,
        padding: 0,
        transform: "translateX(6px)", 
            // Responsive styles circle position
            '@media (max-width: 832px)': {
                margin: 1,
            },
    
            '@media (max-width: 350px)': {
                margin: 0,
            },
            
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
        // Responsive styles
        '@media (max-width: 832px)': {
            width: 25,
            height: 25,
        },

        '@media (max-width: 350px)': {
            width: 20,
            height: 20,
        },

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

                // Responsive styles circle position
            '@media (max-width: 832px)': {
                left: 3,
                top: 1,
            },
    
            '@media (max-width: 350px)': {
                left: 4,
                top: 2,
            },
                
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