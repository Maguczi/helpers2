import { Avatar, Box, Button } from "@mui/material";
import NextLink from "next/link";

export const Link = (props) => (
  <NextLink href={props.href}>
    <Button size="large" variant="contained">
      <Box>{props.name}</Box>
    </Button>
  </NextLink>
);
