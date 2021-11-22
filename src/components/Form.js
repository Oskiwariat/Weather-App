import React from "react";

const Form = (props) => {
  const { value, onchange, onsubmit } = props;

  return (
    <>
      <form onSubmit={onsubmit} className="search">
        <input
          className="search__input"
          type="text"
          value={value}
          placeholder="Search..."
          onChange={onchange}
        />
        <button className="search__btn">X</button>
      </form>
    </>
  );
};

export default Form;
