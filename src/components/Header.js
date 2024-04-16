import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const drawerWidth = 240;
  const navItems = ["Home", "About", "Experience", "Projects", "Contact"];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  const drawer = (
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
      <List className="text-white flex flex-col items-center gap-[15px]">
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            className={`border-solid border-white border-b-${
              item.toLowerCase() === activeLink ? "2" : "0"
            } border-l-0 border-r-0 border-t-0 py-2 w-[80%]`}
          >
            <ListItemButton sx={{ textAlign: "center" }} className={``}>
              <Link
                onClick={() => handleActiveLink(item.toLowerCase())}
                to={"/" + item.toLowerCase()}
                className={`text-[20px] w-full no-underline text-white `}
                // style={{
                //   color: "white",
                //   textDecoration: "none",
                //   borderBottom: "2px solid red",
                // }}
              >
                {console.log(
                  "item.toLowerCase() === activeLink",
                  item.toLowerCase() === activeLink
                )}
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" className="bg-pfBg">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="tracking-widest text-2xl ibmSansBold flex justify-end sm:block"
          >
            SH
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
