import React from "react"
import "./Sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

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
            
        </div>
    )
}


export default Sidebar