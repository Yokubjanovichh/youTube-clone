import React from "react";

import { Paper, TextField } from "@mui/material";

export default function SearchBar({ onFormSubmit, searchTerm, setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);
    event.preventDefault();
  };
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." onChange={handleChange} />
      </form>
    </Paper>
  );
}
