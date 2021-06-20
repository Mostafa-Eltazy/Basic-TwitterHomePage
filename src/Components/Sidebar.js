import React from "react";
import "../Style/Sidebar.css";
import SidebarOption from "./SidebarOption";
import Icon from "../Components/Icons";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <Icon.TwitterIcon className="sidebar_tweeticon" />
      <SidebarOption active text="Home" Icon={Icon.HomeIcon} />
      <SidebarOption text="Explore" Icon={Icon.SearchIcon} />
      <SidebarOption text="Notifications" Icon={Icon.NotificationsNoneIcon} />
      <SidebarOption text="Massages" Icon={Icon.MailOutlineIcon} />
      <SidebarOption text="Bookmark" Icon={Icon.BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={Icon.ListAltIcon} />
      <SidebarOption text="Profile" Icon={Icon.PermIdentityIcon} />
      <SidebarOption text="More" Icon={Icon.MoreHorizIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
