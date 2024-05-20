import React from "react";

function Error({ statusCode }) {
  return <p>Hata {statusCode}</p>;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
