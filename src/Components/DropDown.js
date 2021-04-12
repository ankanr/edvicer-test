import React, { useState, useEffect, useRef } from "react";

const DropDown = ({ selected, onSelectedChange, choices, label }) => {
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

  // const renderedOptions = options.map((option) => {
  //   if (option.id === selected.id) {
  //     return null;
  //   }

  //   return (
  //     <div
  //       class='item'
  //       key={option.id}
  //       className='item'
  //       onClick={() => onSelectedChange(option)}
  //     >
  //       {option.sub}
  //     </div>
  //   );
  // });

  const renderedOptions = choices.map((choice, index) => {
    if (choices[index] === selected) {
      return null;
    }

    return (
      <div key={k++} className='item' onClick={() => onSelectedChange(choice)}>
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
          <input type='text' name='course' />
          <i className='dropdown icon'></i>
          {/* <div className='text'>{selected.sub}</div> */}
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
