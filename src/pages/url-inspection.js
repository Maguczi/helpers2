import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { UrlInspection } from "../components/url-inspection/url-inspection";

const Page = () => (
  <>
    <Head>
      <title>URL inspection | Helpers</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          URL inspection
        </Typography>
        <Box sx={{ pt: 3 }}>
          <UrlInspection />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
