import { Grid, Typography, Icon, Paper, TextField } from "@mui/material";
import resumeData from "../../utils/resumeData";

import CustomTimeline from "../../components/Timeline/Timeline";
import CustomTimelineSeparator from "../../components/Timeline/CustomTimelineSeparator";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

import "./Resume.css";
import { TimelineContent, TimelineDot, TimelineItem } from "@mui/lab";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Resume = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nrmcgha",
        "template_9faw56v",
        form.current,
        "SJLGxpg-Ppuvz8zQv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Email Sent");
    form.current.reset();
  };

  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experiances */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Working History */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Work Experience"} icon={<SchoolIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />

                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}

            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Education"} icon={<WorkIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />

                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <div className="service">
                  <Icon
                    className="service_icon pb_45"
                    style={{ width: "80px" }}
                  >
                    {service.icon}
                  </Icon>

                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className="section graybg pb_45 p_50">
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={6}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container spacing={5} className="section pt_45 pb_45">
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact Form</h6>
          </Grid>
          <Grid item xs={12}>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    label="E-mail"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    variant="standard"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input className="custom_btn" type="submit" value="Send" />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>E-Mail: </span>
                    {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className="contactInfo_social">
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Resume;
