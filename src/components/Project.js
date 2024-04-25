import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { isMobile, isTablet } from "react-device-detect";
import ProjectDialog from "./ProjectDialog";
import TextSlide from "./TextSlide";

export default function Project({
  id,
  title,
  teckStack,
  description,
  imgUrl,
  //   websiteLink,
}) {
  const [open, setOpen] = React.useState(false);

  const controls = useAnimation();
  const cardControls = useAnimation();

  const hoverStartAnimation = () => {
    controls.start({ height: "100%", opacity: 1 });
    cardControls.start({ opacity: 0.3 });
  };
  const hoverEndAnimation = () => {
    controls.start({ height: 0, opacity: 0 });
    cardControls.start({ opacity: 1 });
  };
  const handleProjectModal = () => {
    console.log("modal");
    setOpen(true);
  };
  const handleProjectWebsite = () => {
    window.open("https://www.google.com/", "_blank");
  };
  return (
    <motion.div
      className="relative h-full max-w-[400px] sm:max-w-full w-full rounded-lg cursor-pointer shadow-md shadow-[#ffffff45] flex flex-col justify-between"
      style={{
        background: "linear-gradient(90deg, #441b45 0%, #af2676 100%), #ffffff",
      }}
      onHoverStart={hoverStartAnimation}
      onHoverEnd={hoverEndAnimation}
    >
      <motion.div
        transition={{ duration: 0.5 }}
        animate={controls}
        initial={{ height: 0, opacity: 0 }}
        className="absolute h-full z-10 bg-pfBgTransparent flex items-center justify-evenly flex-col rounded-lg p-2"
      >
        <Typography variant="body2" className="text-white text-center">
          {description}
        </Typography>
      </motion.div>
      <motion.div
        animate={cardControls}
        initial={{ opacity: 1 }}
        className="p-3"
      >
        <img
          src={imgUrl}
          alt="green iguana"
          className="rounded-lg opacity-[0.8] max-h-[200px] sm:max-h-[250px] w-full"
        />
        <TextSlide>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </TextSlide>
        <TextSlide>
          <Typography>{teckStack}</Typography>
        </TextSlide>
      </motion.div>
      {isMobile || isTablet ? (
        <Button
          className="z-20 text-white normal-case hover:bg-none w-full my-2"
          onClick={handleProjectModal}
        >
          View Project
        </Button>
      ) : (
        <Button
          className="z-20 text-white normal-case hover:bg-none w-full my-2"
          onClick={handleProjectWebsite}
        >
          Visit Website
        </Button>
      )}
      <ProjectDialog
        open={open}
        setOpen={setOpen}
        details={{ id, title, teckStack, description, imgUrl }}
      />
    </motion.div>
  );
}
