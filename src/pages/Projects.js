import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import Project from "../components/Project";
import TextSlide from "../components/TextSlide";

const Projects = () => {
  const projectsList = [
    {
      id: "1",
      title: "E-Store",
      teckStack: "ReactJS, NodeJS, MongoDB, Tailwind CSS",
      description:
        "An e-commerce platform built using ReactJS for the frontend, NodeJS for the backend, and MongoDB for the database. The UI is designed using Tailwind CSS for styling.",
      imgUrl: "/static/images/ecommerce.jpeg",
      websiteLink: "website link",
    },
    {
      id: "2",
      title: "Task Management App",
      teckStack: "ReactJS, NodeJS, MongoDB, Redux, Tailwind CSS",
      description:
        "A task management application developed using ReactJS for the frontend, NodeJS for the backend, MongoDB for the database, and Redux for state management. The UI is styled with Tailwind CSS.",
      imgUrl: "/static/images/ecommerce.jpeg",
      websiteLink: "website link",
    },
    {
      id: "3",
      title: "Note Taking App",
      teckStack: "ReactJS, NodeJS, MongoDB, Redux, Tailwind CSS",
      description:
        "A note-taking application built with ReactJS for the frontend, NodeJS for the backend, MongoDB for the database, and Redux for state management. The UI is styled using Tailwind CSS.",
      imgUrl: "/static/images/ecommerce.jpeg",
      websiteLink: "website link",
    },
    {
      id: "4",
      title: "Social Media Dashboard",
      teckStack: "ReactJS, NodeJS, MongoDB, Redux, Tailwind CSS",
      description:
        "A social media dashboard created using ReactJS for the frontend, NodeJS for the backend, MongoDB for the database, and Redux for state management. The UI is styled with Tailwind CSS.",
      imgUrl: "/static/images/ecommerce.jpeg",
      websiteLink: "website link",
    },
    {
      id: "5",
      title: "Weather App",
      teckStack: "ReactJS, NodeJS, MongoDB, Tailwind CSS",
      description:
        "A weather application developed using ReactJS for the frontend, NodeJS for the backend, and MongoDB for storing data. The UI is designed using Tailwind CSS for styling.",
      imgUrl: "/static/images/ecommerce.jpeg",
      websiteLink: "website link",
    },
  ];

  return (
    <Box
      className="px-[16px] sm:px-[50px] bg-pfBg pt-[15px] min-h-screen"
      id="projects-section"
    >
      <Toolbar />
      <TextSlide>
        <Typography className="w-fit textGradient tracking-wide text-[26px] md:text-[30px] ibmSansBold pr-3 rounded-lg">
          PROJECTS
        </Typography>
      </TextSlide>
      <Grid
        container
        className=" text-white min-h-[70vh] 
        "
        // gap-[20px] sm:gap-[30px] md:gap-[40px]
      >
        {projectsList.map((project) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              key={project.id}
              //   sx={{ outline: "1px solid red" }}
              className="flex justify-center p-5"
            >
              <Project {...project} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
