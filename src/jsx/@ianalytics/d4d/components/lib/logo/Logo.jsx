import React from "react";

const Logo = (props) => {
  return (
    <div style={{ width: props.width, height: props.height }}>
      {props.theme === "dark" ? (
        <img
          src={"/lib/logo.svg"}
          alt="Industrial Analytics Logo"
          style={{ width: props.width, height: props.height }}
        />
      ) : (
        <img src={"/lib/l.svg"} alt="Industrial Analytics Logo" />
      )}
    </div>
  );
};

export default Logo;
