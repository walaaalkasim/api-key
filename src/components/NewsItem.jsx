import React from "react";

/* <li>{res.results.map((el) => el.sectionName)}</li> */
// {res.results.map((el) => (<li>{el.webTitle} </li>))}

const NewsItem = ({ item }) => {
  const { webTitle, webPublicationDate, webUrl } = item;

  return (
    <>
      <div className="title">
        {webTitle}

        <div className="localDate">
          {new Date(webPublicationDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
          <a href={webUrl} target="_blank" rel="noreferrer">
            read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
