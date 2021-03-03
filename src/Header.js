import React from "react";
import "./Header.css";
import {Avatar} from "@material-ui/core";
import AccesTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/HelpOutline";
function Header() {
    return(
        <div className="header">
            
            <div className="header_left" >
                <Avatar className="header_avatar" alt="Ali Ashraf" src="" />
                <AccesTimeIcon/>
            </div>
            <div className="header_search" >
                <SearchIcon/>
                <input placeholder="Search MigraCode Barcelona" />
            </div>
            <div className="header_right" >
                <HelpIcon/>
            </div>

        </div>
    );
};



export default Header;