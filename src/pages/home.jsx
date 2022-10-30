import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import User from "../components/user.jsx";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);

  return (
    <>
      {users.map((user) => {
        return (
            <Link to={`/users/${user.id}`}  key={user.id}>
          <User
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
          </Link>
        );
      })}
    </>
  );
}
export default Home;
