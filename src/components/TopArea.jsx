import { Box, Container, Grid, Typography } from "@mui/material";
const TopArea = () => {
  return (
    <>
      <Box sx={{ padding: "15px 0", backgroundColor: "#000" }}>
        <Container>
          <Grid container>
            <Grid item xl={10} lg={10} md={10} sx={{ textAlign: "center" }}>
              <Typography variant="h1" sx={{ color: "#fff", fontSize: "24px" }}>
                Store API using Redux Toolkit
              </Typography>
            </Grid>
            <Grid item xl={2} lg={2} md={2}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopArea;
