import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import AboutBanner from "../images/about-banner-flip.png";
import { highlight } from "../components/utils";
import { PiTagChevronFill } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa6";

const About = () => {
  return (
    <Box
      className="px-[16px] sm:px-[50px] bg-pfDark pt-[15px] min-h-screen"
      id="about-section"
    >
      <Toolbar />
      <Typography className="flex items-center gap-[10px] text-white">
        {highlight()}
        <span className="text-[35px] md:text-[40px] xl:text-[50px] allisonRegular font-bold">
          Nice to meet you !!
        </span>
      </Typography>
      <Box className="text-white text-[22px] md:text-[28px] ibmSansSemiBold tracking-wider">
        LET ME <span className="ibmSansBold textGradient">INTRODUCE</span>{" "}
        MYSELF
      </Box>
      <Grid container className=" text-white min-h-[70vh]">
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          className="flex justify-center items-start sm:pt-[10%] lg:pt-0"
        >
          <Box className="flex pt-2 pr-2">
            <img
              src={AboutBanner}
              alt="home banner"
              className="w-full h-full max-w-[400px] max-h-[400px]"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={8} className="sm:pl-3">
          <Typography className="pb-2 sm:py-3 text-[16px] md:text-[18px] lg:text-[20px]">
            My name is{" "}
            <span className="text-pfPrimary ibmSansSemiBold">
              Saty Siva Sai Harshith Jyothula
            </span>
            , and I'm a passionate web developer with a knack for crafting
            innovative and user-friendly web experiences.
          </Typography>
          <Box className="pb-2 sm:py-3 text-[16px] md:text-[18px] lg:text-[20px] flex gap-3 sm:gap-2 md:gap-4 lg:gap-10">
            <Box>
              <div className="text-pfPrimary ibmSansBold">{"< skills >"}</div>
              <ul className="pl-[25px] education-list">
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>Javascript</li>
                <li>HTML5, CSS3</li>
              </ul>
              <div className="text-pfPrimary ibmSansBold">{"</ skills >"}</div>
            </Box>
            <Box>
              <div className="text-pfPrimary ibmSansBold">
                {"< education >"}
              </div>
              <ul className="pl-[25px] education-list">
                <li>Graduation: B.Tech</li>
                <li>Institute: G.R.I.E.T</li>
                <li>Specialization: ECE</li>
                <li>CGPA: 9.04</li>
                <li>Location: Hyderabad</li>
                <li>Batch: 2016-2020</li>
              </ul>
              <div className="text-pfPrimary ibmSansBold">
                {"</ edcation >"}
              </div>
            </Box>
            <Box className="hidden xl:block">
              <div className="text-pfPrimary ibmSansBold">
                {"< certification >"}
              </div>
              <ul className="pl-[25px]">
                <li className="py-[5px]">AWS Cloud practitioner</li>
              </ul>
              <div className="text-pfPrimary ibmSansBold">
                {"</ certification >"}
              </div>
            </Box>
          </Box>
          <Box className="text-[16px] md:text-[18px] lg:text-[20px] xl:hidden mt-3">
            <div className="text-pfPrimary ibmSansBold">
              {"< certification >"}
            </div>
            <ul className="pl-[25px]">
              <li className="py-[5px]">AWS Cloud practitioner</li>
            </ul>
            <div className="text-pfPrimary ibmSansBold">
              {"</ certification >"}
            </div>
          </Box>
          <Box className="mt-3">
            <PiTagChevronFill
              size={"18px"}
              className="mr-2 pt-[3px] text-pfPrimary"
            />
            Passionate about building innovative web products with React,
            Next.js, and Node.js. Always learning, and next on the horizon: Java
            with Spring.
          </Box>
          <Box className="mt-3">
            <PiTagChevronFill
              size={"18px"}
              className="mr-2 pt-[3px] text-pfPrimary"
            />
            If you're looking for a skilled and enthusiastic developer who
            thrives on challenges, feel free to reach out and let's discuss how
            we can collaborate on your next project!
          </Box>
          <Button
            className="text-white normal-case mt-4 px-3 xl:px-6 rounded-none text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
            sx={{
              background:
                "linear-gradient(90deg, #af2676 0%, #441b45 100%), #ffffff",
            }}
            endIcon={<FaLocationArrow />}
          >
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
