import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SelfImprovementIcon from "../../assets/img/soul.png";
import AuthModal from '../Auth/AuthModal';
import ProfileIcon from '../Auth/ProfileIcon';
import { AppState } from '../../Context/AppContext';
import { Link } from 'react-router-dom';
const Header = (props) => {
  const { title } = props;
  const { auth } = AppState()
  return (
    <div style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255,255,255, 0.8)' }}>
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <img src={SelfImprovementIcon}  alt="img1"  style={{ maxWidth: "8%", marginBottom: "1rem" }}/>
      
      <Typography
         component="h2"
         variant="h5"
         color="primary" // You can change the color to your preferred color
         align="center"
         noWrap
         sx={{
           flex: 1,
           padding: '20px', // Add some padding for better spacing
           background: '#f0f0f0', // Add a background color
           borderRadius: '8px', // Add some border radius for a rounded look
           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
         }}
       >
        
      
        {title}
      </Typography>

      {auth ? <ProfileIcon /> : <AuthModal />}
      
      

    </Toolbar>
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header