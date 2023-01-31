import { Button } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";
import { validateInput } from "../lib/validation";

export default function Home() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const booleanValue = validateInput('123');

    console.log('booleanValue: ', booleanValue);

    const response = await fetch(`http://localhost:3000/submit`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      }),
    });

    const data = await response.json();
    console.log("data: ", data);

    navigate("/finish")
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Form practice!</h1>
      </div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Input label="First name" value={firstName} setValue={setFirstName} />
          <Input label="Last name" value={lastName} setValue={setLastName} />
          <Input label="Phone" value={phone} setValue={setPhone} />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
