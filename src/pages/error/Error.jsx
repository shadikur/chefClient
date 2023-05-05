import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="bg-red-600 h-[80vh] w-[80vw] mx-auto my-auto mt-5 text-center text-white rounded-xl p-8"
    >
      <img
        src="https://res.cloudinary.com/ddez9nchs/image/upload/v1683301755/Thai-Chef/404-error-website-page-not-found-sign-webpage-co-2022-12-16-12-23-00-utc-min.jpg"
        className="h-[60vh] w-[60vw] mx-auto rounded-2xl"
      />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
