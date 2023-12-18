import React from 'react'
import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { CustomBox, Title } from './Styles/Styles'
import CustomButton from '../../Button/CustomButton'
import img1 from '../../../assets/img/pose2.png'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <Box sx={{ backgroundColor: "#2ce1d9", minHeight: "80vh" }}>
            <Container>
                <CustomBox>
                <Box sx={{ flex: "0.80" }}>
                        <img
                            src={img1}
                            alt="img1"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 5,
                                mb: 5,
                            }}
                        >
                            Welcome to Yoga Classes
                        </Typography>
                        <Title variant="h1">
                        Find a life you love living.
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            Yoga is a holistic practice that harmonizes the body, mind, and spirit through a combination of physical postures, breath control, and meditation. It promotes flexibility, strength, and inner peace, fostering overall well-being and a deeper connection with oneself.
                        </Typography>
                        <Link to="#section1">
                        <CustomButton
                            backgroundColor="#0F1B4C"
                            color="#fff"
                            buttonText="More About Us"
                            heroBtn={true}
                        />
                        </Link>
                    </Box>

                    
                </CustomBox>
            </Container>
        </Box>
    )
}

export default Hero