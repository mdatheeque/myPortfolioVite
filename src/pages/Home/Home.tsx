import { useState } from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";
import LangSwitcher from "../../Common/LangSwitcher/LangSwitcher";
import WorkTile from "./WorkTile";
import Skills from "./Skills/Skills";

// function Home() {
//   const { t } = useTranslation();
//   return (
//     <div className="topContainer">
//       <div className="homeContainer">
//         <div className="HomeName">
//           <h1 className="HomeName--MainHeaderText">{t('firstName')}</h1>
//           <h1 className="HomeName--MainHeaderText">{t('lastName')}</h1>
//           <h2 className="HomeName--SubHeaderText">{t('addressingNameText')}</h2>
//         </div>
//         <div className="HomeWorkExpField">work</div>
//       </div>
//     <LangSwitcher />
//     </div>
//   );
// }

function Home() {
  const { t, i18n } = useTranslation();
  const [showShadow, setShowShadow] = useState(false);
  const [currLang, setCurrLang] = useState(i18n.language);

  const handleLangChange = () => {
    setCurrLang(i18n.language);
  };
  i18n.on("languageChanged", handleLangChange);

  return (
    <div className="topContainer">
      <div style={{ position: "relative" }}>
        <Skills setShowShadow={setShowShadow} />
        <div
          className={
            showShadow ? "homeContainer skillsShadow" : "homeContainer"
          }
        >
          <div className="HomeName">
            {currLang == "ja" && (
              <h2 className="HomeName--SubHeaderText">{t("hajimemashite")}</h2>
            )}
            <h1 className="HomeName--MainHeaderText">{t("firstName")}</h1>
            <h1 className="HomeName--MainHeaderText">{t("lastName")}</h1>
            <h2 className="HomeName--SubHeaderText">
              {t("addressingNameText")}
            </h2>
          </div>
          <div className="HomeWorkExpField">
            <WorkTile />
          </div>
        </div>
      </div>
      <div className="langSwitcherContainer">
        <LangSwitcher />
      </div>
    </div>
  );
}

export default Home;
