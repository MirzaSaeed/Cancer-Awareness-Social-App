import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Search"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "#fff", paddingRight: "5px" }} />
          </InputAdornment>
        ),
        style: { color: "#909BAD" },
        sx: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#909BAD",
            color: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
      }}
    />
  );
};

export default SearchBar;
