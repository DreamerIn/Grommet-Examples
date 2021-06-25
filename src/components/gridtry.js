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
  RoutedAnchor
} from "grommet";
import {
  Home,
  Aed,
  Actions,
  Braille,
  Cluster,
  Info,
  Inherit,
  Memory,
  Menu,
  Microphone,
  Nodes,
  ObjectUngroup,
  Performance,
  Gremlin
} from "grommet-icons";
import { deepMerge } from "grommet/utils";
import { theme } from "../theme";
class GridTry extends React.Component {
  state = { isOpen: false };

  render() {
    const { isOpen } = this.state;
    const hoverColor = { color: "accent-1", opacity: 0.9 };
    return (
      <Grommet theme={theme} full>
        <Box direction="row" fill>
          <Box
            fill="vertical"
            width="sidebar"
            background="dark-2"
            elevation="medium"
            className={`sidebar${isOpen ? " sidebar--open" : ""}`}
          >
            <Button
              hoverIndicator="dark-4"
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

            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Home size="xxsmall" />
              </Box>
              <span>Home</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Aed />
              </Box>
              <span>Aed</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Actions />
              </Box>
              <span>Actions</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Braille />
              </Box>
              <span>Braille</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Cluster />
              </Box>
              <span>Cluster</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Info />
              </Box>
              <span>Info</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Inherit />
              </Box>
              <span>Inherit</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Memory />
              </Box>
              <span>Memory</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Microphone />
              </Box>
              <span>Microphone</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Nodes />
              </Box>
              <span>Nodes</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <ObjectUngroup />
              </Box>
              <span>ObjectUngroup</span>
            </Button>
            <Button hoverIndicator="dark-4" className="sidebar-position">
              <Box
                pad={{ vertical: "small" }}
                gap="xsmall"
                align="center"
                justify="center"
              >
                <Performance />
              </Box>
              <span>Performance</span>
            </Button>
          </Box>
          <Box flex>
            <Box
              align="center"
              pad={{ top: "large", horizontal: "small" }}
              fill
            >
              <Box flex align="center" overflow="auto">
                <Heading textAlign="center" level="2">
                  Grommet Pattern #2
                </Heading>
                <Paragraph textAlign="center" color="dark-5">
                  <Markdown>
                    Here we show an integration with `react-router`. We add a
                    sidebar where you can navigate between pages. Don't forget
                    you can change pretty much anything since all components are
                    exposed. This is just a reference implementation.
                  </Markdown>
                </Paragraph>
                <Paragraph textAlign="center" color="dark-5">
                  You can click <RoutedAnchor path="/www" label="here" /> for a
                  not found example. This is a link that does not exist in this
                  app and it will intentionally show a not found page.
                </Paragraph>
              </Box>
              <Gremlin />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default GridTry;
