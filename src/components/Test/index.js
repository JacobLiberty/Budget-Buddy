import { useFindMany } from "@gadgetinc/react";
import { api } from "../../utils/api";
import React from "react";

function Test() {
  const [result, refresh] = useFindMany(api.user, {
    select: {
      name: true,
    },
  });

  if (result.error) return <>Error: {result.error.toString()}</>;
  if (result.fetching && !result.data) return <>Fetching...</>;
  if (!result.data) return <>No users found</>;

  console.log(result);
  return (
    <>
      {result.data.map((user) => (
        <div key="user.name">{user.name}</div>
      ))}
    </>
  );
}

export default Test;
