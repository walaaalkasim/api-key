import React from "react";
import Search from "./Search";

const Header = ({ input, handleChange, handleSubmit, inputRef }) => {
  console.log(input);
  return (
    <header>
      <h1 className="titleName">GUARDIAN POSTS</h1>
      <Search
        inputRef={inputRef}
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </header>
  );
};

export default Header;
