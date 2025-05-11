import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({});

  const updateSelectionStyle = (colorObj) => {
    setStyle({ background: colorObj.background });
  };

  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      Selection
    </div>
  );
};

export default Selection;
