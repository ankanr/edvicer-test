import React from "react";

const ShowMore = ({ choice, onLoadMore }) => {
  if (choice !== "Select a course")
    return (
      <div className='blue ui buttons'>
        <button className='ui button' onClick={onLoadMore}>
          Show More
        </button>
      </div>
    );
  else return null;
};

export default ShowMore;
