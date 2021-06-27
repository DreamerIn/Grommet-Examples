import React from "react";
import {
  Box,
  Grommet,
  Button,
  Text,
  grommet,
  Heading,
  Paragraph,
  Markdown,
  Tip,
  Nav
} from "grommet";
import {
  User,
  Notification,
  Home,
  Vulnerability,
  Resources,
  Services,
  Organization,
  Cluster,
  Cubes,
  System,
  Scan,
  Print,
  Info,
  Group,
  Menu,
  Gremlin,
  ShieldSecurity
} from "grommet-icons";
import { deepMerge } from "grommet/utils";
import { theme } from "../theme";
const theme_hpe = {
  global: {
    colors: {
      "brand-1": "#00795d"
    },
    font: {
      family: "'Metric', Arial, sans-serif",
      face: `
        @font-face {
          font-family: "Metric";
          src: url("./MetricHPE-Web-Regular.woff") format('woff');
        }
        @font-face {
          font-family: "Metric";
          src: url("./MetricHPE-Web-Bold.woff") format('woff');
          font-weight: 700;
        }
        @font-face {
          font-family: "Metric";
          src: url("./MetricHPE-Web-Semibold.woff") format('woff');
          font-weight: 600;
        }
        @font-face {
          font-family: "Metric";
          src: url("./MetricHPE-Web-Light.woff") format('woff');
          font-weight: 100;
        }
      `
    }
  },
  select: {
    clear: {
      text: {
        weight: "bold",
        color: "dark-1"
      }
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

class GridTry extends React.Component {
  state = { isOpen: false };

  render() {
    const { isOpen } = this.state;
    const hoverColor = { color: "accent-1", opacity: 0.9 };
    return (
      <Grommet theme={theme_hpe} full>
        <Box direction="row" fill>
          <Box
            fill="vertical"
            width="sidebar"
            background="dark-2"
            elevation="medium"
            className={`sidebar${isOpen ? " sidebar--open" : ""}`}
          >
            <Button
              hoverIndicator={hoverColor}
              onClick={() => this.setState({ isOpen: !isOpen })}
              className="trigger"
            >
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Menu />
              </Box>
            </Button>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Home</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                    >
                      <Home />
                    </Box>
                    <Text size="xsmall">Home</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Vulnerability Tracker</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Vulnerability />
                    </Box>
                    <Text size="xsmall">Vulnerability Tracker</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Inventory</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Resources />
                    </Box>
                    <Text size="xsmall">Inventory</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>HPE Products</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Services />
                    </Box>
                    <Text size="xsmall">HPE Products</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Organization</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Organization />
                    </Box>
                    <Text size="xsmall">Organization</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Distribution List</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Cluster />
                    </Box>
                    <Text size="xsmall">Distribution List</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Modules</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Cubes />
                    </Box>
                    <Text size="xsmall">Modules</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Platforms</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <System />
                    </Box>
                    <Text size="xsmall">Platforms</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Scanner</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Print />
                    </Box>
                    <Text size="xsmall">Scanner</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>CVE Info</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Info />
                    </Box>
                    <Text size="xsmall">CVE Info</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>War Room</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <ShieldSecurity />
                    </Box>
                    <Text size="xsmall">War Room</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
            <Nav>
              <Box fill="horizontal">
                <Tip
                  content={<Box>Users Detail</Box>}
                  dropProps={{ align: { left: "right" } }}
                >
                  <Button
                    hoverIndicator={hoverColor}
                    className="sidebar-position"
                  >
                    <Box
                      pad={{ vertical: "small" }}
                      gap="xsmall"
                      align="center"
                      justify="center"
                    >
                      <Group />
                    </Box>
                    <Text size="xsmall">Users Detail</Text>
                  </Button>
                </Tip>
              </Box>
            </Nav>
          </Box>
          <Box flex overflow="auto">
            <Box
              align="center"
              pad={{ top: "large", horizontal: "small" }}
              fill
            >
              <Box flex align="center" overflow="hidden">
                <Heading textAlign="center" level="2">
                  Side Bar Example
                </Heading>
                <Gremlin />
                <Paragraph textAlign="center" color="dark-5">
                  <Markdown>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Markdown>
                </Paragraph>
                <Paragraph textAlign="center" color="dark-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Paragraph>
                <Paragraph textAlign="center" color="dark-5">
                  <Markdown>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Markdown>
                </Paragraph>
                <Paragraph textAlign="center" color="dark-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Paragraph>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default GridTry;
