import React from "react";
import { Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BulkList from "../bulkList";
import DragDrop from "../../common/dragDrop";
import UploadCard from "../uploadCard";
import { bulkUpload } from "../../constant/index";

const BulkUpload = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: 80,
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <ArrowBackIcon color="primary" sx={{ fontSize: "2rem" }} />
          <Box sx={{ paddingLeft: "10px" }}>
            <Typography variant="h1" sx={{ fontSize: "1.2rem" }}>
              {bulkUpload.BULK_UPLOAD_HEAD}
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "1rem", color: "grey", margin: "5px 0" }}
            >
              {bulkUpload.BULK_UPLOAD_SUBHEAD}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "white", margin: " 2rem", borderRadius: "10px" }}
      >
        <UploadCard />
        <BulkList />
      </Box>
    </Box>
  );
};

export default BulkUpload;
