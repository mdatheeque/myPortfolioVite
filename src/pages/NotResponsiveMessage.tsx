import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import LangSwitcher from "../Common/LangSwitcher/LangSwitcher";
import "./NotResponsiveMessage.css";

function NotResponsiveMessage() {
  const { t } = useTranslation();
  return (
    <div className="notResponsiveStyle">
      <object
        className="navBarContainer__logo"
        data={logo}
        width={80}
        height={80}
      >
        Logo
      </object>
      <div className="myName">
        <span>{t("nonResponsiveHey")}</span>
        <h1>
          {t("firstName")} {t("lastName")}
        </h1>
        <span>{t("nonResponsiveHere")}</span>
      </div>
      <div className="description">
        <p>{t("nonResponsiveDesFirst")}</p>
        <p>{t("nonResponsiveDesSecond")}</p>
      </div>
      <div className="langSwitcherContainer">
        <LangSwitcher />
      </div>
    </div>
  );
}

export default NotResponsiveMessage;
