import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { TbDownload } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { highlight } from "../components/utils";
import TextSlide from "../components/TextSlide";
import { motion } from "framer-motion";

const Home = () => {
  const splitWord = (word) =>
    word.split("").map((char, i) => (
      <motion.div
        key={i}
        className="text-pfBg ibmSansBold text-[30px] md:text-[35px] xl:text-[55px] tracking-wider mr-[1px]
      "
        style={{
          cursor: "pointer",
          width: "fit-content",
          textShadow:
            "1px 0 #af2676, -1px 0 #af2676, 0 1px #af2676, 0 -1px #af2676, 1px 1px #af2676, -1px -1px #af2676, 1px -1px #af2676, -1px 1px #af2676",
        }}
        whileHover={{
          color: "#af2676",
          textShadow: "none",
          scaleY: 1.2,
          y: -5,
          display: "inline-block",
          origin: 0,
        }}
      >
        {char}
      </motion.div>
    ));

  const handleDownloadResume = async () => {
    try {
      const pdfPath = "/files/Sai_Harshith_Resume.pdf";
      const response = await fetch(pdfPath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Sai_Harshith_Resume.pdf";
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      className="px-[16px] sm:px-[50px] bg-pfBg pt-[15px] min-h-screen"
      id="home-section"
    >
      <Toolbar />
      <Grid container className=" text-white min-h-[70vh]">
        <Grid
          item
          xs={12}
          sm={6}
          lg={5}
          className="flex flex-col justify-center items-start"
        >
          {/* <Box className="flex flex-col justify-center items-start"> */}
          <Typography className="flex items-center gap-[10px]">
            {highlight()}
            <span className="text-[35px] md:text-[40px] xl:text-[50px] allisonRegular font-bold">
              Hello !!
            </span>
          </Typography>
          <TextSlide>
            <Typography className="text-[25px] md:text-[30px] xl:text-[50px] ibmSansBold flex items-center gap-[10px]">
              MY NAME IS
            </Typography>
          </TextSlide>
          {/* <TextSlide>
            <Typography
              className="text-pfBg ibmSansBold text-[30px] md:text-[35px] xl:text-[55px] tracking-wider
            "
              sx={{
                textShadow:
                  "1px 0 #af2676, -1px 0 #af2676, 0 1px #af2676, 0 -1px #af2676, 1px 1px #af2676, -1px -1px #af2676, 1px -1px #af2676, -1px 1px #af2676",
              }}
            >
              SAI HARSHITH...
            </Typography>
          </TextSlide> */}
          <TextSlide>
            <Box className="flex">
              {splitWord("SAI")}&nbsp;&nbsp; {splitWord("HARSHITH...")}
            </Box>
          </TextSlide>
          <TextSlide>
            <Typography className="text-[18px] md:text-[25px] xl:text-[35px] ibmSansSemiBold">
              Fullstack Developer <span className="ibmSansLight">based in</span>{" "}
              INDIA
            </Typography>
          </TextSlide>
          <Button
            className="text-white normal-case mt-4 px-3 xl:px-6 rounded-none text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px]"
            sx={{
              background:
                "linear-gradient(90deg, #af2676 0%, #441b45 100%), #ffffff",
            }}
            endIcon={<TbDownload />}
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
          <Box className="mt-4 flex justify-center items-center gap-1 text-gray-300">
            <MdOutlineEmail size="18px" />
            <Typography className="text-[14px] xl:text-[20px] pb-[1px]">
              saiharshithjyothula@gmail.com
            </Typography>
          </Box>
          {/* </Box> */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={7}
          className="flex justify-center items-center"
        >
          <Box className="flex">
            <img
              src="/static/images/about-banner.png"
              alt="home banner"
              className="w-full h-full max-w-[400px] max-h-[400px] md:max-w-[700px] md:max-h-[700px]"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
