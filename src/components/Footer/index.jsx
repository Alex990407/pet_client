import React from "react";
import { Box, Typography } from "@mui/material";
import instagramIcon from "../../assets/icons/instagram.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginTop: "10px",
        padding: "32px 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "24px",
        }}
      >
        {/* Contact Section */}
        <Box sx={{ padding: "40px 0 0 0" }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "left" }}>
            Contact
          </Typography>
        </Box>

        {/* Phone and Socials Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Колонка на малых экранах
            justifyContent: "space-between",
            gap: "16px",
            "@media (min-width: 600px)": {
              flexDirection: "row", // Строка на больших экранах
            },
          }}
        >
          {/* Phone Section */}
          <Box
            sx={{
              backgroundColor: "rgba(241, 243, 244, 1)",
              padding: "16px",
              borderRadius: "8px",
              flex: 1,
              textAlign: "left",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(139, 139, 139, 1)",
              }}
            >
              Phone
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                color: "#000",
              }}
            >
              +49 30 915-88492
            </Typography>
          </Box>

          {/* Socials Section */}
          <Box
            sx={{
              backgroundColor: "rgba(241, 243, 244, 1)",
              padding: "16px",
              borderRadius: "8px",
              flex: 1,
              textAlign: "left",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(139, 139, 139, 1)",
              }}
            >
              Socials
            </Typography>
            <Box sx={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <img
                src={instagramIcon}
                alt="Instagram"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
              />
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Address and Working Hours Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            "@media (min-width: 600px)": {
              flexDirection: "row",
            },
          }}
        >
          {/* Address Section */}
          <Box
            sx={{
              backgroundColor: "rgba(241, 243, 244, 1)",
              padding: "16px",
              borderRadius: "8px",
              flex: 1,
              textAlign: "left",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(139, 139, 139, 1)",
              }}
            >
              Address
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                color: "#000",
              }}
            >
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </Typography>
          </Box>

          {/* Working Hours Section */}
          <Box
            sx={{
              backgroundColor: "rgba(241, 243, 244, 1)",
              padding: "16px",
              borderRadius: "8px",
              flex: 1,
              textAlign: "left",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(139, 139, 139, 1)",
              }}
            >
              Working Hours
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                color: "#000",
              }}
            >
              24 hours a day
            </Typography>
          </Box>
        </Box>

        {/* Map Section */}
        <Box sx={{ flex: 1, borderRadius: "8px", overflow: "hidden" }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.2856608598686!2d13.4116316!3d52.5144995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d113eb7c97%3A0x1e9c44a16e0bce82!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1634637179543!5m2!1sen!2sus"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
