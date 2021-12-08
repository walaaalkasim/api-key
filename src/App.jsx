import React from "react";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import NewsContainer from "./components/NewsContainer";
import Header from "./components/Header";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState(null);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://content.guardianapis.com/search?q=${search}&api-key=${API_KEY}`;
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data.response))
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [url]);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <main>
      <Header
        inputRef={inputRef}
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {!isLoading && <NewsContainer info={info} />}
    </main>
  );
};

export default App;
