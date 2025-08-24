import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Common/css/navbar.css";
import { MenuOutlined, MessageOutlined, PhoneOutlined } from "@mui/icons-material";
import Footer from "../Components/Footer";
import logo from "../Assets/Images/hdts.png";
import logoutIcon from "../Assets/Images/power.png";
import Dialogbox from "../Components/Dialogbox";
import { DashboardOutlined, InfoCircleOutlined } from "@ant-design/icons";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

interface Props {
  children: ReactElement;
}

export default function Navbar({ children }: Readonly<Props>) {
  const [open, setOpen] = React.useState(true);
  const [active, setActive] = React.useState(0);
  const [active2, setActive2] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [roleType, setRoleType] = React.useState(1);

  let user = localStorage.getItem("username")
  const des = localStorage.getItem("designation")

  React.useEffect(() => {

    let timeoutId: NodeJS.Timeout;
    if (open) {
      timeoutId = setTimeout(() => {
        const userElement = document.querySelector(".drawer-user");
        if (userElement) {
          (userElement as HTMLElement).style.opacity = "1";
        }
      }, 50);
    } else {
      const userElement = document.querySelector(".drawer-user");
      if (userElement) {
        (userElement as HTMLElement).style.opacity = "0";
      }
    }

    return () => clearTimeout(timeoutId);
  }, [open]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
    localStorage.setItem("token", "")
  };

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    if (path === "/dashboard"){
      setActive(1)
    } else if (path === "/contact") {
      setActive(2);
    } else if (path === "/about") {
      setActive(3)
    } else if (path === "/feedback") {
      setActive(4)
    } else {
      setActive(0);
    }
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleClickDashboard = () => {
    navigate("/dashboard");
  };

  const handleClickAbout = () => {
    navigate("/about");
  };

  const handleClickContact = () => {
    navigate("/contact");
  };

  const handleClickFeedback = () => {
    navigate("/feedback");
  };

  const drawerItems = [    
    {
      name: "Dashboard",
      icon: <DashboardOutlined style={{ fontSize: "20px" }} />,
      onClick: handleClickDashboard
    },
    {
      name: "Contact",
      icon: <PhoneOutlined style={{ fontSize: "20px" }} />, 
      onClick: handleClickContact
    },
    {
      name: "About",
      icon: <InfoCircleOutlined style={{ fontSize: "20px" }} />, 
      onClick: handleClickAbout
    },
    {
      name: "Feedback",
      icon: <MessageOutlined style={{ fontSize: "20px" }} />,
      onClick: handleClickFeedback
    }
  ];

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f6fa" }}
    >
      <Dialogbox
        open={isOpen}
        title="Confirm Logout"
        content="Are you sure you want to logout? Logging out will end your current session and any unsaved changes may be lost."
        agreeButtonText="Logout"
        disagreeButtonText="Cancel"
        onAgree={handleLogout}
        onDisagree={handleClose}
        onClose={handleClose}
      />
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="toolbar">
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 2,
              },
            ]}
          >
            <MenuOutlined />
          </IconButton>
          <span className="title">HDTS Reservation Module</span>
          <div className="toolbar-inner">
            
            <span className="username">Hi, {user}</span>
            <img
              onClick={handleOpen}
              className="logout-icon"
              src={logoutIcon}
              alt=""
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <div className="drawer-header">
          <img className="drawer-logo" src={logo} alt="" /> 
        </div>
        <List>
          <List>
            {drawerItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    onClick={item.onClick}
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                      backgroundColor:
                        index === active - 1 ? "rgba(230, 125, 34, 0.15)" : "transparent",
                      color: index === active - 1 ? "#0047aa" : "black",
                      borderRight:
                        index === active - 1 ? "2px solid #e67e22" : "none",
                      "&:hover": {
                        backgroundColor:
                          index === active - 1 ? "rgba(230, 125, 34, 0.15)" : "transparent",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: "center",
                        color: index === active - 1 ? "#e67e22" : "black",
                        mr: open ? 2 : "auto",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{ fontSize: "14px" }}
                      sx={{ opacity: open ? 1 : 0, color: index === active - 1 ? "#e67e22" : "black" }}
                    />
                  </ListItemButton>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </List>

        <Divider />
        <Divider />
        <div className="drawer-user1">
          <span
            className="drawer-user-icon1"
            style={{
              display: open ? "none" : "flex",
              alignItems: "center",
              padding: "16px",
            }}
          >
            {user?.substring(0, 1)}
          </span>
          <span className="drawer-username"></span>
        </div>

        <div
          className="drawer-user"
          style={{
            display: open ? "flex" : "none",
            alignItems: "center",
            padding: "16px",
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <span className="drawer-user-icon">{user?.substring(0, 1)}</span>
          <span className="drawer-username">{user}</span>
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          transition: (theme) =>
            theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
