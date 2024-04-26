import React from "react";
import { Box, Typography } from "@mui/material";
import Socials from "./Socials";

const Footer = () => {
  return (
    <Box className="text-white text-[12px] sm:text-[14px] px-[16px] sm:px-[50px] py-3 border-t-[1px] border-solid border-gray-600 border-b-0 border-l-0 border-r-0 flex justify-between items-center">
      <Typography>Developed by Sai Harshith J</Typography>
      <Socials />
    </Box>
  );
};

export default Footer;
