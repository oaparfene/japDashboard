import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TaskIcon from '@mui/icons-material/Task';
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const drawerWidth = 240;

const Layout = () => {
  const [isFABMenuVisible, setIsFABMenuVisibile] = useState(false);

  const handleFABClick = (event) => {
    if (isFABMenuVisible) setIsFABMenuVisibile(false);
    else setIsFABMenuVisibile(true);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              PED Planner
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["Overview", "PED Cells", "PED Tasks"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TaskIcon />
                    </ListItemIcon>
                    <Link to={`/${text.replace(" ", "_")}`}>{text}</Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet></Outlet>
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: "fixed", bottom: "80px", right: "30px" }}
            onClick={() => handleFABClick()}
          >
            <AddIcon />
          </Fab>
          {isFABMenuVisible && <Box
            sx={{
              width: "160",
              maxWidth: 160,
              bgcolor: "#0063cc",
              color: 'white',
              borderRadius: "8px",
              position: "fixed",
              bottom: "130px",
              right: "80px",
            }}
          >
            <nav>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="New Task" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="New Cell" />
                  </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="New Plan" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
