import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductList } from "../features/productsSlice";
import { Box, Container, Grid, Typography } from "@mui/material";
const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  });
  const { datas } = useSelector((state) => state.productsList);
  return (
    <>
      <Box sx={{ padding: "30px 0" }}>
        <Container>
          <Grid container>
            {datas.map((data) => (
              <Grid
                item
                xl={4}
                lg={4}
                md={6}
                sm={6}
                xs={12}
                key={data.id}
                style={{ marginBottom: "40px", textAlign: "center" }}
              >
                <Box>
                  <img
                    src={data.image}
                    alt={data.title}
                    style={{ width: "200px" }}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" style={{ fontSize: "18px" }}>
                    {data.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Products;
