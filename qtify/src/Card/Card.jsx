import React from "react";
import { Chip, Typography } from "@mui/material";
import style from "./Card.module.css"
//import axios from "axios";
//import cardSong from "../assets/cardpic.png"

function Card ({ data }) {

    

    
    const { image, follows, title, } = data;

    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <img src={image} alt="song" className={style.image}/>
                <div className={style.banner}> 
                    <Chip 
                      label={<Typography sx={{fontSize: '9px', textAlign: 'center'}}>
                              {follows} Follows
                            </Typography>} 
                      sx={{
                        backgroundColor: '#121212',
                        color: 'white',
                        width: '71px',
                        height: '23px',
                        borderRadius: '10px',
                        fontSize: '8px'
                      }} 
                    />
                </div>
            </div>
            <Typography sx={{textAlign: 'left'}}>
                {title}
            </Typography>
        </div>
    );
}

export default Card