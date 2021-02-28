import React from "react";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

function Profile({ user, auth }) {
  return (
    <div>
      <div className="sidebar__profile">
        <div>
          <Avatar onClick={() => auth.signOut()} src={user.photo} />
          <p
            onClick={() => auth.signOut()}
            style={{ margin: "2px", cursor: "pointer" }}
          >
            LogOut
          </p>
        </div>

        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Profile;
