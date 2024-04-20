import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext } from "react";
import DrawerSideBar from "./DrawerSideBar";
import { Context } from "../App";

const Header = () => {
  const context = useContext(Context);
  const { mobileOpen, setMobileOpen, activeLink, setActiveLink } = context;

  const drawerWidth = 240;
  const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
    const section = document.getElementById(`${link}-section`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      <AppBar component="nav" className="bg-pfDark" elevation={0}>
        <Toolbar className="sm:px-[50px]">
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
            SH.
          </Typography>

          <Box className="hidden sm:flex sm:justify-center sm:items-center">
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                className={`${
                  item.toLowerCase() === activeLink
                    ? "text-pfPrimary text-[16px] ibmSansBold"
                    : "text-white text-[16px] ibmSansSemiBold"
                }  normal-case h-fit min-h-fit min-w-fit px-3 py-0`}
                onClick={() => handleActiveLink(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* --- mobile drawer --- */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerSideBar
            navItems={navItems}
            handleDrawerToggle={handleDrawerToggle}
            handleActiveLink={handleActiveLink}
            activeLink={activeLink}
          />
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
