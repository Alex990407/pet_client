import React, { useEffect, useState } from "react";
import { Box, Typography, styled, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.text.disabled,
  borderRadius: 6,
  fontWeight: 500,
  padding: "4px 16px",
  color: theme.palette.text.secondary,
  textDecoration: "none",
}));

const TitleLineButton = ({ title, linkLabel, linkUrl, children }) => {
  return (
    <Box sx={{ pt: 6 }} display="flex" flexDirection="column" gap={5}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "left",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>

        <Divider sx={{ flexGrow: 1, ml: 4 }} />
        <StyledLink to={linkUrl}>{linkLabel}</StyledLink>
      </Box>

      {children}
    </Box>
  );
};

export default TitleLineButton;
