import React from "react";
import { IconBaseProps } from "react-icons/";
import ReactGA from "react-ga4";

import { GA_CATEGORIES } from "../utils/constant";

interface Props {
  icon: React.ReactElement<IconBaseProps>;
  title: string;
  subtitle: string;
  href?: string;
  newTab?: boolean;
}

const Label = (props: Props) => {
  const onLinkClick = () => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.linkClick,
      action: props.title,
      label: props.href,
    });
  };

  return (
    <div className="label-container" title={props.title}>
      {props.icon}
      <div className="text-container">
        <span className="title">{props.title}</span>
        <a
          className="subtitle"
          href={props.href}
          target={props.newTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
          onClick={onLinkClick}
        >
          {props.subtitle}
        </a>
      </div>
    </div>
  );
};

Label.defaultProps = {
  newTab: false,
};

export default Label;
