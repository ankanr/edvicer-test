import React from "react";
import Subjects from "./Subjects";
import ShowMore from "./ShowMore";

const RenderSubjects = ({
  options,
  selected,
  onSelectedChange,
  subjectList,
  setSubjectList,
  limitTo,
  onLoadMore,
}) => {
  return (
    <div className='ui white labels'>
      {options.map((option) => {
        if (option.sub.includes(selected))
          return option.sub.slice(0, limitTo).map((subject, index) => {
            return (
              <Subjects
                subject={subject}
                key={index}
                onSelectedChange={onSelectedChange}
                subjectList={subjectList}
                setSubjectList={setSubjectList}
              />
            );
          });
        return null;
      })}
      <div>
        <ShowMore choice={selected} onLoadMore={onLoadMore} />
      </div>
    </div>
  );
};

export default RenderSubjects;
