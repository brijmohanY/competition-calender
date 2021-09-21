/*global chrome*/
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faEyeSlash,
  faCodeBranch,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
const style = {
  backgroundColor: "#3498DB",
  height: "50px",
  color: "#ffffff",
  width: "97%",
  top: "0%",
  display: "flex",
  alignItems: "center",
  boxShadow: "0 3px 6px rgb(0 0 0 / 8%), 0 3px 6px rgb(0 0 0 / 8%)",
  paddingLeft: "15px",
  icons: {
    height: "22px",
    width: "22px",
    borderRadius: "30%",
    color: "white",
    margin: "15px",
  },
  refresh: {
    marginLeft: "17rem",
    height: "20px",
    width: "20px",
    borderRadius: "30%",
    color: "white",
  },
};

const handleClick = () => {
  localStorage.removeItem("contest");
  chrome.runtime.reload();
};

function Navbar() {
  return (
    <div style={style}>
      <Link to="">
        <FontAwesomeIcon icon={faHome} style={style.icons} title="Home" />
      </Link>
      <Link to="/setting">
        <FontAwesomeIcon icon={faCog} style={style.icons} title="Settings" />
      </Link>
      {/* <Link to="/hidden">
        <FontAwesomeIcon icon={faEyeSlash} style={style.icons} title="Hidden" />
      </Link> */}
      <Link to="/github">
        <FontAwesomeIcon
          icon={faCodeBranch}
          style={style.icons}
          title="Github"
        />
      </Link>
      <Link to="/">
        <FontAwesomeIcon
          icon={faSyncAlt}
          style={style.refresh}
          onClick={handleClick}
          title="Refresh"
        />
      </Link>
    </div>
  );
}

export default Navbar;
