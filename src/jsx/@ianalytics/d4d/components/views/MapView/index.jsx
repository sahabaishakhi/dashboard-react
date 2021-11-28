import React, { useState } from "react";
import SimpleMap from "../../Map/SimpleMap/index";
import GeoMap from "../../Map/GeoMap/index";
import { faGameConsoleHandheld } from "@fortawesome/pro-light-svg-icons";

const MapView = () => {
  const [simpleView, setSimpleView] = useState(true);

  return (
    <div className="view-container">
      <div className="view-header">MAP</div>
      <div>
        <button onClick={() => setSimpleView(!simpleView)}>Switch View</button>
      </div>
      {!simpleView && <GeoMap size={2} />}
      {simpleView && <SimpleMap size={2} />}
    </div>
  );
};

export default MapView;
