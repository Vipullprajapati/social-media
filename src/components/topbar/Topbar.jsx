import React from "react";
import "./topbar.css";
import {Search} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">lamasocial</span>
      </div>
      <div className="topbarCenter">
       <div className="searchbar">
         <Search />
         <input type="text" className="searchIput"  placeholder="Search..."/>
       </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Home Page</span>
          <span className="topbarLink">Home Page</span>
        </div>
      </div>
      
      
    </div>
  )
}


