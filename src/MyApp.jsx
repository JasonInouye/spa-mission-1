import React from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./Home";
import Detail from "./Detail";
import "@ui5/webcomponents-icons/dist/add.js";
import {
    Avatar,
    ShellBar,
    ShellBarItem
  } from "@ui5/webcomponents-react";
  
function MyApp() {
    return <>
        <ShellBar 
            logo={<img src="mindsetlogo.png" />}
            primaryTitle="My App" 
            profile={
                <Avatar>
                    <img src="https://raw.githubusercontent.com/sap-tutorials/Tutorials/master/tutorials/ui5-webcomponents-react-dashboard/profilePictureExample.png" />
                </Avatar>
            }
        >
            <ShellBarItem icon="add" text="Add" />
        </ShellBar>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
    </>
}

export default MyApp