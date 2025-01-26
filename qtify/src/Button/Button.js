import React from "react";


const Button1 = ({children, style, onClick, className, type = 'button'}) => {

    
    return(
        <button style={style} onClick={onClick} className={className} type={type}>
            {children}
        </button>
    );
};

export default Button1;