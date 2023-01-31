import { TextField } from "@mui/material";

export default function Input({ label, value, setValue }) {
  return (
    <TextField
      id={label}
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
