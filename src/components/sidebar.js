import React from "react";

import {
  Avatar,
  Button,
  Box,
  Grommet,
  Nav,
  Sidebar,
  Stack,
  Tip
} from "grommet";

import {
  Analytics,
  Calculator,
  User,
  Notification,
  Stakeholder,
  Home,
  Vulnerability,
  Resources,
  Services,
  Organization,
  Cluster,
  Cubes,
  System,
  Scan,
  Info,
  Group
} from "grommet-icons";
import App from "../App";

const src = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";
const appTabs = [
  "Home",
  "Vulnerability",
  "Resources",
  "Services",
  "Organization",
  "Cluster",
  "Cubes",
  "System",
  "Scan",
  "Info",
  "Group"
];
const customTheme = {
  global: {
    font: {
      family: `-apple-system, BlinkMacSystemFont`
    },
    colors: {
      text: "black"
    }
  },
  tip: {
    drop: {
      align: { left: "right" }
    },
    content: {
      animation: "slideRight",
      margin: "small",
      pad: "small",
      background: { color: "accent-1", opacity: 0.9 },
      round: { size: "medium", corner: "right" },
      flex: false // so Tip won't get cut on a window resize
    }
  }
};

const NotificationAlert = () => (
  <Box alignSelf="center">
    {/* One option to apply tip on button  */}
    <Button
      tip={{
        dropProps: { align: { left: "right" } },
        content: <Box animation="jiggle">New Analytics!</Box>
      }}
      icon={
        <Stack anchor="top-right">
          <Notification />
          <Box background="accent-1" pad="xsmall" round responsive={false} />
        </Stack>
      }
    />
  </Box>
);

const SidebarHeader = () => (
  <Box pad="small">
    <Avatar
      background="linear-gradient(#6FFFB0 0%, #7D4CDB 100%)"
      border={{ color: "white", size: "small" }}
      round="small"
      size="small"
    >
      <User size="small" />
    </Avatar>
  </Box>
);

const iconsMap = (color) => [
  <Home color={color} />,
  <Vulnerability color={color} />,
  <Resources color={color} />,
  <Services color={color} />,
  <Organization color={color} />,
  <Cluster color={color} />,
  <Cubes color={color} />,
  <System color={color} />,
  <Scan color={color} />,
  <Info color={color} />,
  <Group color={color} />
];
const SidebarButton = ({ iconName, index }) => {
  const hoverColor = { color: "accent-1", opacity: 0.9 };

  return (
    <Box fill="horizontal">
      {/* Second option to apply tip on button  */}
      <Tip
        content={<Box>{iconName}</Box>}
        dropProps={{ align: { left: "right" }, color: "#7630EA" }}
      >
        <Button hoverIndicator={hoverColor} plain>
          {({ hover }) => (
            <Box pad={{ vertical: "small" }} align="center">
              {iconsMap(hover ? "black" : "white")[index]}
            </Box>
          )}
        </Button>
      </Tip>
    </Box>
  );
};

const SidebarTip = () => (
  <Grommet theme={customTheme} full>
    <Box direction="row" height={{ min: "100%" }}>
      <Sidebar
        background="#7630EA"
        header={<SidebarHeader />}
        pad={{ vertical: "small" }}
      >
        <Nav>
          {[
            "Home",
            "Vulnerability",
            "Resources",
            "Services",
            "Organization",
            "Cluster",
            "Cubes",
            "System",
            "Scan",
            "Info",
            "Group"
          ].map((iconName, index) => (
            <SidebarButton key={iconName} iconName={iconName} index={index} />
          ))}
        </Nav>
      </Sidebar>
    </Box>
  </Grommet>
);

export default SidebarTip;
