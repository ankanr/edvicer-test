import React, { useState, useEffect, useRef } from "react";

const DropDown = ({
  selected,
  onSelectedChange,
  choices,
  label,
  subjectList,
  setSubjectList,
  onLoadMore,
  limitTo,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  let k = 0;

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current === null || ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = choices.map((choice, index) => {
    if (choices[index] === selected) {
      return null;
    }

    return (
      <div
        key={k++}
        className='item'
        onClick={() => {
          if (!subjectList.includes(choice)) {
            const newSubList = [...subjectList, choice];
            setSubjectList(newSubList);
            while (index > limitTo) {
              onLoadMore();
            }
          }
          onSelectedChange(choice);
        }}
      >
        {choice}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui fluid search selection dropdown ${
            open ? "visible active" : ""
          }`}
        >
          <input
            type='text'
            name='course'
            value={selected}
            onChange={onSelectedChange}
          />
          <i className='dropdown icon'></i>
          <div className='text'>{selected}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
