import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import AssignmentIcon from "@mui/icons-material/Assignment";

import monsterrolodex from "../assets/images/monsterrolodex.JPG";
import websitelandingpage from "../assets/images/websitelandingpage.jpg";
import guessmynumber from "../assets/images/guessmynumber.jpg";
import piggame from "../assets/images/piggame.jpg";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Language } from "@mui/icons-material";

export default {
  name: "Sankar Eganthan",
  title: "Front-end web developer",
  birthday: "19th April 1986",
  email: "sankareganthan@gmail.com",
  address: "No 7 Kamaraj Street Cholan Nagar, Chennai 600109",
  phone: "7299476012",
  socials: {
    Facebook: {
      link: "https://www.facebook.com/sankar.eganthan.5/",
      text: "Sankar Eganthan",
      icon: <FacebookIcon />,
    },

    Instagram: {
      link: "https://www.instagram.com/sankareganthan/?hl=en",
      text: "Sankar Eganthan",
      icon: <InstagramIcon />,
    },

    LinkedIn: {
      link: "https://www.linkedin.com/in/sankar-eganthan-598a61183/",
      text: "Sankar Eganthan",
      icon: <LinkedInIcon />,
    },

    GitHub: {
      link: "https://github.com/SankarEganthan",
      text: "Sankar Eganthan",
      icon: <GitHubIcon />,
    },
  },

  about:
    "Hi, I'm Sankar. I'm a Front End Developer interested to bring the design into realistic web apps.\n\nI'm focused on building products with JavaScript, specifically with React.\n\nWhen I'm not coding, I'm likely at the gym or surfing the city",

  experiences: [
    {
      title: "RRD - Composition Specialist",
      date: "Nov 2021 - Present",
      description:
        "Converting XML document to desired stylized financial book by using XSLT, Perl and transformation, conditional based macros in the XPP application. Key contributor and fully responsible for the style and conditional rule content in the assigned projects",
    },
    {
      title: "RRD - Project Co-ordinator",
      date: "Jan 2016 - Oct 2021",
      description:
        "People Management, Training & Troubleshooting, Testing & Feedback, Reports and Business activities and events. Responsible for the team productivity & quality performance.",
    },
    {
      title: "RRD - Senior Document Specialist",
      date: "Jan 2011 - Dec 2015",
      description:
        "People Management, Training & Troubleshooting and responsible for the all assigned project involved process completion and quality",
    },
    {
      title: "RRD - Document Specialist",
      date: "Oct 2007 - Dec 2010",
      description:
        "Applying the instructed style components and modules to get the desired output for the assigned financial projects based on the client expectation ",
    },
  ],

  educations: [
    {
      title: "C-Tech Certificate in Graphic Design & Communication",
      date: "Year of passing - 2018",
      description: "Grade: Good",
    },
    {
      title: "MBA - Measi Institute of Management",
      date: "Year of passing - 2012",
      description: "Marks: 66%",
    },
    {
      title: "Diploma in Software Engineering",
      date: "Year of passing - 2009",
      description: "Grade: Good",
    },
    {
      title: "BBA - Madras University of Distance Education",
      date: "Year of passing - 2007",
      description: "Marks: 49%",
    },
    {
      title: "+2 - Private",
      date: "Year of passing - 2004",
      description: "Marks: 45%",
    },
    {
      title: "10th - Rangaswamy Mat. Hr. Sec. School",
      date: "Year of passing - 2001",
      description: "Marks: 68%",
    },
  ],

  services: [
    {
      title: "Front-end web development",
      description: "I create your web apps UI ",
      icon: <WebIcon />,
    },
    {
      title: "Branding Identity",
      description: "I will make you a brand that is catchy and leaves a trace",
      icon: <AssignmentIcon />,
    },
    {
      title: "Illustrator",
      description: "I will make your imaginary into real",
      icon: <DriveFileRenameOutlineIcon />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["React JS", "Javascript", "Material UI"],
    },
    {
      title: "GRAPHIC DESIGN",
      description: ["PhotoShop", "Illustrator", "InDesign"],
    },
  ],

  projects: [
    {
      tag: "React Project",
      url: monsterrolodex,
      title: "Monsters Rolodex",
      caption: "Monsters search tool",
      description:
        "Monsters Rolodex app helps to find the monsters created with React js",
      links: [
        {
          link: "https://github.com/SankarEganthan/sankar-monsters-rolodex",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sankareganthan.com/monsters-rolodex",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Website Landing page",
      url: websitelandingpage,
      title: "Architecture Site",
      caption: "Website Landing page",
      description:
        "Website Landing page created using HTML, CSS and Javascript",
      links: [
        {
          link: "https://github.com/SankarEganthan/Architecture-Site",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sankareganthan.com/Architecture%20Site/index.html",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Funny Game",
      url: guessmynumber,
      title: "Guess my Number",
      caption: "Identifing the correct number",
      description: "Guess my Number is created using HTML, CSS and Javascript",
      links: [
        {
          link: "https://github.com/SankarEganthan/Guess-my-number",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sankareganthan.com/Guess%20my%20number/index.html",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "Funny Game",
      url: piggame,
      title: "Pig Game",
      caption: "Rolling the dice to get 100 points",
      description: "Pig Game  is created using HTML, CSS and Javascript",
      links: [
        {
          link: "https://github.com/SankarEganthan/Pig-Game",
          icon: <GitHubIcon />,
        },
        {
          link: "https://sankareganthan.com/Pig%20Game/index.html",
          icon: <Language />,
        },
      ],
    },
  ],
};
