import htmlLogo from "../public/logos/html5-logo.png";
import cssLogo from "../public/logos/css-logo.png";
import jsLogo from "../public/logos/js-logo.png";
import sassLogo from "../public/logos/sass-logo.png";
import nextjsLogo from "../public/logos/nextjs-logo.png";
import reactLogo from "../public/logos/react-logo.png";
import typescriptLogo from "../public/logos/typescript-logo.png";
import gitLogo from "../public/logos/git-logo.png";
import dockerLogo from "../public/logos/docker-logo.png";
import googleCloudLogo from "../public/logos/google-cloud-logo.png";
import firebaseLogo from "../public/logos/firebase-logo.png";
import sqlLogo from "../public/logos/sql-logo.png";
import mongoDBLogo from "../public/logos/mongo-db-logo.png";
import graphQLLogo from "../public/logos/graphql-logo.png";
import expressLogo from "../public/logos/express-logo.png";
import laravelLogo from "../public/logos/laravel-logo.png";

const CONSTANT = {
  siteName: "Sengkhun Lim",
  title: "Sengkhun Lim | Full Stack Developer",
  description:
    "With a robust {yearsOfExperience}+ years of experience, I've been busy creating scalable web and mobile apps. I've got a strong connection to the health, real estate, food, and sports industries. Throughout my career, I've fine-tuned my skills to effortlessly weave the latest technology into web and app projects, always ensuring top-quality outcomes.",
  keywords:
    "Full Stack Developer, Latest Technologies, High-Quality Work, React, React Native, Mobile App Development, Backend Development, ExpressJS, GraphQL, MongoDB, Firebase, Google Cloud Services, Monitoring Tools, DevOps, Healthcare Applications, Sports Applications, Food Industry Applications, Problem-Solving Skills, Software Development, Proficient, Experience",
  author: "Sengkhun Lim",
  phone: "0431 189 999",
  email: "support@sengkhun.com",
  location: "Adelaide, South Australia",
  locationLink: "https://goo.gl/maps/SANv3CE2BQJzpcjSA",
  linkedInLink: "https://linkedin.com/in/sengkhunlim",
  cvFilename: "Sengkhun_Lim_CV.pdf",
  startedDate: "2019-01-01",
};

export default CONSTANT;

export const ANIMATION_CONFIG = {
  duration: 400,
};

export const BREAK_POINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const GA_CATEGORIES = {
  buttonClick: "Button Clicks",
  tabClick: "Tab Clicks",
  iconClick: "Icon Clicks",
  linkClick: "Link Clicks",
  navClick: "Nav Button Clicks",
};

export const SKILL_SETS = {
  frontend: [
    { label: "Web & Mobile", percentage: 100 },
    { label: "JavaScript & Typescript", percentage: 100 },
    { label: "Responsive Design", percentage: 100 },
    { label: "UX & UI Principles", percentage: 100 },
  ],
  backend: [
    { label: "API Design & Development", percentage: 100 },
    { label: "Database Management", percentage: 100 },
    { label: "Cloud Hosting", percentage: 95 },
    { label: "Security and Authentication", percentage: 95 },
  ],
};

export const QUALIFICATION_TIMELINES = {
  work: [
    {
      title: "Full Stack Developer",
      subtitle: "Bigwig Advertising & Digital, Australia",
      year: "July 2021 - present",
    },
    {
      title: "Full Stack Project Lead Developer",
      subtitle: "TK CAPITAL PLC., Cambodia",
      year: "Aug 2018 - Jan 2020",
    },
    {
      title: "Backend Developer",
      subtitle: "GoSoccer, Cambodia",
      year: "Apr 2017 - Mar 2019",
    },
    {
      title: "Full Stack Developer",
      subtitle: "Reaksmey Furniture, Cambodia",
      year: "2016 - 2019",
    },
  ],
  education: [
    {
      title: "Master's degree in Information Technology",
      subtitle: "University of South Australia, Australia",
      year: "Jul 2020 -  Nov 2021",
    },
    {
      title: "Graduate Certificate in Information Technology",
      subtitle: "University of South Australia, Australia",
      year: "Mar 2020 - Jul 2020",
    },
    {
      title: "Bachelor's degree in Computer Science",
      subtitle: "Paragon International Univeristy, Cambodia",
      year: "2015 - 2019",
    },
  ],
  award: [
    {
      title: "Top 5% student in the Master's degree program",
      subtitle: "University of South Australia, Australia",
      year: "Mar 2022",
    },
    {
      title: "Honor Student Award",
      subtitle: "Paragon International Univeristy, Cambodia",
      year: "Jul 2019",
    },
    {
      title: "Winner of SmartStart Cycle 1 Grand Final",
      subtitle: "Smart Axiata, Cambodia",
      year: "Jan 2018",
    },
    {
      title: "Winner of the SmartStart Young Innovator Program",
      subtitle: "Smart Axiata, Cambodia",
      year: "May 2017",
    },
  ],
};

export const TECHNOLOGIES = [
  {
    title: "ReactJS",
    imgSrc: reactLogo,
    alt: "ReactJS logo",
    link: "https://reactjs.org/",
  },
  {
    title: "React Native",
    imgSrc: reactLogo,
    alt: "React Native logo",
    link: "https://reactnative.dev/",
  },
  {
    title: "Typescript",
    imgSrc: typescriptLogo,
    alt: "Typescript logo",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "JavaScript",
    imgSrc: jsLogo,
    alt: "JavaScript logo",
    link: "https://www.w3schools.com/js/",
  },
  {
    title: "HTML",
    imgSrc: htmlLogo,
    alt: "HTML logo",
    link: "https://www.w3schools.com/html/",
  },
  {
    title: "CSS",
    imgSrc: cssLogo,
    alt: "CSS logo",
    link: "https://www.w3schools.com/css/",
  },
  {
    title: "Sass",
    imgSrc: sassLogo,
    alt: "Sass logo",
    link: "https://sass-lang.com/",
  },
  {
    title: "Google Cloud",
    imgSrc: googleCloudLogo,
    alt: "Google Cloud logo",
    link: "https://cloud.google.com/",
  },
  {
    title: "Firebase",
    imgSrc: firebaseLogo,
    alt: "Firebase logo",
    link: "https://firebase.google.com/",
  },
  {
    title: "GraphQL",
    imgSrc: graphQLLogo,
    alt: "GraphQL logo",
    link: "https://graphql.org/",
  },
  {
    title: "SQL",
    imgSrc: sqlLogo,
    alt: "SQL logo",
    link: "https://www.w3schools.com/sql/",
  },
  {
    title: "MongoDB",
    imgSrc: mongoDBLogo,
    alt: "MongoDB logo",
    link: "https://www.mongodb.com/",
  },
  {
    title: "ExpressJS",
    imgSrc: expressLogo,
    alt: "Express logo",
    link: "https://expressjs.com/",
  },
  {
    title: "Docker",
    imgSrc: dockerLogo,
    alt: "Docker logo",
    link: "https://www.docker.com/",
  },
  {
    title: "Git",
    imgSrc: gitLogo,
    alt: "Git logo",
    link: "https://git-scm.com/",
  },
  {
    title: "Nexts.JS",
    imgSrc: nextjsLogo,
    alt: "Nexts.JS logo",
    link: "https://nextjs.org/",
  },
  {
    title: "Laravel",
    imgSrc: laravelLogo,
    alt: "Laravel logo",
    link: "https://laravel.com/",
  },
];
