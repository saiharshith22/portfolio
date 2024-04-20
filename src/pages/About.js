import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      className="px-[16px] sm:px-[50px] bg-pfDark pt-[15px] min-h-screen"
      id="about-section"
    >
      <Toolbar />
      {/* <Box className="textGradient w-fit ibmSansBold text-[48px]">
        Nice to meet you...
      </Box> */}
      <Grid container className=" text-white min-h-[85vh]">
        <Grid item xs={12} sm={6}>
          <Typography className="flex items-center gap-[10px]">
            <span
              className="bg-gradient-to-r from-pfPrimary to-transparent via-pfPrimary h-1 w-16 block
"
            ></span>
            <span className="text-[35px] md:text-[40px] xl:text-[50px] allisonRegular font-bold">
              Nice to meet you !!
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Box>
  );
};

export default About;
