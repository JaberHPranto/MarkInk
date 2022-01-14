import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import React, { useState } from "react";
import "../styles/sidebar.css";
import Hints from "./SidebarItems/Hints";
import Notes from "./SidebarItems/Notes";

function Sidebar() {
  const [info, setInfo] = useState("hints");

  return (
    <div className="sidebar_container">
      <div className="sidebar_icons">
        <div className="si_bulb">
          <TipsAndUpdatesIcon onClick={() => setInfo("hints")} />
        </div>
        <div className="si_note">
          <NoteAltIcon onClick={() => setInfo("notes")} />
        </div>
        <div className="si_settings">
          <SettingsIcon />
        </div>
      </div>
      <div className="sidebar_info">
        {info === "hints" ? <Hints /> : <Notes />}
      </div>
    </div>
  );
}

export default Sidebar;
