
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import FilterTabs from "../Filter/Filter";

export default function Section({title, url, tab}) {

    const [data, setData] = useState([]);
    

    //console.log(url);
    //console.log(filters);
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                //console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);



    return (
        
        <SectionProd
          data={data}
          title={title}
          tab={tab}
        />
    );
}

function SectionProd({ title, data, tab}) {
  
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    axios.get(tab)
        .then(response => {
          const { data } = response.data;
          setFilters([...filters, ...data]);
          //console.log(filters);
        })
        .catch(error => {
            console.log(error);
        })
}, []);

const showFilters = filters.length > 1;

const cardsToRender = data.filter((card) =>
  showFilters && selectedFilterIndex !== 0
    ? card.genre.key === filters[selectedFilterIndex].key
    : card
);



  return (
    <>
    {!carouselToggle ? (
      <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {showFilters && (
        <div className={styles.filterWrapper}>
          <FilterTabs
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
    
        <div className={styles.cardsWrapper}>
            <div className={styles.wrapper}>
            {cardsToRender.map((ele) => (
                <Card data={ele} />
              ))}
            </div>
        </div>
    </div>
    ):( <div className={styles.section}>
           <div className={styles.header}>
           <h3>{title}</h3>
           <h4 className={styles.toggleText} onClick={handleToggle}>
              {!carouselToggle ? "Collapse All" : "Show All"}
          </h4>
          </div>
          <Carousel data={data} /> 
        </div>
      )}
    </>
    
  );
}