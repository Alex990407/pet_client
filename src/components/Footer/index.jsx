import React from "react";
import { Box, Typography } from "@mui/material";
import mapImage from "../../assets/map.png"; // Импорт изображения карты

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "32px 0",
        borderTop: "2px solid #ccc", // Верхняя граница
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
          gap: "24px",
        }}
      >
        {/* Contact Section */}
        <Box sx={{ flex: 1, alignSelf: "flex-start", paddingTop: "40px" }}>
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
        </Box>

        {/* Phone and Socials Section */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
          {/* Phone */}
          <Box
            sx={{
              marginBottom: "16px",
              backgroundColor: "rgba(241, 243, 244, 1)", // Установленный цвет
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">Phone</Typography>
            <Typography variant="h6" color="textPrimary">
              +49 30 915-88492
            </Typography>
          </Box>

          {/* Socials */}
          <Box
            sx={{
              backgroundColor: "rgba(241, 243, 244, 1)", // Установленный цвет
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">Socials</Typography>
            {/* Место для иконок социальных сетей, если нужно */}
          </Box>
        </Box>

        {/* Address and Working Hours Section */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
          {/* Address */}
          <Box
            sx={{
              marginBottom: "16px",
              backgroundColor: "rgba(241, 243, 244, 1)", // Установленный цвет
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">Address</Typography>
            <Typography variant="h6" color="textPrimary">
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </Typography>
          </Box>

          {/* Working Hours */}
          <Box
            sx={{
              backgroundColor: "rgba(241, 243, 244, 1)", // Установленный цвет
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Typography variant="body1">Working Hours</Typography>
            <Typography variant="h6" color="textPrimary">
              24 hours a day
            </Typography>
          </Box>
        </Box>

        {/* Map Section */}
        <Box sx={{ flex: 1 }}>
          <img
            src={mapImage}
            alt="Google Maps Location"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

// ===================================================================

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "white",
//         padding: "32px 0",
//         borderTop: "2px solid #ccc", // Верхняя граница
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "0 16px",
//           gap: "24px",
//         }}
//       >
//         {/* Contact Section */}

//         <Box
//           sx={{
//             flex: 1,
//             alignSelf: "flex-start",
//             paddingLeft: "20px",
//             paddingTop: "40px",
//           }}
//         >
//           <Typography variant="h4" gutterBottom>
//             Contact
//           </Typography>
//         </Box>

//         {/* Phone and Socials Section */}
//         <Box
//           sx={{
//             flex: 1,
//             display: "flex",
//             justifyContent: "space-between",
//             backgroundColor: "rgba(241, 243, 244, 1)",
//             gap: "16px",
//             padding: "32px",
//           }}
//         >
//           <Box sx={{ marginBottom: "16px" }}>
//             <Typography variant="body1">Phone</Typography>
//             <Typography variant="h6" color="textPrimary">
//               +49 30 915-88492
//             </Typography>
//           </Box>
//           <Box>
//             <Typography variant="body1">Socials</Typography>
//             {/* Место для иконок социальных сетей, если нужно */}
//           </Box>
//         </Box>

//         {/* Address and Working Hours Section */}
//         <Box sx={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
//           <Box sx={{ marginBottom: "16px" }}>
//             <Typography variant="body1">Address</Typography>
//             <Typography variant="h6" color="textPrimary">
//               Wallstraße 9-13, 10179 Berlin, Deutschland
//             </Typography>
//           </Box>
//           <Box>
//             <Typography variant="body1">Working Hours</Typography>
//             <Typography variant="h6" color="textPrimary">
//               24 hours a day
//             </Typography>
//           </Box>
//         </Box>

//         {/* Map Section */}
//         <Box sx={{ flex: 1 }}>
//           <img
//             src={mapImage}
//             alt="Google Maps Location"
//             style={{ width: "100%", height: "auto" }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;
