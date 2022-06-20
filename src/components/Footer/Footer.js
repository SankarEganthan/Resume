import { Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Recreated by <span className="footer_cname">{resumeData.name}</span>, <br />
          Clone idea from-
          <a href="https://themeforest.net/user/tavonline" target="_blank">
            Travonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
