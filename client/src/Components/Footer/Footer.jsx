import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CustomContainer, IconBox } from "./Styles/Styles";
import fbIcon from "../../assets/img/fbicon.png";
import twitterIcon from "../../assets/img/twittericon.png";
import linkedinIcon from "../../assets/img/linkedinicon.png";

const Footer = () => {
  return (
    <Box sx={{ py:3}}>
      <CustomContainer sx={{ borderTop: 1, borderColor: "divider" }}>
        <CustomContainer>
          {/* Contact Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center content horizontally
              justifyContent: "center", // Center content vertically
              textAlign: "center", // Center text
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 1,
              }}
            >
              "Find balance on and off the mat – embrace the journey with each breath. 🧘‍♀️ #YogaLife"
            </Typography>

            {/* Social Media Icons */}
            <IconBox sx={{ mt: 2 }}>
              <img src={fbIcon} alt="Facebook Icon" style={{ cursor: "pointer", marginRight: 2 }} />
              <img src={twitterIcon} alt="Twitter Icon" style={{ cursor: "pointer", marginRight: 2 }} />
              <img src={linkedinIcon} alt="LinkedIn Icon" style={{ cursor: "pointer" }} />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
