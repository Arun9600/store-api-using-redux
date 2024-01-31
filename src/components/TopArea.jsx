import { Box, Container, Grid, Typography } from "@mui/material";
const TopArea = () => {
  return (
    <>
      <Box sx={{ padding: "15px 0", backgroundColor: "#000" }}>
        <Container>
          <Grid>
            <Grid item md={12} sx={{ textAlign: "center" }}>
              <Typography variant="h1" sx={{ color: "#fff", fontSize: "24px" }}>
                Store API using Redux Toolkit
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopArea;
