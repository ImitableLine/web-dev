import React, { useState, useEffect } from "react";

const Effect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [api, setapi] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
      .then((response) => response.json())
      .then((json) => setapi(json));
  }, [resourceType]); // empty array if only want on mount, pass a variable to only update on variable change

  return (
    <>
      <div className="container1">
        <p>This is the Effect Page</p>
      </div>
      <div className="container1 button">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <div className="container">
        <h1>{resourceType}</h1>
        <p>{JSON.stringify(api)}</p>
      </div>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export default Effect;
