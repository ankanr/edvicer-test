import React from "react";
import options from "../options/options";

const Done = ({ subjects, onChangeResult }) => {
  const results = [];
  return (
    <div className='blue ui buttons'>
      <button
        className='ui button'
        onClick={() => {
          options.map((option) => {
            return subjects.map((sub) => {
              if (option.sub.includes(sub)) {
                const newRes = results.push({
                  course: option.course,
                  sub: sub,
                });
                onChangeResult([...results, newRes]);
              }
              return null;
            });
          });
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Done;
