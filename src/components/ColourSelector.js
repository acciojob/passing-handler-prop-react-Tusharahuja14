import React from 'react';
import '../styles/child.css';
const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, label, classname } = config;

  return (
    <button
      className={classname}
      onClick={() => selectNextBackground({ background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
