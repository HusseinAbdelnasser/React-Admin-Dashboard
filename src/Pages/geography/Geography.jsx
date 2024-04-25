import React from "react";
import { Box } from "@mui/material";
import { data } from "./data";
import Geo from "./geo";
import Header from "../../components/Header";

const Geography = () => {
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Geo />
    </Box>
  );
};

export default Geography;