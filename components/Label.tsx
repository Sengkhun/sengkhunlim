import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { IconBaseProps } from "react-icons/";

interface Props {
  icon: React.ReactElement<IconBaseProps>;
  title: string;
  subtitle: string;
  href?: string;
  newTab?: boolean;
}

const Label = (props: Props) => {
  // states
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="label-container">
      {props.icon}
      <div className="text-container">
        <span className="title">{props.title}</span>
        <a
          className="subtitle"
          href={props.href}
          target={props.newTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
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
