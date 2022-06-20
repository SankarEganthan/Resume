import {
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tabs,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import "./Portfolio.css";

import resumeData from "../../utils/resumeData";
import { Card } from "react-bootstrap";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12} className="section_tab">
        <Tabs
          value={tabValue}
          indicatorColor="white"
          onChange={(event, newValue) => setTabValue(newValue)}
          className="customTabs"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.url}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="customCard_description"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
        maxWidth={"lg"}
        fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.url} className="projectDialog_image" />
        <DialogContent>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="projectDialog_icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
      ;
    </Grid>
  );
};

export default Portfolio;
