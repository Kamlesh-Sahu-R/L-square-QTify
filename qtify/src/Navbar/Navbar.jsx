import React from "react";
//import { Link } from "react-router-dom";
import Button1 from "../Button/Button";
import Logo from "../Logo/Logo";
//import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { borderRadius, fontSize } from "@mui/system";


function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* <Link to="/">
        <Logo />
      </Link> */}
      {/* <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      /> */}
      <a href="./"><Logo /></a>
      <Button1 style={{
        backgroundColor: 'black', 
        color: " #34C94B", 
        width: '170px', 
        height: '47px', 
        borderRadius: '12px',
        fontSize:'20px'}}
      >
        Give Feedback
      </Button1>
    </nav>
  );
}

export default Navbar;
