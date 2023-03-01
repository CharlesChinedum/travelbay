import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNmber, setPhoneNumber] = useState("");

  const [register, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    register({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNmber: phoneNmber,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="phone"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default Form;
