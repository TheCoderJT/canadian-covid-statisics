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
      .get(
        "https://api.opencovid.ca/summary?geo=pt&fill=true&version=true&pt_names=canonical&hr_names=hruid&fmt=json"
      )
      .then((res) => {
        setData(res.data.data);
        console.log("DATA: ", res.data.data);
      })
      .catch((err) => console.error(err.message));
  }, [activeCases, totalCases, totalDeaths, totalRecovered, date]);

  const handleChange = (e) => {
    setOnChange(true);
    for (let i = 0; i < data.length; i++) {
      if (data[i].region === e.target.textContent) {
        setProv(data[i].region);
        setActiveCases(parseInt(data[i].cases_daily).toLocaleString());
        setTotalCases(data[i].cases);
        setTotalDeaths(parseInt(data[i].deaths).toLocaleString());
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
        getOptionLabel={(option) => option.region}
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
          date={date}
        />
      )}
    </>
  );
};

export default SearchProvs;