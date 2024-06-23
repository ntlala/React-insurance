// src/components/Navbar.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Services", path: "/services" },
    { text: "About Us", path: "/about" },
    { text: "Contact", path: "/contact" },
  ];

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerContent = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            button
            component={RouterLink}
            to={item.path}
            onClick={() => setDrawerOpen(false)}
            sx={{
              textDecoration:
                location.pathname === item.path ? "underline" : "none",
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none" }}
        >
          Insurance Company
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <div>
            {navItems.map((item) => (
              <Typography
                key={item.text}
                variant="body1"
                component={RouterLink}
                to={item.path}
                color="inherit"
                sx={{
                  marginLeft: "1rem",
                  textDecoration:
                    location.pathname === item.path ? "underline" : "none",
                }}
              >
                {item.text}
              </Typography>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
