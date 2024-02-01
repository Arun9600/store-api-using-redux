import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../features/productDetailsSlice";
const ProductsDetails = ({ productId }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productsDetail);
  useEffect(() => {
    if (productId) {
      dispatch(getProductDetails(productId));
    }
  }, [dispatch, productId]);
  return (
    <>
      <Box sx={{ padding: "30px" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {data ? (
            <Box key={data.id}>
              <img
                src={data.image}
                alt={data.title}
                style={{ width: "100%", objectFit: "cover", height: "350px" }}
              />
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {data.title}
              </Typography>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Price: Rs.{data.price}
              </Typography>
              <Typography variant="h6">
                <strong>Category:</strong> {data.category}
              </Typography>
              <Typography variant="h6">
                <strong>Description:</strong> {data.description}
              </Typography>
            </Box>
          ) : (
            ""
          )}
        </Typography>
      </Box>
    </>
  );
};

export default ProductsDetails;
