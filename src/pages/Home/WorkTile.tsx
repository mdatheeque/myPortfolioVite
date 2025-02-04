import { useState } from "react";
import "./WorkTile.css";
import constants from "../../constants.json";
import { WorkExperienceDetails } from "../../models/workExperienceDetails";
import atosLogo from "../../assets/Atos_logo.png";
import zeissLogo from "../../assets/Zeiss_logo.svg.png";
import futureLogo from "../../assets/future_logo.png";
import { useTranslation } from "react-i18next";

function WorkTile() {
  const { t, i18n } = useTranslation();

  let pastWorkingDetails: WorkExperienceDetails = {
    companyName: t("pastCompanyName"),
    startedFrom: t("pastWorkStarted"),
    endedOn: t("pastWorkEnded"),
    isWorking: false,
    logo: atosLogo,
    designation: t("pastWorkTitle"),
  };

  let presentWorkingDetails: WorkExperienceDetails = {
    companyName: t("presentCompanyName"),
    startedFrom: t("presentWorkStarted"),
    endedOn: t("presentWorkEnded"),
    isWorking: true,
    logo: zeissLogo,
    designation: t("presentWorkTitle"),
  };

  let futureWorkingDetails: WorkExperienceDetails = {
    companyName: t("futureCompanyName"),
    startedFrom: t("futureWorkStarted"),
    endedOn: t("futureWorkEnded"),
    isWorking: false,
    logo: futureLogo,
    designation: t("futureWorkTitle"),
  };

  const handleLangChange = () => {
    pastWorkingDetails = {
      companyName: t("pastCompanyName"),
      startedFrom: t("pastWorkStarted"),
      endedOn: t("pastWorkEnded"),
      isWorking: false,
      logo: atosLogo,
      designation: t("pastWorkTitle"),
    };

    presentWorkingDetails = {
      companyName: t("presentCompanyName"),
      startedFrom: t("presentWorkStarted"),
      endedOn: t("presentWorkEnded"),
      isWorking: true,
      logo: zeissLogo,
      designation: t("presentWorkTitle"),
    };

    futureWorkingDetails = {
      companyName: t("futureCompanyName"),
      startedFrom: t("futureWorkStarted"),
      endedOn: t("futureWorkEnded"),
      isWorking: false,
      logo: futureLogo,
      designation: t("futureWorkTitle"),
    };
    if (isPresentSelected) setWorkingDetails(presentWorkingDetails);
    if (isPastSelected) setWorkingDetails(pastWorkingDetails);
    if (isFutureSelected) setWorkingDetails(futureWorkingDetails);
  };

  i18n.on("languageChanged", handleLangChange);

  const [isPastSelected, setIsPastSelected] = useState(false);
  const [isPresentSelected, setIsPresentSelected] = useState(true);
  const [isFutureSelected, setIsFutureSelected] = useState(false);
  const [workingDetails, setWorkingDetails] = useState<WorkExperienceDetails>(
    presentWorkingDetails
  );

  const onTileHeaderClick = (event: any) => {
    switch (event.target.id) {
      case constants.workTileHeaderTextsPast:
        setIsPastSelected(true);
        setIsPresentSelected(false);
        setIsFutureSelected(false);
        setWorkingDetails(pastWorkingDetails);
        break;
      case constants.workTileHeaderTextspresent:
        setIsPastSelected(false);
        setIsPresentSelected(true);
        setIsFutureSelected(false);
        setWorkingDetails(presentWorkingDetails);
        break;
      case constants.workTileHeaderTextsFuture:
        setIsPastSelected(false);
        setIsPresentSelected(false);
        setIsFutureSelected(true);
        setWorkingDetails(futureWorkingDetails);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="tileHeaders" style={{ width: "350px" }}>
        <span
          id={constants.workTileHeaderTextsPast}
          className={
            isPastSelected
              ? "tileHeaderText titleHeaderTextSelected"
              : "tileHeaderText titleHeaderTextNotSelected"
          }
          onClick={(e) => onTileHeaderClick(e)}
        >
          {t("past")}
        </span>
        <span
          id={constants.workTileHeaderTextspresent}
          className={
            isPresentSelected
              ? "tileHeaderText titleHeaderTextSelected"
              : "tileHeaderText titleHeaderTextNotSelected"
          }
          onClick={(e) => onTileHeaderClick(e)}
        >
          {t("present")}
        </span>
        <span
          id={constants.workTileHeaderTextsFuture}
          className={
            isFutureSelected
              ? "tileHeaderText titleHeaderTextSelected"
              : "tileHeaderText titleHeaderTextNotSelected"
          }
          onClick={(e) => onTileHeaderClick(e)}
        >
          {t("future")}
        </span>
      </div>
      <div className="workDetails">
        <div className="logoContainer">
          <img
            src={workingDetails.logo}
            alt=""
            style={{ height: "60px", width: "60px", objectFit: "contain" }}
          />
        </div>
        <div className="workDetailsContainer">
          <h2>{workingDetails.companyName}</h2>
          <h3>{workingDetails.designation}</h3>
          <h4>{`${workingDetails.startedFrom} - ${workingDetails.endedOn}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default WorkTile;
