import React from "react";
import SimpleMap from "../../Map/SimpleMap/index";

const HomeView = (props) => {
  return (
    <div className="view-container">
      <div className="view-header">{props.header}</div>
      {props.main}
    </div>
  );
};

export default HomeView;
