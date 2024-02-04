import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./Cart";
const TopArea = () => {
  const [sideBarOpen, setsideBarOpen] = useState(false);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
  const sideBarWidth = isLarge ? "500px" : "320px";
  return (
    <>
      <Box sx={{ padding: "15px 0", backgroundColor: "#000" }}>
        <Container>
          <Grid container>
            <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
              <Typography variant="h1" sx={{ color: "#fff", fontSize: "24px" }}>
                Store API using Redux Toolkit
              </Typography>
            </Grid>
            <Grid
              item
              xl={2}
              lg={2}
              md={2}
              sm={2}
              xs={2}
              sx={{ textAlign: "right" }}
            >
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => {
                  setsideBarOpen(true);
                }}
              >
                <AddShoppingCartIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Drawer
        open={sideBarOpen}
        anchor="right"
        onClose={() => setsideBarOpen(false)}
        PaperProps={{ sx: { width: `${sideBarWidth}` } }}
      >
        <Cart />
      </Drawer>
    </>
  );
};

export default TopArea;
