import React from "react";
import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";
import Xstyled from "@emotion/styled";

const styled = Xstyled.default;

function KRIndicatorUnstyled(props) {
  const [state, dispatch] = useStateValue();

  // TODO: write me

  return (
    <div className={props.className}>
      {" "}
      <div className="kri"> KRI thumbnail </div>{" "}
    </div>
  );
}

// these are sample values, feel free to change them
export default KRIndicator = styled(KRIndicatorUnstyled)`
  position: relative;
  width: 172px;
  height: 114px;
  background: #16212a;
  color: #7a97ae;
  margin: 3px;

  > .kri {
    font-family: sans-serif;
    font-weight: 100;
    color: #7a97ae;
    padding: 5px;
  }
`;
