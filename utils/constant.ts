import htmlLogo from "../public/logos/html5-logo.png";
import cssLogo from "../public/logos/css-logo.png";
import jsLogo from "../public/logos/js-logo.png";
import bootstrapLogo from "../public/logos/bootstrap-logo.png";
import sassLogo from "../public/logos/sass-logo.png";
import nextsLogo from "../public/logos/nexts-logo.png";
import reactLogo from "../public/logos/react-logo.png";
import typescriptLogo from "../public/logos/typescript-logo.png";
import gitlabLogo from "../public/logos/gitlab-ci-cd-logo.png";
import dockerLogo from "../public/logos/docker-logo.png";
import digitalOceanLogo from "../public/logos/digital-ocean-logo.png";

const CONSTANT = {
  title: "Sengkhun Lim | Full Stack Developer",
  description:
    "Full Stack Developer, with extensive knowledge and years of experience, working with latest technologies to integrate in projects, delivering high quality work.",
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
    { label: "React & React Native", percentage: 100 },
    { label: "JavaScript & Typescript", percentage: 100 },
    { label: "HTML & CSS", percentage: 95 },
    { label: "UX & UI", percentage: 95 },
  ],
  backend: [
    { label: "API Development", percentage: 100 },
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
  { title: "JS", imgSrc: jsLogo, alt: "JS logo", link: "https://nodejs.org/" },
  {
    title: "Bootstrap",
    imgSrc: bootstrapLogo,
    alt: "Bootstrap logo",
    link: "https://getbootstrap.com/",
  },
  {
    title: "Sass",
    imgSrc: sassLogo,
    alt: "Sass logo",
    link: "https://sass-lang.com/",
  },
  {
    title: "Nexts.JS",
    imgSrc: nextsLogo,
    alt: "Nexts.JS logo",
    link: "https://nextjs.org/",
  },
  {
    title: "ReactJS",
    imgSrc: reactLogo,
    alt: "ReactJS logo",
    link: "https://reactjs.org/",
  },
  {
    title: "Typescript",
    imgSrc: typescriptLogo,
    alt: "Typescript logo",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "GitLab CI/CD",
    imgSrc: gitlabLogo,
    alt: "GitLab CI/CD logo",
    link: "https://docs.gitlab.com/ee/ci/",
  },
  {
    title: "Docker",
    imgSrc: dockerLogo,
    alt: "Docker logo",
    link: "https://www.docker.com/",
  },
  {
    title: "Digital Ocean",
    imgSrc: digitalOceanLogo,
    alt: "Digital Ocean logo",
    link: "https://www.digitalocean.com/",
  },
];
