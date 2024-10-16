import { useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "../icons/menu";
import { Git as GitIcon } from "../icons/git";
import FileCopy from "@mui/icons-material/FileCopy";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/",
    icon: <MenuIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/names",
    icon: <GitIcon fontSize="small" />,
    title: "Names",
  },
  {
    href: "/pages",
    icon: <FileCopy fontSize="small" />,
    title: "Pages",
  },
  {
    href: "/url-inspection",
    icon: <FindInPageIcon fontSize="small" />,
    title: "URL inspection",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
