import { TimelineItem } from "@mui/lab";
import { TimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";

import CustomTimelineSeparator from "../Timeline/CustomTimelineSeparator";

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a target="_blank" rel="noreferrer" href={link}>
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export default CustomTimelineItem;
