import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";   // 👈 import Collapse
import {
  ExpandLess,
  ExpandMore,
  Logout,
  MessageOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { ReactElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Common/css/navbar.css";
import Footer from "../Components/Footer";
import logo from "../Assets/Images/hdts.png";
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
  const [isOpen, setIsOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<number | null>(null); // 👈 track expanded item

  const navigate = useNavigate();
  const location = useLocation();

  let user = localStorage.getItem("username");

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleLogout = () => {
    navigate("/");
    localStorage.setItem("token", "");
  };

  // Drawer items config
  const drawerItems = [
    {
      name: "Dashboard",
      icon: <DashboardOutlined style={{ fontSize: "18px" }} />,
      path: "/dashboard",
    },
    {
      name: "Contact",
      icon: <PhoneOutlined style={{ fontSize: "18px" }} />,
      path: "/contact",
    },
    {
      name: "About",
      icon: <InfoCircleOutlined style={{ fontSize: "18px" }} />,
      children: [
        { name: "Company", path: "/about/company" },
        { name: "Team", path: "/about/team" },
        { name: "Careers", path: "/about/careers" },
      ],
    },
    {
      name: "Feedback",
      icon: <MessageOutlined style={{ fontSize: "18px" }} />,
      path: "/feedback",
    },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f6fa" }}>
      <Dialogbox
        open={isOpen}
        title="Confirm Logout"
        content="Are you sure you want to logout?"
        agreeButtonText="Logout"
        disagreeButtonText="Cancel"
        onAgree={handleLogout}
        onDisagree={handleClose}
        onClose={handleClose}
      />
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#242424"
          },
        }}
      >
        <div>
          <div className="drawer-header">
            <img className="drawer-logo" src={logo} alt="" />
          </div>

          <List>
            {drawerItems.map((item, index) => {
              // Check if current path is active
              const isParentActive =
                item.path === location.pathname ||
                item.children?.some((c) => c.path === location.pathname);

              return (
                <React.Fragment key={index}>
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      onClick={() =>
                        item.children
                          ? setExpanded(expanded === index ? null : index)
                          : item.path && navigate(item.path)
                      }
                      sx={{
                        minHeight: 48,
                        px: 2.5,
                        backgroundColor: isParentActive
                          ? "rgba(110, 109, 109, 0.29)"
                          : "transparent",
                          borderRight: isParentActive ? "4px solid #7d7d7dff" : "none",
                        color: isParentActive ? "#7d7d7dff" : "white",
                        "&:hover": {
                          backgroundColor: isParentActive
                            ? "rgba(110, 109, 109, 0.29)"
                            : "rgba(57, 56, 56, 0.08)",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          justifyContent: "center",
                          mr: open ? 2 : "auto",
                          color: isParentActive ? "#7d7d7dff" : "white",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        primaryTypographyProps={{ fontSize: "13px" }}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: isParentActive ? "#7d7d7dff" : "white",
                        }}
                      />
                      {item.children &&
                        (expanded === index ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                  </ListItem>

                  {/* Child Items */}
                  {item.children && (
                    <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children.map((child, cIdx) => {
                          const isChildActive = child.path === location.pathname;
                          return (
                            <ListItem key={cIdx} disablePadding sx={{ pl: open ? 4 : 2 }}>
                              <ListItemButton
                                onClick={() => child.path && navigate(child.path)}
                                sx={{
                                  m: "2px 8px",
                                  borderRadius: "6px",
                                  color: isChildActive ? "#7d7d7dff" : "white",
                                  backgroundColor: isChildActive
                                    ? "rgba(110, 109, 109, 0.29)"
                                    : "transparent",
                                  "&:hover": {
                                    backgroundColor: isChildActive
                                      ? "rgba(110, 109, 109, 0.29)"
                                      : "rgba(57, 56, 56, 0.08)",
                                  },
                                }}
                              >
                                <ListItemText
                                  primary={child.name}
                                  primaryTypographyProps={{ fontSize: "12px" }}
                                  sx={{
                                    opacity: open ? 1 : 0,
                                    color: isChildActive ? "#7d7d7dff" : "white",
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              );
            })}
          </List>

        </div>

        {/* Logout button fixed bottom */}
        <List>
          <Divider sx={{ my: 1 }} />
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton onClick={handleOpen} sx={{ minHeight: 48, px: 2.5 }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: open ? 2 : "auto",
                }}
              >
                <Logout style={{ fontSize: "18px", color: "white" }} />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                primaryTypographyProps={{ fontSize: "13px", color: "white" }}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
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
    </Box>
  );
}
