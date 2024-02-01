import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductList } from "../features/productsSlice";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
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
            {datas &&
              datas.map((data) => (
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                  key={data.id}
                  style={{ marginBottom: "40px" }}
                >
                  <Box>
                    <img
                      src={data.image}
                      alt={data.title}
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        width: "90%",
                      }}
                    />
                  </Box>
                  <Box sx={{ padding: "15px" }}>
                    <Typography variant="h6" style={{ fontSize: "18px" }}>
                      {data.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Rs.{data.price}
                    </Typography>
                    <Grid container>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Button variant="contained">Quick View</Button>
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Button variant="contained">Add To Cart</Button>
                      </Grid>
                    </Grid>
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
