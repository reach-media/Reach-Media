import React from "react";
import clsx from "clsx";
import "./navbar.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  List,
  Divider,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),

    marginRight: drawerWidth
  },
  menu: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(0,0,0,.6)",
    textAlign: "left"
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(0,0,0,.6)"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "space-between"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />{" "}
          </Link>

          <Toolbar className="desktop">
            <DropdownToggle nav className={classes.title} color="danger">
              HOME
            </DropdownToggle>
            <DropdownToggle nav className={classes.title} color="danger">
              WHO WE ARE
            </DropdownToggle>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                className={classes.title}
                color="danger"
              >
                WHAT WE DO
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>WEB DEVELOPMENT</DropdownItem>
                <DropdownItem>MARKETING</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
           <DropdownToggle nav className={classes.title} color="danger">
            <Link to='/ourwork'>   OUR WORK</Link>
          </DropdownToggle>
            <DropdownToggle nav className={classes.title} color="danger">
              <Link to='/blog'> BLOG </Link>
            </DropdownToggle>
            <DropdownToggle nav className={classes.title} color="danger">
              CONTACT US
            </DropdownToggle>
          </Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={`${clsx(open && classes.hide)} menu`}
          >
            <MenuIcon color="secondary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <DropdownToggle nav className={classes.menu} color="danger">
            HOME
          </DropdownToggle>
          <Divider />
          <DropdownToggle nav className={classes.menu} color="danger">
            WHO WE ARE
          </DropdownToggle>
          <Divider />
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className={classes.menu} color="danger">
              WHAT WE DO
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>WEB DEVELOPMENT</DropdownItem>
              <DropdownItem>MARKETING</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Divider />
          <DropdownToggle nav className={classes.menu} color="danger">
            OUR WORK
          </DropdownToggle>
          <Divider />
          <DropdownToggle nav className={classes.menu} color="danger">
            BLOG
          </DropdownToggle>
          <Divider />
          <DropdownToggle nav className={classes.menu} color="danger">
            CONTACT US
          </DropdownToggle>
        </List>
      </Drawer>
    </div>
  );
}
