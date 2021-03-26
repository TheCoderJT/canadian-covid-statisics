/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import searchProvs from "../styles/searchProvs.js";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";
import ProvinceCard from "./ProvinceCard.jsx";

const SearchProvs = () => {
  const [data, setData] = useState([]);
  const [prov, setProv] = useState("");
  const [onChange, setOnChange] = useState(false);
  const [activeCases, setActiveCases] = useState("");
  const [totalCases, setTotalCases] = useState("");
  const [totalDeaths, setTotalDeaths] = useState("");
  const [totalRecovered, setTotalRecovered] = useState("");
  const [date, setDate] = useState("");
  const classes = searchProvs();

  useEffect(() => {
    axios
      .get("https://api.opencovid.ca/summary")
      .then((res) => {
        setData(res.data.summary);
      })
      .catch((err) => console.error(err.message));
  }, [activeCases, totalCases, totalDeaths, totalRecovered, date]);

  const handleChange = (e) => {
    setOnChange(true);
    for (let i = 0; i < data.length; i++) {
      if (data[i].province === e.target.textContent) {
        setProv(data[i].province);
        setActiveCases(parseInt(data[i].active_cases).toLocaleString());
        setTotalCases(parseInt(data[i].cumulative_cases).toLocaleString());
        setTotalDeaths(parseInt(data[i].cumulative_deaths).toLocaleString());
        setTotalRecovered(parseInt(data[i].cumulative_recovered).toLocaleString());
        setDate(data[i].date);
      }
    }
  };

  return (
    <>
      <Autocomplete
        className={classes.autocomplete}
        autoSelect
        fullWidth
        onChange={handleChange}
        options={data}
        getOptionLabel={(option) => option.province}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search Provinces" variant="outlined" />
        )}
      />
      {onChange && (
        <ProvinceCard
          provName={prov}
          totalCases={totalCases}
          activeCases={activeCases}
          totalDeaths={totalDeaths}
          totalRecovered={totalRecovered}
          date={date}
        />
      )}
    </>
  );
};

export default SearchProvs;
