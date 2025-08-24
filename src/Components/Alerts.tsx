import "../Common/css/alert.css";
import React, { useEffect } from "react";
import { Box, Typography, Modal } from "@mui/material";
import { motion } from "framer-motion"; // Import Framer Motion
import error from "../Assets/Images/error.png";
import warning from "../Assets/Images/warning.png";
import success from "../Assets/Images/success.png";

interface CustomAlertProps {
  open: boolean;
  onClose: () => void;
  description: string;
  type: "success" | "error" | "warning";
  timeout: number;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ open, onClose, description, type, timeout }) => {
  const getBgColor = (type: "success" | "error" | "warning") => {
    switch (type) {
      case "success":
        return "#00a65a";
      case "error":
        return "#dd4b39";
      case "warning":
        return "#eef279";
      default:
        return "#00a65a";
    }
  };

  const getTextColor = (type: "success" | "error" | "warning") => {
    switch (type) {
      case "warning":
        return "#000000";
      default:
        return "#ffffff";
    }
  };

  const getLogo = (type: "success" | "error" | "warning") => {
    switch (type) {
      case "success":
        return success;
      case "error":
        return error;
      case "warning":
        return warning;
      default:
        return success;
    }
  };

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [open, onClose, timeout]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component={motion.div} // Apply motion directly to Box
        initial={{ opacity: 0, x: 50 }} // Start position (above and invisible)
        animate={{ opacity: 1, x: 0 }} // Animate to normal position
        exit={{ opacity: 0, y: -50 }} // Exit animation
        transition={{ duration: 0.2 }} // Animation speed
        sx={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: 260,
          backgroundColor: getBgColor(type),
          color: getTextColor(type),
          boxShadow: 24,
          padding: "12px",
          borderRadius: "3px",
        }}
      >
        <div className="alert-outer">
          <div className="alert-logo-inner">
            <img className="alertLogo" src={getLogo(type)} alt="Alert Logo" />
          </div>
          <div className="alert-title-inner">
            <Typography sx={{ m: 0.5 }}>{description}</Typography>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomAlert;
