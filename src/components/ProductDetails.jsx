import { Box, Typography, Rating } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../features/productDetailsSlice";
const ProductsDetails = ({ productId }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productsDetail);
  useEffect(() => {
    dispatch(getProductDetails(productId));
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
                style={{ width: "100%", objectFit: "cover", height: "300px" }}
              />
              <Typography
                variant="h5"
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "15px",
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: "15px",
                }}
              >
                Price: Rs.{data.price}
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "16px", marginBottom: "15px" }}
              >
                <strong>Category:</strong> {data.category}
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: "16px", marginBottom: "15px" }}
              >
                <strong>Description:</strong> {data.description}
              </Typography>
              <Rating readOnly value={data.rating?.rate} precision={0.5} />
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
