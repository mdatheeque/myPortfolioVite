import { PiLinkedinLogoLight } from "react-icons/pi";
import { PiGithubLogoLight } from "react-icons/pi";
import { PiBehanceLogoLight } from "react-icons/pi";
import { PiDribbbleLogoLight } from "react-icons/pi";
import "./SideBar.css";

import constants from "../../constants.json";

function SideBar() {
  return (
    <div className="sideBarContainer">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={constants.linkedInLink}
        className="sideBarContainer__logo"
      >
        <PiLinkedinLogoLight size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={constants.githubLink}
        className="sideBarContainer__logo"
      >
        <PiGithubLogoLight size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={constants.behanceLink}
        className="sideBarContainer__logo"
      >
        <PiBehanceLogoLight size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={constants.dribbbleLink}
        className="sideBarContainer__logo"
      >
        <PiDribbbleLogoLight size={25} />
      </a>
    </div>
  );
}

export default SideBar;
