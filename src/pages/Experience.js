import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Box, Toolbar } from "@mui/material";
import { PiTagChevronFill } from "react-icons/pi";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Associate",
      company: "Cognizant",
      duration: "Jan 2022 - Present",
      technology: "UI Developer ReactJS",
      domain: "Banking/Finance",
    },
    {
      id: 2,
      title: "Programmer Analyst",
      company: "Cognizant",
      duration: "Oct 2021 - Dec 2022",
      technology: "UI Developer ReactJS",
      domain: "Banking/Finance",
    },
    {
      id: 3,
      title: "Programmer Analyst Trainee",
      company: "Cognizant",
      duration: "Dec 2020 - Sep 2021",
      technology: "MERN Stack developer",
      domain: "Ecommerce",
    },
  ];

  return (
    <Box
      className="px-[16px] sm:px-[50px] pt-[15px] min-h-screen bg-pfBg"
      id="experience-section"
    >
      <Toolbar />
      <Typography className="mb-4 w-fit textGradient tracking-wide text-[26px] md:text-[30px] ibmSansBold pr-3 rounded-lg">
        EXPERIENCE
      </Typography>
      <Box className=" text-white min-h-[70vh] flex justify-center">
        <Timeline position="right">
          {experiences.map((exp) => (
            <TimelineItem key={exp.id} className="before:content-none">
              <TimelineSeparator>
                <TimelineDot color="primary" className="bg-pfPrimary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className="mb-2 text-pfPrimary ibmSansBold  text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px]">
                  {exp.duration}
                </Typography>
                <Typography className="mb-1 flex items-center text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px]">
                  <PiTagChevronFill
                    size={"18px"}
                    className="mr-2 pt-[3px] text-pfPrimary"
                  />
                  {exp.company}
                </Typography>
                <Typography className="mb-1 text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px]">
                  Title : {exp.title}
                </Typography>
                <Typography className="mb-1 text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px]">
                  Role : {exp.technology}
                </Typography>
                <Typography className=" text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px]">
                  Domain: {exp.domain}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
};
export default Experience;
