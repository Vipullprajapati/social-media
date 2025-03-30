import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  Help,
  WorkOutline,
  Event,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListI">
            <RssFeed />
            <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarListI">
            <Chat />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListI">
            <PlayCircle />
            <span className="sidebarListItemText">PlayCircle</span>
          </li>
          <li className="sidebarListI">
            <Group />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListI">
            <Bookmark />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListI">
            <Help />
            <span className="sidebarListItemText">Help</span>
          </li>
          <li className="sidebarListI">
            <WorkOutline />
            <span className="sidebarListItemText">WorkOutline</span>
          </li>
          <li className="sidebarListI">
            <Event />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListI">
            <WorkOutline />
            <span className="sidebarListItemText">WorkOutline</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
