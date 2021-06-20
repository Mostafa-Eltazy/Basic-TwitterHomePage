import React from "react";
import "../Style/SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebaroptin ${active && "sidebaroption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
