import React from "react";

const RenderSubjects = ({ options, choice }) => {
  return (
    <div className='ui horizontal list'>
      {options.map((option) => {
        return (
          <div className='item' key={option.id}>
            <div
              className={`middle aligned ${
                option.sub.includes(choice) ? "bold" : ""
              } content`}
            >
              {option.course}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderSubjects;
