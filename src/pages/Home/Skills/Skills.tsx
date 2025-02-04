import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "./Skills.css";
import reactImg from "../../../assets/react.png";
import ngImg from "../../../assets/Angular_full_color_logo.svg.png";
import dotNetImg from "../../../assets/dotnet.png";
import nodeImg from "../../../assets/node js.png";
import safeImg from "../../../assets/safe.png";
import iotImg from "../../../assets/iot hub.png";
import advInstImg from "../../../assets/Advanced-Installer.png";
import bashImg from "../../../assets/bash script.png";
import powershellImg from "../../../assets/powershell.png";
import reactNative from "../../../assets/react_native_logo.png";

function Skills(props: any) {
  const { setShowShadow } = props;
  const logoArr = [reactImg, reactNative, ngImg, nodeImg, dotNetImg, safeImg];
  const logoSubArr = [powershellImg, bashImg, advInstImg, iotImg];
  const [position, setPosition] = useState({ y1: 0 });
  const [oppPosition, setOppPosition] = useState({ y1: 0 });
  const [isDraggingState, setIsDraggingState] = useState(false);
  const isDragging = useRef(false);
  const [showSkillMessage, setShowSkillMessage] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const offset = useRef({ y: 0 });
  const { t } = useTranslation();

  const handleMouseDown = (e: any) => {
    setIsDraggingState(true);
    isDragging.current = true;
    offset.current = {
      y: e.clientY - position.y1,
    };
    console.log(offset.current);
  };

  const handleMouseMove = (e: any) => {
    console.log(isDragging.current);

    if (!isDragging.current) return;

    const newY1 = e.clientY - offset.current.y;
    let newOppY1 = -e.clientY + offset.current.y;

    if (newY1 > 120) setShowShadow(true);
    if (newY1 < 120) setShowShadow(false);

    if (newOppY1 <= -230) {
      isDragging.current = false;
      setIsDraggingState(false);
      return;
    }

    if (newOppY1 >= -1) {
      newOppY1 = newOppY1 - 5;
      if (!isFirst) {
        isDragging.current = false;
        setIsDraggingState(false);
        return;
      }
      setIsFirst(false);
    }
    console.log("y1  " + newY1);
    console.log("Oppy1  " + newOppY1);

    // Update both div1 and div2 positions
    setPosition({
      y1: newY1,
    });
    setOppPosition({
      y1: newOppY1,
    });
  };

  const handleMouseEnter = () => {
    setShowSkillMessage(true);
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    setIsDraggingState(false);
    setShowSkillMessage(false);
  };
  return (
    <div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "120px",
          height: "auto",
          alignItems: "center",
          left: "-22%",
          bottom: oppPosition.y1,
          userSelect: "none" /* Standard syntax */,
        }}
      >
        {showSkillMessage && (
          <p className="skillsDes">{t("skillsHoverText")}</p>
        )}

        <span>
          <h3 style={{ fontWeight: "lighter" }}>{t("skills")}</h3>
        </span>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseDown={(e) => handleMouseDown(e)}
          className={isDraggingState ? "grabbingCursour" : "justGrab"}
          style={{
            height: "80px",
            width: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: "1px",
            borderRadius: "100%",
            borderStyle: "solid",
          }}
        >
          <MdKeyboardDoubleArrowDown size={25} />
        </div>
      </div>
      <div
        className="exp2"
        style={{
          position: "absolute",
          top: oppPosition.y1,
          zIndex: -1,
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="verticalLine"
          style={{ height: `${250 + position.y1 + 50}px` }}
        ></div>

        <h4>{t("technicalSkills")} :</h4>
        {logoArr.map((eachlogo, i) => (
          <img
            key={i}
            src={eachlogo}
            alt=""
            style={{
              height: "70px",
              width: "70px",
              objectFit: "contain",
              margin: "0px 20px",
            }}
          />
        ))}
        <h4>{t("learnedOutOfCuriosity")} : </h4>
        {logoSubArr.map((eachlogo, i) => (
          <img
            key={i}
            src={eachlogo}
            alt=""
            style={{
              height: "60px",
              width: "60px",
              objectFit: "contain",
              margin: "0px 20px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
