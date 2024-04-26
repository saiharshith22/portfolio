import React from "react";
import { Box } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Socials = () => {
  const linkedInLink =
    "https://www.linkedin.com/in/satya-siva-sai-harshith-jyothula-8b9142177";
  const githubLink = "https://github.com/saiharshith22";

  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Box className="flex gap-4">
      <FaLinkedin
        className="text-[16px] min-h-[16px] min-w-[16px] sm:text-[20px] cursor-pointer"
        onClick={() => openLink(linkedInLink)}
      />
      <ImGithub
        className="text-[16px] min-h-[16px] min-w-[16px] sm:text-[20px] cursor-pointer"
        onClick={() => openLink(githubLink)}
      />
    </Box>
  );
};

export default Socials;
