import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import ContactBanner from "../images/contact-banner.png";
import { highlight } from "../components/utils";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Box
      className="px-[16px] sm:px-[50px] bg-pfDark pt-[15px] min-h-screen"
      id="contact-section"
    >
      <Toolbar />
      <Typography className="flex items-center gap-[10px] text-white">
        {highlight()}
        <span className="text-[35px] md:text-[40px] xl:text-[50px] allisonRegular font-bold">
          Lets Connect !!
        </span>
      </Typography>
      <Grid container className=" text-white min-h-[70vh] gap-4">
        <Grid item>
          <Box className="flex items-center">
            <img
              src={ContactBanner}
              alt="contact banner"
              className="w-full h-full max-w-[400px] max-h-[400px]"
            />
          </Box>
        </Grid>
        <Grid
          xs={12}
          item
          className="h-full mb-5"
          sx={{ border: "1px solid red" }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
