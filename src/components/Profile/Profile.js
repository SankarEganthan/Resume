import { Typography } from "@mui/material";

import CustomTimeline from "../Timeline/Timeline";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import resumeData from "../../utils/resumeData";

import CustomTimelineItem from "./CustomTimelineItem";

import "./Profile.css";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const Profile = () => {
  const objects = resumeData.socials;

  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img
          src={require("../../assets/images/SankarPic.jpg")}
          alt="Profile Pic"
        />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(objects).map((key) => (
            <CustomTimelineItem
              title={key}
              text={objects[key].text}
              link={objects[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container" style={{ display: "flex" }}>
          <CustomButton
            text={"Download Cv"}
            icon={<GetAppIcon />}
            value={"downloadFile"}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
