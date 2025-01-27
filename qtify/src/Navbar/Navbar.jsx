import React from "react";
//import { Link } from "react-router-dom";
import Button1 from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
//import { borderRadius, fontSize } from "@mui/system";


function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* <Link to="/">
        <Logo />
      </Link> */}

      <a href="./"><Logo /></a>

      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      
      <Button1>
        Give Feedback
      </Button1>
    </nav>
  );
}

export default Navbar;
