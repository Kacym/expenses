import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export const Users = (props) => {
  const [studentName, SetStudentName] = useState([]);
  useEffect(() => {
    const getUsersName = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      SetStudentName(data);
    };
    getUsersName();
  }, []);

  return (
    <Cont>
      {studentName.map((user) => {
        return (
          <List key={user.id}>
            <h2>User:{user.name}</h2>
            <h3>Email:{user.email}</h3>
            <h3>Website:{user.website}</h3>
          </List>
        );
      })}
    </Cont>
  );
};

const List = styled.li`
  list-style: none;
  border: 2px solid;
  width: 300px;
  height: 120px;
  border-radius: 10px;
  margin-top: 20px;
`;
const Cont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
