import { Button } from "@mui/material";

import "./Button.css";

const CustomButton = ({ text, icon, value }) => {
  const fValue = value;

  const sendMail = (a) => {
    a.preventDefault();
    const subject = "";
    const body = "";
    window.location.href =
      "mailto:sankareganthan@gmail.com?subject=" + subject + "&body=" + body;

    return false;
  };

  const downloadFile = (e) => {
    e.preventDefault();

    window.open("https://sankareganthan.com/Sankar%20Resume_pdf.pdf", "_blank");

    return false;
  };

  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      onClick={fValue === "sendMail" ? sendMail : downloadFile}
    >
      <span className="btn_text" style={{ color: "black" }}>
        {text}
      </span>
    </Button>
  );
};

export default CustomButton;
