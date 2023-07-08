import React from "react";

interface LoaderProps {
  className?: string;
}

const Loader = (props: LoaderProps) => {
  return <div className={`spinner-grow ${props.className}`} role="status" />;
};

export default Loader;
