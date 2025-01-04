import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./langSwitcher.css";
import constants from "../../constants.json";

function LangSwitcher() {
  const [showDes, setShowDes] = useState(false);
  const [desContent, setDesContent] = useState("");

  const langs: any = {
    en: { nativeName: constants.langCodeEN },
    ta: { nativeName: constants.langCodeTA },
    ja: { nativeName: constants.langCodeJA },
  };

  const { i18n, t } = useTranslation();

  const changeDesState = (langCode: string) => {
    const translatedText = t(`translationDes${langCode}`);
    console.log(translatedText);

    setShowDes(true);
    setDesContent(translatedText);
  };

  const onMouseEnterBtn = (event: any) => {
    switch (event.target.innerText) {
      case constants.langCodeEN:
        changeDesState(constants.langCodeEN);
        break;
      case constants.langCodeTA:
        console.log("entered TA");

        changeDesState(constants.langCodeTA);
        break;
      case constants.langCodeJA:
        changeDesState(constants.langCodeJA);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {showDes && (
        <div className="langDes">
          <p
            style={{
              margin: "10px 0px",
              fontWeight: "light",
              letterSpacing: "4px",
              fontSize: "14px",
            }}
          >
            {desContent}
          </p>
        </div>
      )}

      <div className="langSwitchContainer">
        <div>
          {Object.keys(langs).map((lang) => (
            <button
              className="langSwitchBtn"
              onMouseEnter={(e) => onMouseEnterBtn(e)}
              style={{
                backgroundColor: "white",
                borderWidth: "0px",
                margin: "0px 0px",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
              }}
              type="submit"
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              onMouseLeave={() => setShowDes(false)}
              disabled={i18n.resolvedLanguage === lang}
            >
              {langs[lang].nativeName}
            </button>
          ))}
        </div>

        <h4 style={{ margin: "5px 0px" }}>{t("switchLanguage")}</h4>
      </div>
    </div>
  );
}

export default LangSwitcher;
