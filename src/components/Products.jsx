import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductList } from "../features/productsSlice";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./Cart";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ProductsDetails from "./ProductDetails";
import { add } from "../features/cartSlice";
const Products = () => {
  const [sideBarOpen, setsideBarOpen] = useState(false);
  const [cartSideBar, setCartSideBar] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  const { datas } = useSelector((state) => state.productsList);
  const handleQuickView = (productId) => {
    setSelectedProductData(productId);
    setsideBarOpen(true);
  };
  const addToCart = (data) => {
    dispatch(add(data));
    setCartSideBar(true);
  };
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
  const sideBarWidth = isLarge ? "500px" : "320px";

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
                  md={4}
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
                        height: "250px",
                        objectFit: "cover",
                        width: "90%",
                      }}
                    />
                  </Box>
                  <Box sx={{ padding: "15px" }}>
                    <Typography variant="h6" sx={{ fontSize: "16px" }}>
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
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => {
                            setsideBarOpen(true);
                            handleQuickView(data.id);
                          }}
                        >
                          Quick View
                        </Button>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        style={{ textAlign: "right" }}
                      >
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                          onClick={() => {
                            setCartSideBar(true);
                            addToCart(data);
                          }}
                        >
                          <AddShoppingCartIcon sx={{ color: "#2e7d32" }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
      <Drawer
        open={sideBarOpen}
        anchor="right"
        onClose={() => setsideBarOpen(false)}
        PaperProps={{ sx: { width: `${sideBarWidth}` } }}
      >
        <ProductsDetails productId={selectedProductData} />
      </Drawer>
      <Drawer
        open={cartSideBar}
        anchor="right"
        onClose={() => setCartSideBar(false)}
        PaperProps={{ sx: { width: `${sideBarWidth}` } }}
      >
        <Cart />
      </Drawer>
    </>
  );
};

export default Products;
