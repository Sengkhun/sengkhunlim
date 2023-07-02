import React from "react";
import Image, { ImageProps } from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

interface Props {
  imgSrc: ImageProps | any;
  title: string;
  description: string;
  url: string;
}

function Gallery(props: Props) {
  const onClick = () => {
    window.open(props.url);
  };

  return (
    <div className="gallery-container" onClick={onClick}>
      <div className="gallery-image">
        <Image src={props.imgSrc} alt={props.title} />
      </div>

      <div className="gallery-content">
        <h6>{props.title}</h6>
        <p>{props.description}</p>
        <a
          className="detail-link"
          href={props.url}
          target="_blank"
          rel="noreferrer"
        >
          View Detail <BsArrowRightShort />
        </a>
      </div>
    </div>
  );
}

export default Gallery;
