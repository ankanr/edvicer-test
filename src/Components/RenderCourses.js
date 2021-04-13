import React from "react";

const RenderCourses = ({ options, choices, selected, onSelectedChange }) => {
  return (
    <div className='ui horizontal list'>
      {options.map((option) => {
        return (
          <div className='item' key={option.id}>
            <div
              className={`subject middle aligned ${
                option.sub.includes(selected) ? "bold" : ""
              } content`}
              onClick={() => onSelectedChange(selected)}
            >
              {option.course}
              <span className='count'>
                <sup>{option.count !== 0 ? option.count : ""}</sup>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderCourses;
