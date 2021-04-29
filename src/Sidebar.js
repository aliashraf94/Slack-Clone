import React from "react"
import SidebarOptions from "./SidebarOptions"
import "./Sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>MigraCode Barcelona</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Ali raza Ashraf
                    </h3>

                </div>
                <div className="sidebar_createicon">
                    <CreateIcon/>
                </div>
                

            </div>
            <div>
                <SidebarOptions Icon={InsertCommentIcon} title="Thread" />
                <SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
                <SidebarOptions Icon={DraftsIcon} title="Saved items" />
                <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
                <SidebarOptions Icon={FileCopyIcon} title="File browser" />
                <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
                <SidebarOptions Icon={AppsIcon} title="Apps" />
                <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
                <hr className="break-line" ></hr>
                <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
                <hr className="break-line" ></hr>
                <SidebarOptions Icon={AddIcon} title="Add Channels" />
            </div>
            
            
        </div>
    )
}


export default Sidebar