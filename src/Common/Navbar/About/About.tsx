import { useState } from "react";
import "./About.css";
import myPic from "../../../assets/profil.jpg";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };
  return (
    <div>
      <div
        style={{
          cursor: "pointer",
          width: "80px",
          height: "40px",
          zIndex: "3",
        }}
        onClick={handleClick}
      >
        <h4>{t("aboutMe")}</h4>
      </div>
      <div className={`screen ${isVisible ? "active" : ""}`}>
        <div className="closeContainer" onClick={handleClick}>
          <IoCloseOutline size={35} />
        </div>
        <div className="location" onClick={handleClick}>
          <FaLocationDot size={25} style={{ marginRight: "15px" }} />
          <p>{t("location")}</p>
        </div>
        <div className="aboutDes">
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            {t("aboutMe")}
          </h2>
          <p
            style={{
              textAlign: "center",
              margin: "0",
              fontSize: "20px",
              fontWeight: "lighter",
            }}
          >
            {t("aboutFirstLine")}
          </p>
          <p
            style={{
              textAlign: "center",
              margin: "0",
              fontSize: "20px",
              fontWeight: "lighter",
            }}
          >
            {t("aboutSecondLine")}
          </p>

          <p
            style={{
              textAlign: "center",
              margin: "0",
              fontSize: "20px",
              fontWeight: "lighter",
              marginBottom: "40px",
            }}
          >
            {t("aboutThirdLine")}
          </p>
          <p style={{ textAlign: "center", fontWeight: "lighter" }}>
            {t("likes")}
          </p>
          <p
            style={{
              textAlign: "center",
              fontWeight: "lighter",
              color: "black",
            }}
          >
            <a
              style={{ color: "black" }}
              href="https://here-is-my-portfo.surge.sh/"
              target="_blank"
            >
              {t("oldPortfolio")}
            </a>
          </p>
        </div>
        <div className="aboutDes">
          <div
            className="imgContainer"
            style={{ objectFit: "contain", textAlign: "center" }}
          >
            <img src={myPic} alt="" height="auto" width={500} />
            <p
              style={{
                textAlign: "center",
                margin: "0",
                fontWeight: "lighter",
              }}
            >
              {t("photoDesFirstLine")}
            </p>
            <p
              style={{
                textAlign: "center",
                margin: "0",
                fontWeight: "lighter",
              }}
            >
              {t("photoDesSecondLine")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
