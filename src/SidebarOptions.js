import React from "react"
import "./SidebarOptions.css"
import Sidebar from "./Sidebar"

function SidebarOptions({Icon, title}) {
    return (
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebarOptions_Icon" />}
            {/* {Icon ? (
                <h3>{title}</h3>
            ): (
                <h3>
                    # {title}
                </h3>
            ) } */}
            {Icon ? <h3>{title}</h3> :
             <h3 className="sidebarOptions_channel">
                <span className="sidebarOptions_hash"># {title}</span>
             </h3> }
        </div>
    )
}

export default SidebarOptions