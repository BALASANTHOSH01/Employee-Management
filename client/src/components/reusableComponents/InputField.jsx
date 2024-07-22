// src/reusableComponents/Radio.js
import React from "react";

const Radio = ({ value, handleChange, name, type }) => {
  return (
    <div className=" flex flex-row items-center gap-2 my-[2%] md:my-[3%]">
      <label htmlFor={name} className="w-[25%] " >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      :
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={`Enter ${name}`}
        className="outline-none border border-1 px-[10px] py-[5px] w-[70%]"
      />
    </div>
  );
};

export default Radio;
