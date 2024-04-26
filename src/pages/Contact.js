import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { highlight } from "../components/utils";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";

const Contact = () => {
  return (
    <Box
      className="px-[16px] sm:px-[50px] bg-pfDark pt-[15px] min-h-screen"
      id="contact-section"
    >
      <Toolbar />
      <Typography className="flex items-center gap-[10px] text-white">
        {highlight()}
        <span className="text-[35px] md:text-[40px] xl:text-[50px] allisonRegular font-bold mr-5">
          Lets Connect !!
        </span>
        <Socials />
      </Typography>
      <Grid container className=" text-white min-h-[70vh]">
        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          lg={6}
          className="pt-0 sm:pt-5 md:pt-0 md:flex md:justify-center md:items-center"
        >
          <Box className="flex items-center">
            <img
              src="/static/images/contact-banner.png"
              alt="contact banner"
              className="w-full h-full max-w-[400px] max-h-[400px]"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={6} className="h-full mb-5">
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
