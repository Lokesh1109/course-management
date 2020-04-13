import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <h1>You entered wrong URL</h1>
      <Link to="/">redirect to home page</Link>
    </>
  );
};

export default NotFoundPage;
