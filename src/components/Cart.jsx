import { Box, Typography, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addQuantity, remove, decreaseQuantity } from "../features/cartSlice";
const Cart = () => {
  const { data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(remove(id));
  };
  const addQty = (item) => {
    dispatch(addQuantity(item));
  };
  const decreaseQty = (item) => {
    dispatch(decreaseQuantity(item));
  };
  return (
    <>
      <Box sx={{ padding: "30px 0" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            padding: "0 30px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Your Cart
        </Typography>
        {data && data.length < 1 ? (
          <Box>
            <Typography variant="p" sx={{ padding: "0 30px" }}>
              {" "}
              Your Cart is Empty
            </Typography>
          </Box>
        ) : (
          data &&
          data.map((item) => (
            <Box
              key={item.id}
              sx={{
                padding: "25px 0",
                borderBottom: "1px solid #ccc",
                backgroundColor: "#f1f1f1",
              }}
            >
              <Grid
                container
                style={{
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid item xl={5} lg={5} md={4} sm={4} xs={12}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "130px",
                      height: "auto",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={7} sm={7} xs={12}>
                  <Box sx={{ marginBottom: "5px", fontWeight: "bold" }}>
                    {item.title}
                  </Box>
                  <Box sx={{ marginBottom: "5px", fontWeight: "bold" }}>
                    {item.quantity} x {item.price} = Rs.{" "}
                    {item.quantity * item.price}
                  </Box>
                  <IconButton
                    color="primary"
                    aria-label="add"
                    onClick={() => {
                      addQty(item);
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="remove"
                    onClick={() => decreaseQty(item)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={12}>
                  <IconButton
                    color="primary"
                    aria-label="delete"
                    onClick={() => removeItem(item.id)}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          ))
        )}
      </Box>
    </>
  );
};

export default Cart;
