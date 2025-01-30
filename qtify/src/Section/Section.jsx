
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import axios from "axios";

export default function Section() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('https://qtify-backend-labs.crio.do/albums/top')
            .then(response => {
                setData(response.data);
                //console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
        <SectionProd
          data={data}
          title={"Top Albums"}
        />
        <SectionProd
          data={data}
          title={"New Albums"}
        />
          
        </>
    );
}

function SectionProd({ title, data }) {
  
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };



  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
    
        <div className={styles.cardsWrapper}>
          
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} />
              ))}
            
            </div>
          
        </div>
     
    </div>
  );
}