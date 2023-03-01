import React, { useEffect } from "react";

import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const GetUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Get Users</h1>
    </div>
  );
};

export default GetUsers;
