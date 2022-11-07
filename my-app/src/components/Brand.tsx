import { Box, Typography, Avatar, Chip } from "@mui/material";
// import { grey } from "@mui/material/colors";
import React from "react";


type Props = {
  merchants: string;
};

/** 
 * title
 * @param props
 * @returns
 */
const Brand = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Typography variant={"h5"} component={"h5"}>
          Brand
        </Typography>

        <Typography variant={"body1"} component={"h5"}>
          全て見る
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          overflowX: "scroll",
        }}
      >
        <Chip />
      </Box>
    </>
  );
};

export default Brand;