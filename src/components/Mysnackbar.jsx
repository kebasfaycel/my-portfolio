import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
export default function Mysnackbar({ open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen({ ...open, state: false });
  };

  return (
    <Snackbar
      open={open.state}
      sx={{
        color: "rgba(157, 78, 221, 1)",
        zIndex: 100,
        backgroundColor: "rgba(0,0,0,0.9)",
        width: "200px",
      }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="outlined"
        sx={{
          "& .MuiAlert-icon": {
            color: "rgba(157, 78, 221, 1)",
            display: open.value === "Pending..." ? "none" : "", // change icon color
          },
          border: "none",
          zIndex: 100,
          width: "200px",
          color: "rgba(157, 78, 221, 1)",
          backgroundColor: "rgba(157, 78, 221, 0.5)",
          fontWeight: "bold",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        {open.value}
      </Alert>
    </Snackbar>
  );
}
