import React from "react";

const Search = ({ input, handleChange, handleSubmit, inputRef }) => {
  console.log(input);
  return (
    <div className="formContainer">
      <form className="form">
        <input
          ref={inputRef}
          type="text"
          maxLength="200"
          value={input}
          onChange={(e) => handleChange(e)}
        />

        <button className="btn" onClick={(e) => handleSubmit(e)}>
          search
        </button>
      </form>
    </div>
  );
};

export default Search;
