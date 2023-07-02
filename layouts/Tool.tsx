import React from "react";
import Image from "next/image";

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

const tools = [
  { title: "HTML", imgSrc: htmlLogo, alt: "HTML logo" },
  { title: "CSS", imgSrc: cssLogo, alt: "CSS logo" },
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

const Tool = () => {
  return (
    <div id="tool" className="section-container tool-section">
      <div className="container">
        <h1 className="section-title">Tools</h1>
        <h6 className="section-subtitle">What I use to build this website</h6>

        <div className="image-container">
          {tools.map((item, idx) => (
            <a
              key={idx}
              title={item.title}
              className="image-inner-container"
              href={item.link}
              target={item.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <Image src={item.imgSrc} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tool;
