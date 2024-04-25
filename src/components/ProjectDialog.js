import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography } from "@mui/material";
import TextSlide from "./TextSlide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDialog({ open, setOpen, details }) {
  const { title, teckStack, description } = details;

  const handleClose = () => {
    setOpen(false);
  };
  const handleWebsite = () => {
    setOpen(false);
    window.open("https://www.google.com/", "_blank");
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: "bgGradient text-white rounded-lg" }}
        sx={{
          backdropFilter: "blur(5px)",
        }}
      >
        <TextSlide width="100%">
          <DialogTitle className="ibmSansBold uppercase text-center">
            {title}
          </DialogTitle>
        </TextSlide>
        <DialogContent>
          <TextSlide>
            <Typography className="ibmSansSemiBold mb-3">
              {teckStack}
            </Typography>
          </TextSlide>
          <TextSlide>
            <Typography className="text-gray-200">{description}</Typography>
          </TextSlide>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleWebsite}
            className="normal-case w-full bg-pfBgTransparent text-white rounded-md"
          >
            Visit Website
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
