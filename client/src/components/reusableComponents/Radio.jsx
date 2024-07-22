import React from "react";

const Radio = ({ name, value, handleChange, group }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <input
        type="radio"
        name={group}
        id={name}
        value={name}
        checked={value === name}
        onChange={handleChange}
        className="w-[25px] text-[var(--primary-color)]"
      />
      <label htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default Radio;
