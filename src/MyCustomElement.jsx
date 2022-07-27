import React from "react";
import { createUseStyles } from 'react-jss';
import { ThemingParameters } from "@ui5/webcomponents-react-base";

const styles = {
    container: {
      backgroundColor: ThemingParameters.sapBackgroundColor,
      fontFamily: ThemingParameters.sapFontFamily,
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
};  

const useStyles = createUseStyles(styles);


function MyCustomElement() {
    const classes = useStyles();
    
    return (
        <span style={{ color: ThemingParameters.sapNegativeColor, fontSize: ThemingParameters.sapFontHeader1Size }}>
            My custom Text Element
        </span>
    );
}

export default MyCustomElement