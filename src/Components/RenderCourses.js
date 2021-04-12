import React from "react";

const RenderCourses = ({ options, choice }) => {
  return (
    <div className='ui blue labels'>
      {options.map((option) => {
        if (option.sub.includes(choice))
          return option.sub.map((subject, index) => {
            return (
              <div className='ui label' key={index}>
                {subject}
              </div>
            );
          });
        return null;
      })}
    </div>
  );
};

export default RenderCourses;
