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
          <li className="sidebarListIteam">
            <RssFeed />
            <span className="sidebarListItemText">feed</span>
          </li>
          <li className="sidebarListIteam">
            <Chat />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListIteam">
            <PlayCircle />
            <span className="sidebarListItemText">PlayCircle</span>
          </li>
          <li className="sidebarListIteam">
            <Group />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListIteam">
            <Bookmark />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListIteam">
            <Help />
            <span className="sidebarListItemText">Help</span>
          </li>
          <li className="sidebarListIteam">
            <WorkOutline />
            <span className="sidebarListItemText">WorkOutline</span>
          </li>
          <li className="sidebarListIteam">
            <Event />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListIteam">
            <WorkOutline />
            <span className="sidebarListItemText">WorkOutline</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img src="https://avatars.githubusercontent.com/u/10183678?v=4" alt="profile"  className="sidebarFriendImg"/>
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://avatars.githubusercontent.com/u/10183678?v=4" alt="profile"  className="sidebarFriendImg"/>
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://avatars.githubusercontent.com/u/10183678?v=4" alt="profile"  className="sidebarFriendImg"/>
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://avatars.githubusercontent.com/u/10183678?v=4" alt="profile"  className="sidebarFriendImg"/>
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://avatars.githubusercontent.com/u/10183678?v=4" alt="profile"  className="sidebarFriendImg"/>
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://avatars.githubusercontent.com/u/10183678?v=4" alt="profile"  className="sidebarFriendImg"/>
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://avatars.githubusercontent.com/u/10183678?v=4" alt="profile"  className="sidebarFriendImg"/>
                <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriend">
                <img src="https://avatars.githubusercontent.com/u/10183678?v=4" alt="profile"  className="sidebarFriendImg"/>
                <span className="sidebarFriendName">John Doe</span>
            </li>
        </ul>
      </div>
    </div>
  );
}
