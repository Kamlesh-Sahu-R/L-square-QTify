import React from "react";
//import "@fontsource/poppins";
import styles from "./Button.module.css"


const Button1 = ({children, style, onClick, type = 'button'}) => {

    
    return(
        <button  style={style} onClick={onClick} className={styles.feedback} type={type}>
            {children}
        </button>
    );
};

export default Button1;