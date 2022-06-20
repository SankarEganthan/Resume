import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";

import "./Timeline.css";

const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className={"separator_padding"}>
      <TimelineDot variant={"outlined"} className={"timeline_dot"} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimelineSeparator;
