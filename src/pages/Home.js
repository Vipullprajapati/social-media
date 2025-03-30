import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/sidebar";
import Feed from "../components//feed/feed";
import Rightbar from "../components/rightbar/rightbar";
import "./home.css";
// import { Feed } from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
