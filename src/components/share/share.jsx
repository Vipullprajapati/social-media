import React from "react";
import "./share.css";
import { PermMedia } from "@mui/icons-material";

export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://avatars.githubusercontent.com/u/10183678?v=4"
            alt="profile"
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="What's happening?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Share or like</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
