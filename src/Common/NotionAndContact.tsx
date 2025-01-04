import { useTranslation } from "react-i18next";

function NotionAndContact() {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className="notionDes"
        style={{
          textAlign: "left",
          position: "absolute",
          width: "300px",
          bottom: "0",
          left: "0",
          margin: "10px",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", fontWeight: "lighter" }}>
          {t("notionOfText")}
        </p>
        <h3 style={{ margin: 0, fontSize: "14px", fontWeight: "lighter" }}>
          "{t("notionOfQuote")}"
        </h3>
        <h4 style={{ margin: 0, fontSize: "14px", fontWeight: "lighter" }}>
          - {t("authorName")}
        </h4>
      </div>
      <div
        className="contactDes"
        style={{
          textAlign: "right",
          position: "absolute",
          width: "300px",
          bottom: "0",
          right: "0",
          margin: "10px",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", fontWeight: "lighter" }}>
          {t("praiseOrScold")} -
        </p>
        <h3 style={{ margin: 0, fontSize: "14px", fontWeight: "lighter" }}>
          namaelite@gmail.com
        </h3>
      </div>
    </div>
  );
}

export default NotionAndContact;
