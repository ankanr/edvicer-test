import React, { useState } from "react";

const Subjects = ({ subject, index, subjectList, setSubjectList }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`ui label tags ${
        subjectList.includes(subject) ? "alive" : ""
      }`}
      key={index}
      onClick={() => {
        if (subjectList.includes(subject)) {
          setActive(!active);
          const newSubList = subjectList.filter((sub) => sub !== subject);
          setSubjectList(newSubList);
        } else {
          setActive(!active);
          const newSubList = [...subjectList, subject];
          setSubjectList(newSubList);
        }
      }}
    >
      {subject}
    </div>
  );
};

export default Subjects;
