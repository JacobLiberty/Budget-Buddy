import { QUERY_USERS } from "../../utils/queries";
import { api } from "../../utils/api";
import React, { useState, setState } from "react";

function Test() {
  const [UsersState, setUsersState] = useState([]);
  const GET = async (event) => {
    try {
      const result = await api.query(QUERY_USERS);
      console.log(result);

      if (result.error) return <>Error: {result.error.toString()}</>;
      if (result) {
        console.log("testing");
        //console.log(Object.values(result));
        const UserData = Object.values(result.users.edges).map(
          (value, index) => ({
            name: value.node.name,
            id: value.node.id,
          })
        );
        setUsersState(UserData);
        console.log(UsersState);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <button onClick={() => GET()}>Click Me!</button>
      {UsersState.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </>
  );
}

export default Test;
