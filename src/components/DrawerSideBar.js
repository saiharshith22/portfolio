import React from "react";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrawerSideBar = ({
  navItems,
  handleDrawerToggle,
  handleActiveLink,
  activeLink,
}) => {
  return (
    <Box className="bg-pfDark h-full">
      <IconButton
        color="inherit"
        aria-label="close drawer"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
        className="w-full rounded-none flex justify-end p-3"
      >
        <CloseIcon sx={{ color: "white" }} />
      </IconButton>
      <List className="text-white flex flex-col items-center gap-[10px]">
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            className={`${item.toLowerCase() === activeLink} w-[80%]`}
            style={{
              background:
                item.toLowerCase() === activeLink
                  ? "linear-gradient(90deg, #af2676 0%, #441b45 100%), #ffffff"
                  : "transparent",
              borderRadius: "6px",
            }}
          >
            <ListItemButton
              sx={{ textAlign: "center" }}
              className={``}
              disableRipple
            >
              <Button
                onClick={() => {
                  handleActiveLink(item.toLowerCase());
                  handleDrawerToggle();
                }}
                // to={"/" + item.toLowerCase()}
                className={`text-[18px] w-full text-white p-0 min-w-fit h-fit`}
              >
                {item}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerSideBar;
