import React from "react";

function Error({ message }) {
  return (
    <figure className="error-wrapper">
      <img src="https://httpcats.com/404.jpg" />
      <figcaption>Oops...something went wrong. {message}</figcaption>
    </figure>
  );
}

export default Error;
